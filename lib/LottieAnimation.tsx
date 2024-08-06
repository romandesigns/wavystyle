"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({
  animationPath,
  className,
}: {
  animationPath: string;
  className: string;
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current === null) return;
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: animationPath,
    });

    return () => animation.destroy();
  }, [animationPath]);

  return (
    <div
      ref={containerRef}
      style={{ width: "300px", height: "300px" }}
      className={className}
    />
  );
};

export default LottieAnimation;
