"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const images = ["/hero.jpg.jpeg", "/hero2.jpg.jpeg", "/hero3.jpg.jpeg"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  // 🔥 rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 delayed navigation (for transition)
  const handleNavigation = () => {
    setTimeout(() => {
      router.push("/about");
    }, 600);
  };

  return (
    <section className="bg-black text-white py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 overflow-hidden">

      {/* LEFT */}
      <div className="max-w-2xl w-full text-center md:text-left">

        <p className="text-xs sm:text-sm tracking-[0.3em] text-white/60 mb-4 sm:mb-6">
          A QUICK GLANCE
        </p>

        <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-semibold leading-[1.1]">
          <span className="block">
            Building the bridge between
          </span>

          <span className="block">
            ideas and{" "}
            <span className="font-serif italic bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text">
              experiences
            </span>
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-white/70 leading-relaxed max-w-lg sm:max-w-xl mx-auto md:mx-0">
          I'm Rishi Singh, an engineering-driven developer who turns complex
          technical challenges into high-speed web products. I manage the entire
          stack with a focus on clean, reusable code and seamless performance.
          I excel in Next.js and full-stack architecture, always delivering
          modern solutions that actually solve problems for every user.
          <br /><br />
          My code is built to last, helping your startup reach the next level!
        </p>

        <p className="mt-4 text-white/70 max-w-lg mx-auto md:mx-0">
          Building scalable solutions and crafting modern digital experiences.
        </p>

        {/* SOCIAL */}
        <div className="flex items-center gap-4 sm:gap-5 mt-6 sm:mt-8 text-white/60 justify-center md:justify-start">

          <a
            href="https://www.linkedin.com/in/rishi-singh-b286q2359"
            target="_blank"
            className="hover:text-white transition text-lg sm:text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/rishiioo"
            target="_blank"
            className="hover:text-white transition text-lg sm:text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/rishiioo"
            target="_blank"
            className="hover:text-white transition text-lg sm:text-xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleNavigation}
          className="mt-6 sm:mt-8 inline-flex items-center gap-3 text-sm sm:text-base text-white group mx-auto md:mx-0"
        >
          Dive in deeper

          <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-white/20 rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:border-white">
            →
          </span>
        </button>

      </div>

      {/* RIGHT (IMAGE STACK) */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[340/420] flex items-center justify-center overflow-hidden md:flex-none">

        {images.map((img, i) => {
          const position = (i - index + images.length) % images.length;

          return (
            <motion.div
              key={i}
              className="absolute w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden"
              animate={{
                x: position === 0 ? 0 : position === 1 ? 60 : -60,
                scale: position === 0 ? 1 : 0.88,
                rotate: position === 0 ? 0 : position === 1 ? 6 : -6,
                zIndex: position === 0 ? 3 : position === 1 ? 2 : 1,
                opacity: position === 2 ? 0.5 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Portfolio image ${i + 1}`}
              />
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}