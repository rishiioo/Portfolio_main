"use client";

import Image from "next/image";
import CubeHero from "./CubeHero";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex flex-col justify-between py-12 sm:py-20">

      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">

        {/* LEFT (TEXT) */}
        <div className="flex flex-col gap-3 max-w-4xl text-center md:text-left">

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start">
            <Image
              src="/profile.png.jpeg"
              alt="profile"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />

            <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-semibold text-white tracking-tight">
              Let's create
            </h1>
          </div>

          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-semibold tracking-tight bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 text-transparent bg-clip-text">
            something real.
          </h1>
        </div>

        {/* RIGHT (CUBE) */}
        <div className="flex items-center justify-center w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px]">
          <CubeHero />
        </div>

      </div>

      <div className="mt-12 sm:mt-16 bg-[#0a0a0a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row justify-between gap-6 sm:gap-8 max-w-6xl mx-auto w-full">

  {/* LEFT */}
  <div className="max-w-sm w-full">
    <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] text-white leading-none italic font-serif">
    RISHI
  </h2>
    <p className="text-white/60 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] font-medium tracking-tight mt-4">
      Building digital experiences that matter, one line of code at a time.
      Crafting interfaces that feel alive, solving problems that make a difference,
      and turning ideas into reality. Every pixel has a purpose.
    </p>
  </div>

  {/* RIGHT GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-[13px] sm:text-sm">

    {/* GENERAL */}


<div>
  <h3 className="text-white/50 mb-3 sm:mb-4">General</h3>

  <ul className="space-y-1.5 sm:space-y-2">
    <li>
      <Link
        href="/"
        className="block text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight hover:text-white/70 transition"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/blogs"
        className="block text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight hover:text-white/70 transition"
      >
        Blogs
      </Link>
    </li>

    <li>
      <Link
        href="/uses"
        className="block text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight hover:text-white/70 transition"
      >
        Uses
      </Link>
    </li>
  </ul>
</div>

    {/* ABOUT */}


<div>
  <h3 className="text-white/50 mb-3 sm:mb-4">About</h3>

  <ul className="space-y-1.5 sm:space-y-2">
    <li>
      <Link href="/about" className="block text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight hover:text-white/70 transition">
        About Me
      </Link>
    </li>

    <li>
      <Link href="/projects" className="block text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight hover:text-white/70 transition">
        Projects
      </Link>
    </li>

    <li>
     <Link href="/book-call" className="block text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight hover:text-white/70 transition">
  Contact
</Link>
    </li>
  </ul>
</div>

    {/* LEGAL (no startup as you requested) */}
    <div>
      <h3 className="text-white/50 mb-3 sm:mb-4">Legal</h3>
      <ul className="space-y-1.5 sm:space-y-2">



<li>
  <Link
    href="/terms"
    className="block text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight hover:text-white/70 transition"
  >
    Terms & Conditions
  </Link>
</li>
</ul>
    </div>


  </div>
</div>
<div className="mt-8 sm:mt-10 pb-2 border-t border-white/10 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

  {/* LEFT TEXT */}
  <p className="text-white/40 text-[10px] sm:text-xs tracking-tight text-center sm:text-left">
    © {new Date().getFullYear()} RISHI SINGH. ALL RIGHTS RESERVED.
  </p>

  {/* RIGHT ICONS */}
  <div className="flex items-center gap-4 sm:gap-5 text-white/60">

    <a
    href="https://github.com/rishiioo"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
    aria-label="GitHub"
  >
      <i className="ri-github-line text-base sm:text-lg"></i>
    </a>

    <a
    href="https://linkedin.com/in/rishi-singh-b286q2359"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
    aria-label="LinkedIn"
  >
      <i className="ri-linkedin-line text-base sm:text-lg"></i>
    </a>

    <a
    href="https://x.com/rishiioo"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
    aria-label="Twitter"
  >
      <i className="ri-twitter-x-line text-base sm:text-lg"></i>
    </a>

    <a
    href="https://www.instagram.com/dunno.rishiii"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
    aria-label="Instagram"
  >
      <i className="ri-instagram-line text-base sm:text-lg"></i>
    </a>

  </div>
</div>
    </section>
  );
}