import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Coulomb3DScene({ minHeight = 260, intensity = 0.4 }) {
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
    const matPos = new THREE.MeshStandardMaterial({ color: 0xff5555 });
    const matNeg = new THREE.MeshStandardMaterial({ color: 0x5599ff });

    const q1 = new THREE.Mesh(sphereGeom, matPos);
    const q2 = new THREE.Mesh(sphereGeom, matNeg);
    q1.position.set(-1.2, 0, 0);
    q2.position.set(1.2, 0, 0);
    scene.add(q1, q2);

    // fuerza entre cargas
    const forceGroup = new THREE.Group();
    const coneGeom = new THREE.ConeGeometry(0.06, 0.35, 16);
    const forceMat = new THREE.MeshBasicMaterial({ color: 0xffdd55 });

    const clamped = Math.min(1, Math.max(0, intensity));
    const spacing = 0.25;
    const nArrows = 7 + Math.round(clamped * 8);

    for (let i = 0; i < nArrows; i++) {
      const t = (i / (nArrows - 1) - 0.5) * 2;
      const x = t * 0.8;
      const y = (Math.random() - 0.5) * 0.1;

      const cone1 = new THREE.Mesh(coneGeom, forceMat);
      cone1.position.set(x - 0.25, y, 0);
      cone1.rotation.z = 0; // hacia la derecha
      cone1.lookAt(1, y, 0);
      cone1.scale.set(1, 1 + clamped * 1.5, 1);
      forceGroup.add(cone1);

      const cone2 = new THREE.Mesh(coneGeom, forceMat);
      cone2.position.set(-x + 0.25, y, 0);
      cone2.lookAt(-1, y, 0);
      cone2.scale.set(1, 1 + clamped * 1.5, 1);
      forceGroup.add(cone2);
    }

    scene.add(forceGroup);

    // Partículas alrededor
    const particleGeom = new THREE.SphereGeometry(0.03, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
    const particles = new THREE.Group();
    for (let i = 0; i < 70; i++) {
      const p = new THREE.Mesh(particleGeom, particleMat);
      p.position.set(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 1.5
      );
      particles.add(p);
    }
    scene.add(particles);

    const clock = new THREE.Clock();
    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const speed = 0.3 + clamped * 1.5;

      forceGroup.rotation.z = 0.05 * Math.sin(t * speed);
      particles.rotation.y += 0.003 * speed;
      q1.position.y = 0.05 * Math.sin(t * 1.3);
      q2.position.y = 0.05 * Math.cos(t * 1.1);

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
  }, [minHeight, intensity]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full bg-slate-900 rounded-xl overflow-hidden"
      style={{ minHeight }}
    />
  );
}
