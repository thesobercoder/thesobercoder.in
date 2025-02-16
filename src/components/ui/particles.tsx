"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function MousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const hexInt = parseInt(hex, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}

const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mousePosition = MousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetMouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const animationFrameId = useRef<number>(0);
  const lastMouseMove = useRef<number>(0);
  const MOUSE_MOVE_THROTTLE = 8; // Increased responsiveness (was 16)

  const resizeCanvas = useCallback(() => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  }, [dpr]);

  const circleParams = useCallback((): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  }, [size]);

  const rgb = hexToRgb(color);

  const drawCircle = useCallback(
    (circle: Circle, update = false) => {
      if (context.current) {
        const { x, y, translateX, translateY, size, alpha } = circle;
        context.current.translate(translateX, translateY);
        context.current.beginPath();
        context.current.arc(x, y, size, 0, 2 * Math.PI);
        context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
        context.current.fill();
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

        if (!update) {
          circles.current.push(circle);
        }
      }
    },
    [dpr, rgb]
  );

  const clearContext = useCallback(() => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
    }
  }, []);

  const drawParticles = useCallback(() => {
    clearContext();
    if (circles.current.length === 0) {
      const particleCount = quantity;
      for (let i = 0; i < particleCount; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    }
  }, [quantity, clearContext, circleParams, drawCircle]);

  const initCanvas = useCallback(() => {
    resizeCanvas();
    drawParticles();
  }, [resizeCanvas, drawParticles]);

  const onMouseMove = useCallback(() => {
    const now = Date.now();
    if (now - lastMouseMove.current < MOUSE_MOVE_THROTTLE) return;

    lastMouseMove.current = now;
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        targetMouse.current.x = x;
        targetMouse.current.y = y;
      }
    }
  }, [mousePosition.x, mousePosition.y]);

  type Circle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
  };

  const animate = useCallback(() => {
    clearContext();

    // Smooth mouse movement
    const dx = (targetMouse.current.x - mouse.current.x) * 0.1;
    const dy = (targetMouse.current.y - mouse.current.y) * 0.1;
    mouse.current.x += dx;
    mouse.current.y += dy;

    circles.current.forEach((circle: Circle) => {
      // Set constant alpha directly
      circle.alpha = circle.targetAlpha;

      // Update positions
      circle.x += (circle.dx + vx) * 0.5;
      circle.y += (circle.dy + vy) * 0.5;

      // Wrap around screen edges
      if (circle.x < -circle.size) {
        circle.x = canvasSize.current.w + circle.size;
      } else if (circle.x > canvasSize.current.w + circle.size) {
        circle.x = -circle.size;
      }

      if (circle.y < -circle.size) {
        circle.y = canvasSize.current.h + circle.size;
      } else if (circle.y > canvasSize.current.h + circle.size) {
        circle.y = -circle.size;
      }

      // Smooth particle movement
      const targetTranslateX = mouse.current.x / (staticity / circle.magnetism);
      const targetTranslateY = mouse.current.y / (staticity / circle.magnetism);

      circle.translateX += (targetTranslateX - circle.translateX) / ease;
      circle.translateY += (targetTranslateY - circle.translateY) / ease;

      drawCircle(circle, true);
    });

    animationFrameId.current = window.requestAnimationFrame(animate);
  }, [clearContext, drawCircle, staticity, ease, vx, vy]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [color, animate, initCanvas]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y, onMouseMove]);

  useEffect(() => {
    initCanvas();
  }, [refresh, initCanvas]);

  return (
    <div
      className={cn("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};

export default Particles;
