import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Coulomb3DScene({ minHeight = 260, intensity = 0.4, mode = "repel", q1Sign = 1, q2Sign = -1 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || minHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.9, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(3, 5, 2);
    scene.add(dir);

    // dos cargas individuales
    const sphereGeom = new THREE.SphereGeometry(0.4, 32, 32);
    const matLeft = new THREE.MeshStandardMaterial({ color: q1Sign >= 0 ? 0xff5555 : 0x5599ff });
    const matRight = new THREE.MeshStandardMaterial({ color: q2Sign >= 0 ? 0xff5555 : 0x5599ff });

    const q1 = new THREE.Mesh(sphereGeom, matLeft);
    const q2 = new THREE.Mesh(sphereGeom, matRight);
    q1.position.set(-1.2, 0, 0);
    q2.position.set(1.2, 0, 0);
    scene.add(q1, q2);

    // fuerza entre cargas
    const forceGroup = new THREE.Group();
    const coneGeom = new THREE.ConeGeometry(0.06, 0.35, 16);
    const forceMat = new THREE.MeshBasicMaterial({ color: 0xffdd55 });

    const clamped = Math.min(1, Math.max(0, intensity));
    const nArrowsBase = 7 + Math.round(clamped * 8);
    const nArrows = mode === "none" ? 4 : nArrowsBase;

    for (let i = 0; i < nArrows; i++) {
      const t = (i / (nArrows - 1) - 0.5) * 2;
      const x = t * 0.8;
      const y = (Math.random() - 0.5) * 0.1;

      const cone1 = new THREE.Mesh(coneGeom, forceMat);
      cone1.position.set(x - 0.25, y, 0);
      const cone2 = new THREE.Mesh(coneGeom, forceMat);
      cone2.position.set(-x + 0.25, y, 0);

      if (mode === "attract") {
        // flechas hacia el centro
        cone1.lookAt(0, y, 0);
        cone2.lookAt(0, y, 0);
      } else {
        // repel (por defecto) u otros: flechas hacia afuera
        cone1.lookAt(1, y, 0);
        cone2.lookAt(-1, y, 0);
      }

      const scaleY = 1 + clamped * 1.5 * (mode === "none" ? 0.4 : 1);
      cone1.scale.set(1, scaleY, 1);
      cone2.scale.set(1, scaleY, 1);
      forceGroup.add(cone1);
      forceGroup.add(cone2);
    }

    scene.add(forceGroup);

    // Partículas de flujo siguiendo el campo eléctrico resultante entre dos cargas
    const particleGeom = new THREE.SphereGeometry(0.03, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
    const particles = new THREE.Group();
    scene.add(particles);

    const flowCount = 120;
    const flow = [];
    const spawnBetween = () => -0.9 + Math.random() * 1.8; // x entre cargas
    const spawnPos = () => new THREE.Vector3(spawnBetween(), (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6);

    for (let i = 0; i < flowCount; i++) {
      const m = new THREE.Mesh(particleGeom, particleMat);
      m.position.copy(spawnPos());
      particles.add(m);
      flow.push({ m, life: Math.random() * 1.5 });
    }

    // Cargas para el cálculo del campo: q1 en (-1.2,0,0), q2 en (1.2,0,0)
    const q1Pos = new THREE.Vector3(-1.2, 0, 0);
    const q2Pos = new THREE.Vector3(1.2, 0, 0);
    // signos de las cargas provienen de props q1Sign y q2Sign

    // Determinar sentido del flujo según modo (atracción: hacia el centro; repulsión: hacia afuera)
    const dirSign = mode === "attract" ? -1 : mode === "repel" ? 1 : 0.2;

    function fieldVectorAt(p) {
      // E ~ sum(q * r_hat / r^2)
      const v = new THREE.Vector3();
      const r1 = new THREE.Vector3().subVectors(p, q1Pos);
      const r2 = new THREE.Vector3().subVectors(p, q2Pos);
      const d1 = Math.max(0.12, r1.length());
      const d2 = Math.max(0.12, r2.length());
      v.add(r1.multiplyScalar(q1Sign / (d1 * d1 * d1)));
      v.add(r2.multiplyScalar(q2Sign / (d2 * d2 * d2)));
      // Ajuste de sentido global según modo (para enfatizar atracción/repulsión visual)
      v.multiplyScalar(dirSign);
      return v;
    }

    const clock = new THREE.Clock();
    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const speed = 0.3 + clamped * 1.5;

      forceGroup.rotation.z = 0.05 * Math.sin(t * speed);
      q1.position.y = 0.05 * Math.sin(t * 1.3);
      q2.position.y = 0.05 * Math.cos(t * 1.1);

      // Actualizar partículas siguiendo el campo
      const dt = 0.016;
      const kSpeed = 0.8 + clamped * 2.0;
      for (let i = 0; i < flow.length; i++) {
        const p = flow[i];
        const v = fieldVectorAt(p.m.position);
        p.m.position.addScaledVector(v, dt * kSpeed);
        p.life += dt;

        // Reset si sale del rango
        if (
          p.m.position.x < -2 ||
          p.m.position.x > 2 ||
          Math.abs(p.m.position.y) > 1.2 ||
          Math.abs(p.m.position.z) > 1.2 ||
          p.life > 3
        ) {
          p.m.position.copy(spawnPos());
          p.life = 0;
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
  }, [minHeight, intensity, mode, q1Sign, q2Sign]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full bg-slate-900 rounded-xl overflow-hidden"
      style={{ minHeight }}
    />
  );
}
