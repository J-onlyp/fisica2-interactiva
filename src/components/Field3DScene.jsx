import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Field3DScene({ minHeight = 260, intensity = 0.4, isNegative = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || minHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.9, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(3, 5, 2);
    scene.add(dir);

    // UNA sola carga
    const sphereGeom = new THREE.SphereGeometry(0.45, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: isNegative ? 0x5599ff : 0xff5555,
    });
    const charge = new THREE.Mesh(sphereGeom, sphereMat);
    charge.position.set(0, 0, 0);
    scene.add(charge);

    // Flechas radiales con ArrowHelper (dirección del campo)
    const fieldGroup = new THREE.Group();
    const clamped = Math.min(1, Math.max(0, intensity));
    const nArrows = 28;
    const radius = 1.2;
    const arrowLength = 0.55 + clamped * 0.4;
    const headLength = 0.18 + clamped * 0.12;
    const headWidth = 0.08 + clamped * 0.05;
    const color = isNegative ? 0x60a5fa : 0xfbbf24;

    for (let i = 0; i < nArrows; i++) {
      const angle = (i / nArrows) * Math.PI * 2;
      const dir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
      const origin = dir.clone().multiplyScalar(radius);
      const sense = isNegative ? dir.clone().multiplyScalar(-1) : dir.clone();
      const arrow = new THREE.ArrowHelper(sense.normalize(), origin, arrowLength, color, headLength, headWidth);
      fieldGroup.add(arrow);
    }

    scene.add(fieldGroup);

    // Partículas de flujo radial (salen si q>0, entran si q<0)
    const particleGeom = new THREE.SphereGeometry(0.025, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: isNegative ? 0x60a5fa : 0xfbbf24 });
    const particles = new THREE.Group();
    scene.add(particles);

    const flow = [];
    const count = 110;
    function spawnParticle() {
      const r0 = isNegative ? 1.6 + Math.random() * 0.6 : 0.35 + Math.random() * 0.2;
      const theta = Math.random() * Math.PI * 2;
      const pos = new THREE.Vector3(Math.cos(theta) * r0, (Math.random() - 0.5) * 0.15, Math.sin(theta) * r0);
      const m = new THREE.Mesh(particleGeom, particleMat);
      m.position.copy(pos);
      particles.add(m);
      const lifeMax = 3 + Math.random() * 2;
      return { m, life: 0, lifeMax };
    }
    for (let i = 0; i < count; i++) flow.push(spawnParticle());

    const clock = new THREE.Clock();
    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const speed = 0.35 + clamped * 1.4;
      fieldGroup.rotation.y += 0.0015 * speed;

      charge.position.y = 0.05 * Math.sin(t * 2);

      // Movimiento radial de partículas
      const dt = 0.016;
      const k = 0.6 + clamped * 1.6;
      for (let i = 0; i < flow.length; i++) {
        const p = flow[i];
        const v = new THREE.Vector3().subVectors(p.m.position, charge.position);
        const dist = Math.max(0.2, v.length());
        v.normalize();
        if (isNegative) v.multiplyScalar(-1); // entrar hacia la carga
        const falloff = 1.2 / (dist * dist);
        p.m.position.addScaledVector(v, dt * k * falloff);
        p.life += dt;
        if (p.life > p.lifeMax || p.m.position.length() > 3.2 || p.m.position.length() < 0.25) {
          particles.remove(p.m);
          flow[i] = spawnParticle();
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      const newW = mount.clientWidth;
      const newH = mount.clientHeight || minHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(id);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [minHeight, intensity, isNegative]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full bg-slate-900 rounded-xl overflow-hidden"
      style={{ minHeight }}
    />
  );
}
