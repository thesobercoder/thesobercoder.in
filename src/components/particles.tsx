"use client";

import { useEffect, useState } from "react";

/**
 * Pure CSS Particle Animation Component
 *
 * Generates 120 pseudo-randomly positioned particles that drift across the screen
 * using pure CSS keyframe animations. No JavaScript animation loops after render.
 *
 * Randomization (at mount time only, after hydration):
 * - Position: left/top percentages
 * - Size: 2-4px continuous range
 * - Animation: 6 different drift patterns
 * - Duration: 20-40 seconds
 * - Delay: 0-15 seconds stagger
 * - Opacity: 0.4-0.7
 */

const PARTICLE_COUNT = 120;
const DRIFT_ANIMATIONS = [
  "drift-1",
  "drift-2",
  "drift-3",
  "drift-4",
  "drift-5",
  "drift-6",
];

interface Particle {
  id: number;
  left: number; // 0-100%
  top: number; // 0-100%
  size: number; // px
  animation: string;
  duration: number; // seconds
  delay: number; // seconds
  opacity: number; // 0-1
}

function generateParticles(): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 2, // 2-4 pixels
      animation:
        DRIFT_ANIMATIONS[Math.floor(Math.random() * DRIFT_ANIMATIONS.length)],
      duration: 20 + Math.random() * 20, // 20-40 seconds
      delay: Math.random() * 15, // 0-15 seconds
      opacity: 0.4 + Math.random() * 0.3, // 0.4-0.7
    });
  }

  return particles;
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);

  return (
    <div className="fixed inset-0 z-[-9999] pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            backgroundColor: "#555555",
            opacity: particle.opacity,
            animation: `${particle.animation} ${particle.duration.toFixed(1)}s ease-in-out ${particle.delay.toFixed(1)}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
