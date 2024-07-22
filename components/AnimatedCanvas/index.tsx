"use client";
import React, { useRef, useEffect } from "react";
import { ParticlesAnimation } from "@/classes/ParticlesAnimation";
import useViewportState from "beautiful-react-hooks/useViewportState";
import { ParticlesTypes } from "@/type";

export function Canvas() {
  const { width, height } = useViewportState();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const options: ParticlesTypes = {
      bg_color_center: "#090d1c",
      bg_color_outer: "#05060f",
      canvas_height: height,
      canvas_width: width,
      canvas: canvasRef.current,
    };
    const canvasAnimation = new ParticlesAnimation(options);
  }, [width, height]);

  return <canvas ref={canvasRef} />;
}
