import { useEffect, useRef } from "react";
import * as THREE from "three";


export default function Simple3DScene({ minHeight = 260, intensity = 0.4 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || minHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.0, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // luces
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(3, 5, 2);
    scene.add(dirLight);

    // cargas (esferas)
    const sphereGeom = new THREE.SphereGeometry(0.35, 32, 32);
    const matPos = new THREE.MeshStandardMaterial({ color: 0xff5555 });
    const matNeg = new THREE.MeshStandardMaterial({ color: 0x5599ff });

    const sphere1 = new THREE.Mesh(sphereGeom, matPos);
    const sphere2 = new THREE.Mesh(sphereGeom, matNeg);

    sphere1.position.set(-1, 0, 0);
    sphere2.position.set(1, 0, 0);
    scene.add(sphere1, sphere2);

    // intensidad
    const clamped = Math.min(1, Math.max(0, intensity));
    const speedFactor = 0.3 + clamped * 1.7;

    // flechas del campo
    const arrowGroup = new THREE.Group();
    const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffdd55 });
    const coneGeom = new THREE.ConeGeometry(0.05, 0.2, 12);

    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2;
      const r = 0.9 + (i % 3) * 0.25;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      const cone = new THREE.Mesh(coneGeom, arrowMat);
      cone.position.set(x, 0, z);
      cone.lookAt(sphere1.position);
      cone.scale.set(1, 1 + clamped * 2, 1);
      arrowGroup.add(cone);
    }

    scene.add(arrowGroup);

    //  partículas
    const particleGeom = new THREE.SphereGeometry(0.03, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
    const particles = new THREE.Group();

    for (let i = 0; i < 60; i++) {
      const p = new THREE.Mesh(particleGeom, particleMat);
      p.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.3) * 2,
        (Math.random() - 0.5) * 4
      );
      particles.add(p);
    }

    scene.add(particles);

    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      const t = clock.getElapsedTime() * speedFactor;
      animationId = requestAnimationFrame(animate);

      particles.rotation.y += 0.003 * speedFactor;
      arrowGroup.rotation.y += 0.0015 * speedFactor;

      // pequeño “rebote” vertical
      sphere1.position.y = Math.sin(t) * 0.05;
      sphere2.position.y = Math.cos(t) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight || minHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [minHeight, intensity]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full bg-slate-900"
      style={{ minHeight }}
    />
  );
}
