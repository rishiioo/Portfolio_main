"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Monitor, Book, FileText } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClick = () => setShowMore(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMore(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMore(false);
    }, 180);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // ❌ Blogs removed from here
  ];

  const handleNavigation = (path: string) => {
  if (pathname === path) return;
  router.push(path);
};

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg">

        {/* NAV ITEMS - Hidden on mobile, show on md+ */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 text-sm relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="relative px-3 py-1.5 rounded-full overflow-hidden group"
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-full border border-white/60" />
                )}

                <span
                  className={`relative z-10 transition ${
                    isActive
                      ? "text-black"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* MORE BUTTON */}
          <button
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            className="px-3 py-1.5 rounded-full text-xs bg-white/10 hover:bg-white/20 transition text-gray-300"
          >
            More ▾
          </button>
        </div>

        {/* CTA */}
        <Link
          href="/book-call"
          className="px-3 py-1.5 sm:px-4 bg-white text-black rounded-full text-xs sm:text-sm hover:scale-105 transition hidden sm:block"
        >
          Book a Call
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg"
        onClick={() => setShowMore(!showMore)}
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {showMore ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* DROPDOWN */}
      {showMore && (
        <div
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-14 right-0 w-[280px] sm:w-[300px] bg-[#0b0b0b] border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md"
        >
          {isMobile && (
            // Mobile: show all nav items
            <div className="flex flex-col gap-2 mb-3 pb-3 border-b border-white/10">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavigation(item.path);
                      setShowMore(false);
                    }}
                    className={`text-left px-3 py-2 rounded-lg transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">

            <Link href="/uses" onClick={() => setShowMore(false)}>
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Monitor size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">Uses</p>
                  <p className="text-[10px] text-gray-400">
                    DevTools, AI & Socials
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/guestbook" onClick={() => setShowMore(false)}>
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Book size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">Guestbook</p>
                  <p className="text-[10px] text-gray-400">
                    Sign my wall
                  </p>
                </div>
              </div>
            </Link>

            {/* ✅ BLOGS ADDED HERE */}
            <Link href="/blogs" onClick={() => setShowMore(false)}>
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <FileText size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">Blogs</p>
                  <p className="text-[10px] text-gray-400">
                    Read my articles
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}