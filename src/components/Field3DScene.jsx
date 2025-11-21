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

    // Flechas radiales (líneas de campo)
    const fieldGroup = new THREE.Group();
    const coneGeom = new THREE.ConeGeometry(0.05, 0.25, 12);
    const fieldMat = new THREE.MeshBasicMaterial({ color: 0xffdd55 });

    const clamped = Math.min(1, Math.max(0, intensity));
    const nRays = 24; // número de líneas

    for (let i = 0; i < nRays; i++) {
      const angle = (i / nRays) * Math.PI * 2;
      const r = 1.4;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      const cone = new THREE.Mesh(coneGeom, fieldMat);
      cone.position.set(x, 0, z);

      if (isNegative) {
        // Hacia la carga
        cone.lookAt(charge.position);
      } else {
        // Hacia afuera
        const outward = new THREE.Vector3(x * 2, 0, z * 2);
        cone.lookAt(outward);
      }

      cone.scale.set(1, 1 + clamped * 2, 1);
      fieldGroup.add(cone);
    }

    scene.add(fieldGroup);

    // Partículas suaves alrededor
    const particleGeom = new THREE.SphereGeometry(0.03, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
    const particles = new THREE.Group();
    for (let i = 0; i < 80; i++) {
      const p = new THREE.Mesh(particleGeom, particleMat);
      p.position.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.3) * 2,
        (Math.random() - 0.5) * 5
      );
      particles.add(p);
    }
    scene.add(particles);

    const clock = new THREE.Clock();
    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const speed = 0.25 + clamped * 1.2;
      fieldGroup.rotation.y += 0.002 * speed;
      particles.rotation.y += 0.0015 * speed;

      charge.position.y = 0.05 * Math.sin(t * 2);

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
