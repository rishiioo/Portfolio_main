"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import RotatingBadge from "./RotatingBadge";
import { FaReact } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiZod,
  SiChakraui,
  SiTypescript,
  SiSupabase,
  SiNodedotjs,
  SiMongodb,
  SiGooglegemini,
  SiVercel,
  SiRender,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";
import { AiOutlineBarChart } from "react-icons/ai";
import { TbBrandRadixUi } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});
// ─── DATA ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Postmark",
    link: "https://github.com/rishiioo/Postmark",
    desc: " Postmark is a full-stack AI email management application for personal assistants. It uses Next.js, Express.js, MongoDB Atlas, and the Gemini LLM. The frontend is deployed on Vercel and the backend on Render, with a CORS issue between the two services resolved through environment-based configuration. Developed as an interview assessment project and recorded a demo video walking through the working application.",
    gradient: "from-red-500 to-red-700",
    images: [
      "/projects/codestruct2.png",
      "/projects/Codestruct1.jpg",
      "/projects/codestruct3.png",
    ],
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Express.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "MongoDB Atlas", icon: <SiMongodb className="text-green-400" /> },
      { name: "Gemini LLM", icon: <SiGooglegemini className="text-blue-400" /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender className="text-purple-400" /> },
    ],
  },
  {
    id: 2,
    title: "AttendX",
    link: "https://github.com/rishiioo/ATTENDX",
    desc: " AttendX is a web-based attendance management system built with HTML, CSS, JavaScript, and Firebase. It features role-based student, teacher, and admin-facing interfaces to support distinct user workflows. Presented as the developed project in a coding competition and received a participation certificate.",
    gradient: "from-blue-500 to-blue-700",
    images: [
      "/projects/Snapurl1.png",
      "/projects/Snapurl2.png",
      "/projects/Snapurl3.png",
    ],
    tech: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    id: 3,
    title: "Muscura",
    link: "https://github.com/rishiioo/Muscura",
    desc: " Muscura is a practical full-stack gym and fitness management platform. Its scope includes gym subscription tracking, workout planning, and fitness-related features.",
    gradient: "from-yellow-500 to-orange-500",
    images: [
      "/projects/cvforge1.png",
      "/projects/cvforge2.png",
      "/projects/cvforge3.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },
];

// ─── LEFT PANEL ───────────────────────────────────────
function LeftPanel({ activeIndex }: { activeIndex: number }) {
  const project = projects[activeIndex];

  return (
    <div className="sticky top-20 sm:top-24 h-[70vh] sm:h-[80vh] flex flex-col justify-start pt-8 sm:pt-10 px-4 sm:px-6 lg:px-10">
      <AnimatePresence mode="wait">
       <motion.div
  key={project.id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.4 }}
>
  {/* TITLE */}
  <h3 className={`${playfair.className} text-2xl sm:text-3xl italic font-semibold text-white tracking-tight mb-3 sm:mb-4`}>
  {project.title}
</h3>
  {/* DESCRIPTION */}
  <p className="text-gray-400 text-[12px] sm:text-[13px] leading-6 sm:leading-7 max-w-xl mb-4 sm:mb-6">
    🚀 {project.desc}
  </p>


  {/* TECH STACK */}
  <div className="flex flex-wrap gap-2 sm:gap-3">
    {project.tech?.map((t: any, i: number) => (
      <div
        key={i}
        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full
bg-[#111] border border-white/10
text-[10px] sm:text-xs text-gray-300
hover:bg-white/10 hover:border-white/20
transition-all duration-300"
      >
        <span>{t.icon}</span>
        {t.name}
      </div>
    ))}
  </div>
</motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────
function ProjectCard({ project, onVisible }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(project.id);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [project.id, onVisible]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="h-[70vh] sm:h-[75vh] lg:h-[80vh] flex items-center justify-center"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full px-4 sm:px-0">

        {/* SMALL CARDS */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-[200px] sm:flex-shrink-0">
  {project.images.slice(0, 2).map((img: string, i: number) => (
    <img
      key={i}
      src={img}
      alt="project"
      className="w-full h-[120px] sm:h-[140px] object-cover rounded-xl sm:rounded-2xl"
    />
  ))}
</div>

        {/* BIG CARD */}
        <div className="relative w-full sm:w-[320px] sm:flex-shrink-0 h-[180px] sm:h-[200px]">
  <img
    src={project.images[2]}
    alt="project main"
    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
  />

  <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10">
    <RotatingBadge link={project.link} />
  </div>
</div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────
export default function Showcase() {
  const [activeId, setActiveId] = useState(1);
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  return (
    <section className="relative bg-black h-full py-12 sm:py-16">

      {/* HEADING */}
      <div className="text-center mb-8 sm:mb-12 pt-8 sm:pt-12 px-4 sm:px-6">
        <p className="text-[10px] sm:text-xs tracking-widest text-gray-300 mb-3 sm:mb-4">
          CRAFTING MODERN EXPERIENCES
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="text-white">VENTURE </span>
          <span className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text italic">
            SHOWCASE
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-200px)]">

        {/* LEFT */}
        <div className="hidden lg:block w-[45%]">
          <LeftPanel activeIndex={activeIndex} />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[55%] px-4 sm:px-6 py-8 sm:py-16 flex flex-col gap-12 sm:gap-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onVisible={setActiveId}
            />
          ))}
        </div>

      </div>
    </section>
  );
}