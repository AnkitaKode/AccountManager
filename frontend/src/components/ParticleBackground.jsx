import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        let scene, camera, renderer, particles;

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            currentMount.appendChild(renderer.domElement);

            const particleCount = 1000;
            const positions = new Float32Array(particleCount * 3);
            const velocities = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount * 3; i += 3) {
                positions[i] = (Math.random() - 0.5) * 2000;
                positions[i + 1] = (Math.random() - 0.5) * 2000;
                positions[i + 2] = (Math.random() - 0.5) * 2000;
                velocities[i] = (Math.random() - 0.5) * 0.5;
                velocities[i + 1] = (Math.random() - 0.5) * 0.5;
                velocities[i + 2] = (Math.random() - 0.5) * 0.5;
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2, transparent: true, opacity: 0.6 });
            particles = new THREE.Points(geometry, material);
            particles.userData = { velocities };
            scene.add(particles);

            camera.position.z = 1000;
        };

        const animate = () => {
            requestAnimationFrame(animate);
            const positions = particles.geometry.attributes.position.array;
            const velocities = particles.userData.velocities;

            for (let i = 0; i < positions.length; i += 3) {
                positions[i] += velocities[i];
                positions[i + 1] += velocities[i + 1];
                positions[i + 2] += velocities[i + 2];

                if (positions[i] > 1000 || positions[i] < -1000) positions[i] = -positions[i];
                if (positions[i + 1] > 1000 || positions[i + 1] < -1000) positions[i + 1] = -positions[i + 1];
                if (positions[i + 2] > 1000 || positions[i + 2] < -1000) positions[i + 2] = -positions[i + 2];
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };

        init();
        animate();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div id="canvas-container" ref={mountRef}></div>;
};

export default ParticleBackground;