"use client";
import { ParticlesAnimation } from "@/classes/ParticlesAnimation";
import { ParticlesTypes } from "@/type";
import useViewportState from "beautiful-react-hooks/useViewportState";
import { useEffect, useRef } from "react";

export function Canvas() {
  const { width, height } = useViewportState();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const options: ParticlesTypes = {
      bg_color_center: "#0d1227",
      bg_color_outer: "#05060f",
      particle_color: "#ffffff",
      canvas_height: height,
      canvas_width: width,
      canvas: canvasRef.current,
    };
    new ParticlesAnimation(options);
  }, [width, height]);

  return <canvas ref={canvasRef} />;
}
