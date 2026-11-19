"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["/hero.jpg.jpeg", "/hero2.jpg.jpeg", "/hero3.jpg.jpeg"];

export default function ImageStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[300/420] w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] mx-auto flex items-center justify-center">

      {images.map((img, i) => {
        const position = (i - index + images.length) % images.length;

        // Responsive sizes
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
        const baseWidth = isMobile ? 240 : 260;
        const baseHeight = isMobile ? 340 : 380;
        const offsetWidth = isMobile ? 200 : 220;
        const offsetHeight = isMobile ? 280 : 320;
        const offsetX = isMobile ? 30 : 40;
        const offsetY = isMobile ? 15 : 20;
        const rotateDeg = isMobile ? 6 : 8;

        return (
          <motion.div
            key={i}
            className="absolute rounded-3xl overflow-hidden border border-white/10"
            animate={{
              scale: position === 0 ? 1 : 0.88,
              x: position === 0 ? 0 : position === 1 ? offsetX : -offsetX,
              y: position === 0 ? 0 : offsetY,
              rotate: position === 0 ? 0 : position === 1 ? rotateDeg : -rotateDeg,
              zIndex: position === 0 ? 3 : position === 1 ? 2 : 1,
              opacity: position === 2 ? 0.5 : 1,
            }}
            transition={{ duration: 0.6 }}
            style={{
              width: position === 0 ? `${baseWidth}px` : `${offsetWidth}px`,
              height: position === 0 ? `${baseHeight}px` : `${offsetHeight}px`,
            }}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`About image ${i + 1}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}