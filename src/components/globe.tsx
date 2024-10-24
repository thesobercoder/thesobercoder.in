"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(undefined);
  useEffect(() => {
    let width = canvasRef?.current?.offsetWidth ?? 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    const globe = createGlobe(canvasRef.current as HTMLCanvasElement, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 3.5,
      theta: 0.35,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: [
        {
          location: [22.5726, 88.3639],
          size: 0.1,
        },
      ],
      onRender: (state) => {
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef as React.RefObject<HTMLCanvasElement>}
      className="mt-4 mx-auto lg:-mx-[8rem] aspect-square size-96 lg:size-[30rem]"
      style={{
        contain: "layout paint size",
        opacity: 0,
        transition: "opacity 1s ease",
      }}
    />
  );
}
