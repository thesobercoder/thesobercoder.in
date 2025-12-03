"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;
    let phi = 3.5;

    const onResize = () => {
      width = canvas.offsetWidth;
    };

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 3.5,
      theta: 0.35,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.8, 0.7, 0.6], // Warm beige/brown base
      opacity: 1,
      markerColor: [0.9, 0.6, 0.2], // Amber marker
      glowColor: [0.9, 0.7, 0.4], // Warm glow
      markers: [{ location: [22.5726, 88.3639], size: 0.1 }],
      onRender: (state) => {
        state.width = width * 2;
        state.height = width * 2;
        state.phi = phi;
        phi += 0.001;
      },
    });

    window.addEventListener("resize", onResize);

    setTimeout(() => {
      if (canvas) {
        canvas.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="aspect-square size-full"
      style={{
        contain: "layout paint size",
        opacity: 0,
        transition: "opacity 1s ease",
      }}
    />
  );
};
