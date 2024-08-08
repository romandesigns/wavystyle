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
    const canvas = canvasRef.current;
    const options: ParticlesTypes = {
      bg_color_center: "#13192e",
      bg_color_outer: "#05060f",
      particle_color: "#ffffff",
      canvas_height: height,
      canvas_width: width,
      canvas: canvas,
    };
    const animation = new ParticlesAnimation(options);
    return () => {
      animation.stop();
    };
  }, [width, height]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    </>
  );
}
