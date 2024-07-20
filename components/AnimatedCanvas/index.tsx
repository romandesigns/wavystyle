"use client";
import { ParticlesAnimation } from "@/classes/ParticlesAnimation";
import React, { useState, useRef } from "react";

export function Canvas() {
  React.useEffect(() => {
    const canvasAnimation = new ParticlesAnimation();
    canvasAnimation.init();
  }, []);

  return (
    <>
      <canvas />
    </>
  );
}
