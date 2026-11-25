
"use client";

import { useEffect, useState } from "react";
import MobileHome from "./MobileHome";

// ============================================================
// BIOSHIELD — SOFT GLASS WEBSITE DESIGN
// ============================================================
// Responsive layout:
// - Phones: stacked cards and content
// - Tablets: flexible layout
// - Desktops: video and contact form side by side
//
// Existing images and videos remain in the public folder.
// ============================================================

// ============================================================
// LATEST UPDATES DATA
// ============================================================

const updates = [
  {
    date: "May 28, 2025",
    text: "Initial coating validation program launched.",
  },
  {
    date: "May 24, 2025",
    text: "Discussions underway with industrial pilot partners.",
  },
  {
    date: "May 20, 2025",
    text: "Hydrogel formulation testing completed.",
  },
  {
    date: "May 16, 2025",
    text: "BioShield joins Iowa innovation ecosystem.",
  },
  {
    date: "May 12, 2025",
    text: "Pilot application process now open.",
  },
  {
    date: "May 8, 2025",
    text: "Cross-linking chemistry platform expanded.",
  },
  {
    date: "May 4, 2025",
    text: "New corrosion performance data collected.",
  },
  {
    date: "Apr 30, 2025",
    text: "Strategic partnership discussions ongoing.",
  },
  {
    date: "Apr 26, 2025",
    text: "Investor outreach program initiated.",
  },
  {
    date: "Apr 22, 2025",
    text: "BioShield accepted into ISURP at Iowa State University.",
  },
];

// ============================================================
// FLOATING PARTICLE LOGO
// ============================================================

function ParticleLogo() {
  return (
    <div className="relative z-10 flex justify-center">
      <img
        src="/Bioshield logo particles.png"
        alt="BioShield molecular particles"
        className="float-logo h-auto w-32 opacity-90 sm:w-40 lg:w-[200px]"
      />
    </div>
  );
}

// ============================================================
// NAVIGATION
// ============================================================




  const scrollToSection = (
  event: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) => {
  event.preventDefault();

  const target = document.getElementById(sectionId);
  if (!target) return;

  const navbarOffset =
  sectionId === "solution"
    ? 250
    : sectionId === "market"
    ? 240
    : 225;

const targetPosition =
  sectionId === "home"
    ? 0
    : target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({
      top: targetPosition,
      behavior: "instant",
    });
    return;
  }

  // Automatically increase speed for longer scroll distances.
const scrollDistance = Math.abs(distance);

const pixelsPerSecond = Math.min(
  1500,
  900 + scrollDistance * 0.12
);

const duration = Math.max(
  1,
  (scrollDistance / pixelsPerSecond) * 1000
);
  let startTime: number | null = null;

  const animateScroll = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo({
      top: startPosition + distance * progress,
      behavior: "instant",
    });

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

   requestAnimationFrame(animateScroll);
};

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  { label: "Home", href: "#home" },
  { label: "Solution", href: "#products" },
  { label: "Technology", href: "#solution" },
  { label: "Market", href: "#market" },
  { label: "For Investors", href: "#investors" },
];

  return (
    <nav className="fixed left-1/2 top-3 z-[9999] w-[calc(100%-24px)] max-w-[1500px] -translate-x-1/2 rounded-[22px] border border-white/80 bg-white/85 shadow-[0_12px_35px_rgba(28,66,77,0.13)] backdrop-blur-xl sm:top-5 sm:w-[calc(100%-40px)]">
      <div className="flex min-h-[72px] items-center justify-between gap-3 px-4 sm:px-7 lg:min-h-[86px] lg:px-10">
        <a href="/" className="relative z-10 shrink-0">
  <img
    src="/bioshield-logo-transparent.png"
    alt="BioShield"
    className="h-12 w-auto object-contain sm:h-14 lg:h-16"
  />
</a>

        <div className="hidden items-center gap-5 pt-3 lg:flex xl:gap-10">
          {links.map((link) => (
            <div
              key={link.label}
              className="group relative flex flex-col items-center"
            >
              <img
                src="/Bioshield logo particles.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-8 w-14 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              />

              <a
  href={link.href}
 onClick={(event) => {
  if (link.label === "Home") {
    scrollToSection(event, "home");
  }

  if (link.label === "Solution") {
    scrollToSection(event, "products");
  }

  if (link.label === "Technology") {
    scrollToSection(event, "solution");
  }

 if (link.label === "Market") {
  scrollToSection(event, "market");
}

if (link.label === "For Investors") {
  scrollToSection(event, "investors");
}
}}
  className="whitespace-nowrap text-sm font-medium text-[#16495b] transition hover:text-[#e87f23] xl:text-base"
>
  {link.label}
</a>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          
<a
  href="https://linktr.ee/BioShieldCoats"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-full bg-[#e87f23] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_6px_16px_rgba(232,127,35,0.22)] transition hover:bg-[#d9731d] sm:inline-flex lg:px-8"
>
  Linktree Portal
</a>


          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce8eb] bg-white text-[#16495b] lg:hidden"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-2xl leading-none">☰</span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#e5edf0] px-5 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-[#16495b] transition hover:bg-[#edf7f8]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#e87f23] px-5 py-3 text-center text-sm font-bold text-white sm:hidden"
            >
              Partner Portal
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================
// HERO VIDEO
// ============================================================

function HeroVideo() {
  return (
    <div className="relative flex h-full min-h-[400px] w-full min-w-0 items-center overflow-hidden rounded-[25px] bg-[#173e51] shadow-[0_16px_38px_rgba(27,70,82,0.15)] sm:min-h-[460px] lg:min-h-[515px] xl:min-h-[550px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/New Bioshield Maritime Video .mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#123d50]/75 via-[#123d50]/40 to-transparent" />

      <div className="relative z-10 w-full px-6 py-12 sm:px-10 lg:px-10 xl:px-12">
        <h1 className="max-w-[760px] text-3xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl xl:text-[58px]">
          Living protection against saltwater corrosion.
        </h1>

        <p className="mt-6 max-w-[480px] text-sm leading-6 text-white sm:text-base sm:leading-7">
          BioShield is developing a hydrogel coating that uses living
          microbes to protect exposed metal on boats and marine
          equipment.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          
<a
  href="#products"
  onClick={(event) => scrollToSection(event, "products")}
  className="inline-flex min-h-12 items-center justify-center rounded-full border border-orange-300 bg-[#e87f23] px-6 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:bg-[#d9731d] sm:px-7"
>
  Explore Pilot Opportunities
</a>


          
<a
  href="#solution"
  onClick={(event) => scrollToSection(event, "solution")}
  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 bg-[#2581a4]/85 px-6 py-3 text-center text-sm font-bold text-white shadow-lg backdrop-blur-md transition hover:bg-[#176684] sm:px-7"
>
  View Technology
</a>

        </div>
      </div>
    </div>
  );
}

// ============================================================
// HORIZONTAL LATEST UPDATES
// ============================================================

function LatestUpdatesBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((previous) => (previous + 1) % updates.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const nextUpdate = () => {
    setIndex((previous) => (previous + 1) % updates.length);
  };

  return (
    <div className="flex min-h-[72px] w-full min-w-0 items-center gap-3 rounded-[20px] border border-[#dce9ec] bg-white/80 px-4 py-4 shadow-[0_10px_24px_rgba(27,70,82,0.10)] backdrop-blur-xl sm:gap-5 sm:px-7">
      <p className="shrink-0 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#de801c] sm:text-xs sm:tracking-[0.24em]">
        Latest Updates
      </p>

      <div className="h-8 w-px shrink-0 bg-[#d6e4e7]" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="hidden h-6 w-6 shrink-0 text-[#1f7da6] sm:block"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18" />
      </svg>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-bold text-[#16495b] sm:text-sm">
          {updates[index].text}
        </p>

        <p className="mt-1 text-[11px] text-[#6b858d]">
          {updates[index].date}
        </p>
      </div>

      <button
        type="button"
        onClick={nextUpdate}
        aria-label="View next update"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#16495b] transition hover:bg-[#e8f4f6]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

// ============================================================
// PILOT TESTING FORM
// ============================================================




function PilotTestingForm() {
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSco2cMzAYhdNZZM3Pijrqinc9-MgYtD_PWhPm8PVpYcO6VSPQ/viewform";

  const pilotCards = [
    {
      title: "Boat Owners",
      description: "Boat owners & marine equipment operators",
      icon: "ship",
    },
    {
      title: "Marinas & Boatyards",
      description: "Marine services & offshore operators",
      icon: "marina",
    },
    {
      title: "Manufacturing & Industry",
      description: "Manufacturing, testing & industrial applications",
      icon: "factory",
    },
  ];

  return (
    <aside
      id="pilot-testing"
      className="relative flex w-full min-w-0 flex-col overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_18px_38px_rgba(27,70,82,0.14)]"
    >
      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-1 flex-col px-5 pb-4 pt-7 sm:px-7 lg:px-7 xl:px-8">

        {/* SECTION LABEL */}
        <div className="flex items-center gap-2">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 12C5 8 8 8 11 12S17 16 22 11"
              stroke="#2C8491"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M2 17C5 13 8 13 11 17S17 21 22 16"
              stroke="#2C8491"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#de801c]">
            Contact BioShield
          </p>
        </div>

        {/* HEADING */}
        <h2 className="mt-5 text-[27px] font-extrabold leading-[1.15] tracking-tight text-[#17435B] sm:text-[30px] xl:text-[33px]">
          Help Shape the Future of Marine Protection.
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-sm leading-6 text-[#53717D]">
          We&apos;re looking for partners to explore BioShield&apos;s
          next-generation coating technology in real operating
          conditions.
        </p>

        {/* THREE OCEAN GLASS CARDS */}
        <div className="mt-6 flex flex-col gap-3">
          {pilotCards.map((card) => (
            <div
              key={card.title}
              className="flex min-w-0 items-center gap-3 rounded-2xl border border-[#D9EBEC] bg-[#F0F8F8] px-3 py-3 transition duration-200 hover:border-[#B8DCDD] hover:bg-[#E8F4F4] hover:shadow-[0_5px_14px_rgba(40,127,138,0.08)]"
            >
              {/* ICON BACKGROUND */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9EEEE]">

                {/* BOAT OWNERS — SELECTED SHIP ICON */}
                {card.icon === "ship" && (
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#287F8A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 10.189V14" />
                    <path d="M12 2v3" />
                    <path d="M19 13.8V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.8" />
                    <path d="M2 21c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1" />
                    <path d="M12 14 3 17l2 4c1.3 0 2-.5 2.5-1 .6.5 1.2 1 2.5 1s1.9-.5 2.5-1c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1c.5.5 1.2 1 2.5 1l2-4-9-3Z" />
                  </svg>
                )}

                {/* MARINAS & BOATYARDS — ANCHOR ICON */}
                {card.icon === "marina" && (
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#287F8A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v14" />
                    <path d="M5 11H2c0 6 4 10 10 10s10-4 10-10h-3" />
                    <path d="M5 11l3 3" />
                    <path d="M19 11l-3 3" />
                  </svg>
                )}

                {/* MANUFACTURING & INDUSTRY — FACTORY ICON */}
                {card.icon === "factory" && (
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#287F8A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 21V9l6 4V9l6 4V5h6v16H3Z" />
                    <path d="M7 17h1" />
                    <path d="M12 17h1" />
                    <path d="M17 17h1" />
                  </svg>
                )}
              </div>

              {/* CARD TEXT */}
              <div className="min-w-0">
                <h3 className="text-[13px] font-bold leading-5 text-[#20465D]">
                  {card.title}
                </h3>

                <p className="mt-0.5 text-[11px] leading-4 text-[#64818A]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GOOGLE FORMS BUTTON */}
        <div className="mt-auto pt-7">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#e87f23] px-4 py-3 text-sm font-bold text-white shadow-[0_7px_18px_rgba(232,127,35,0.22)] transition hover:bg-[#d9731d]"
          >
            Join the Pilot Program

            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M8 7H17V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <p className="mt-3 text-center text-[11px] text-[#7A969D]">
            Opens a short application in Google Forms
          </p>
        </div>
      </div>

      {/* DECORATIVE OCEAN WAVES */}
      <div className="pointer-events-none relative h-[74px] w-full shrink-0 overflow-hidden">
        <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0 30 C85 -5 155 70 250 32 S410 5 500 35 L500 100 L0 100 Z"
            fill="#D8EEEE"
          />

          <path
            d="M0 55 C110 18 180 90 300 52 S430 35 500 60 L500 100 L0 100 Z"
            fill="#B9DCDE"
          />

          <path
            d="M0 78 C120 45 215 110 340 72 S455 58 500 75 L500 100 L0 100 Z"
            fill="#7BBBC0"
            opacity="0.65"
          />
        </svg>
      </div>
    </aside>
  );
}

// ============================================================
// SOUND FAMILIAR — THREE PROBLEM ICONS
// ============================================================



function ChallengesSection() {
  const [waveProgress, setWaveProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateWaves = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = document.getElementById("challenges");

        if (!section) return;

        // Begin moving immediately when the page scrolls.
const scrollDistance = 1100;

const progress = Math.min(
  1,
  Math.max(0, window.scrollY / scrollDistance)
);

        setWaveProgress(progress);
      });
    };

    updateWaves();

    window.addEventListener("scroll", updateWaves, { passive: true });
    window.addEventListener("resize", updateWaves);

    return () => {
      window.removeEventListener("scroll", updateWaves);
      window.removeEventListener("resize", updateWaves);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Move the wave completely off the LEFT side as you scroll.
// Move a curved wave-shaped boundary from right to left.
const waveEdge = 108 - waveProgress * 120;

// Keep the background visible until the wave rolls away.
const waveOpacity = Math.max(
  0,
  Math.min(1, (1 - waveProgress) / 0.12)
);

  const challenges = [
    {
      image: "/corrosion-icon.png",
      alt: "Corroded bolt and bracket",
      title: "Saltwater corrosion coming back?",
      description: "Exposed metal needs repeated attention.",
    },
    {
      image: "/maintenance-icon.png",
      alt: "Clock and wrench",
      title: "Too much time on maintenance?",
      description: "Cleaning, inspecting, and recoating.",
    },
    {
      image: "/costs-icon.png",
      alt: "Rising maintenance costs",
      title: "Maintenance costs adding up?",
      description: "Supplies, labor, and replacement parts.",
    },
  ];

  return (
    <section
      id="challenges"
      className="relative z-10 mt-8 w-full overflow-hidden pb-16 pt-12 sm:mt-10 sm:pb-20 sm:pt-16"
    >
      {/* BLUE WAVES — CURVED EDGE FLOWS OFF SCREEN */}
<div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-screen -translate-x-1/2 overflow-hidden">
  <svg
    viewBox="0 0 1440 480"
    preserveAspectRatio="none"
    className="h-full w-full"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="challenges-wave-clip" clipPathUnits="objectBoundingBox">
        <path
          d={`M 0 0
              L ${Math.max(0, waveEdge / 100)} 0
              C ${Math.max(0, waveEdge / 100) - 0.08} 0.25,
                ${Math.max(0, waveEdge / 100) + 0.06} 0.65,
                ${Math.max(0, waveEdge / 100) - 0.04} 1
              L 0 1 Z`}
        />
      </clipPath>
    </defs>

    <g
      clipPath="url(#challenges-wave-clip)"
      opacity={waveOpacity}
    >
      <path
        d="M0 110 C200 0 360 75 560 125 C780 180 900 175 1070 115 C1240 55 1330 145 1440 75 L1440 480 L0 480 Z"
        fill="#eaf6f6"
        fillOpacity="0.82"
      />

      <path
        d="M0 310 C220 390 400 455 660 390 C890 330 1000 455 1230 365 C1330 325 1380 315 1440 300 L1440 480 L0 480 Z"
        fill="#dceeed"
        fillOpacity="0.72"
      />

      <path
        d="M0 385 C230 475 370 470 610 445 C830 420 1050 490 1250 425 C1340 395 1400 390 1440 390 L1440 480 L0 480 Z"
        fill="#e9e5df"
        fillOpacity="0.75"
      />
    </g>
  </svg>
</div>

      {/* SOUND FAMILIAR CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12">
        <h2 className="relative -top-[50px] text-center text-4xl font-extrabold tracking-tight text-[#194c5b] sm:text-5xl">
          Sound familiar?
        </h2>

        <div className="relative -top-[50px] mt-8 grid grid-cols-1 gap-10 sm:mt-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="flex min-w-0 flex-col items-center text-center"
            >
              <img
                src={challenge.image}
                alt={challenge.alt}
                className="h-40 w-40 rounded-full object-contain drop-shadow-[0_14px_14px_rgba(20,70,85,0.20)] transition duration-300 hover:-translate-y-2 hover:drop-shadow-[0_20px_18px_rgba(20,70,85,0.28)] sm:h-44 sm:w-44 lg:h-48 lg:w-48"
              />

              <h3 className="mt-3 max-w-sm text-lg font-extrabold leading-snug text-[#16495b] lg:text-xl">
                {challenge.title}
              </h3>

              <p className="mt-1 max-w-sm text-sm leading-6 text-[#62696c] sm:text-base">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ============================================================
// PRODUCT APPLICATION
// ============================================================

function ProductApplication() {
  const [waveVisible, setWaveVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const product = document.getElementById("products");
    if (!product) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotion = () => {
      setReducedMotion(motionQuery.matches);
    };

    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      // Reveal the aqua wave when entering the section.
      setWaveVisible(true);
    } else {
      // Hide it again when leaving the section,
      // so it can replay next time.
      setWaveVisible(false);
    }
  },
  {
    threshold: 0.3,
  }
);

    observer.observe(product);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <section
  id="products"
  className="relative z-10 mt-24 w-full scroll-mt-[250px] pb-12"
>
      {/* FLOATING MOLECULAR LOGO */}
      <section className="relative z-10 mx-auto mb-24 mt-15 flex justify-center">
  <div
    style={{
      transform: "translate(0px, -100px)",
    }}
  >
    <ParticleLogo />
  </div>
</section>

      {/* PRODUCT APPLICATION HEADING */}
      <div className="relative z-30 mx-auto mb-6 mt-8 w-full max-w-6xl px-6 text-center">
  <p
    className="text-sm font-semibold uppercase tracking-[0.3em] text-[#de801c]"
    style={{
      transform: "translate(0px, -200px)",
    }}
  >
    Product Application
  </p>
</div>

{/* THREE PRODUCT APPLICATION PHOTOS */}
<div
  className="relative z-20 mx-auto w-full max-w-[1400px] px-4 sm:px-6"
  style={{
    transform: "translate(0px, -245px)",
    marginTop: "-10px",
    marginBottom: "-380px",
  }}
>
  <img
    src="/Aqua-framed three-photo gallery cutout.png"
    alt="BioShield applications: outboard hardware, hull coating, and commercial deck equipment"
    className="block h-auto w-full drop-shadow-[0_12px_18px_rgba(31,80,100,0.10)]"
  />
</div>

      {/* ANIMATED OFFSET SEA GLASS PANEL */}
      <div
  className="relative mx-auto w-full max-w-[1700px] px-3 sm:px-6"
  style={{
    transform: "translate(0px, 80px)",
    marginBottom: "200px",
  }}
>
        <div className="relative isolate min-h-[520px] w-full sm:min-h-[620px] lg:min-h-[680px]">

          {/* LAYER 1 — ANIMATED GLASS BACKGROUND */}
          <svg
            viewBox="0 0 1400 380"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          >
            <defs>
              <linearGradient
                id="product-aqua-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop stopColor="#e4f2f0" />
                <stop offset=".6" stopColor="#c3e3e2" />
                <stop offset="1" stopColor="#a9d4d7" />
              </linearGradient>

              <linearGradient
                id="product-ivory-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#f6f5f1" />
              </linearGradient>

              <filter
                id="product-glass-shadow"
                x="-20%"
                y="-30%"
                width="150%"
                height="180%"
              >
                <feDropShadow
                  dx="0"
                  dy="9"
                  stdDeviation="9"
                  floodColor="#1f5064"
                  floodOpacity=".14"
                />
              </filter>

              <clipPath id="product-rear-clip">
                <path d="M95 130 C420 145 660 30 1060 24 C1190 20 1290 15 1338 28 Q1380 40 1380 88 L1380 302 Q1380 350 1325 350 H100 Q30 350 30 280 V200 Q30 145 95 130Z" />
              </clipPath>
            </defs>

            {/* AQUA WAVE — REVEALS FROM LEFT TO RIGHT */}
            <g
              style={{
                clipPath:
                  reducedMotion || waveVisible
                    ? "inset(-20% -5% -20% 0)"
                    : "inset(-20% 100% -20% 0)",
                transition: reducedMotion
                  ? "none"
                  : "clip-path 1.9s cubic-bezier(.22,.7,.25,1)",
              }}
            >
              <g filter="url(#product-glass-shadow)">
                <path
                  fill="url(#product-aqua-gradient)"
                  stroke="#c7e2e2"
                  d="M95 130 C420 145 660 30 1060 24 C1190 20 1290 15 1338 28 Q1380 40 1380 88 L1380 302 Q1380 350 1325 350 H100 Q30 350 30 280 V200 Q30 145 95 130Z"
                >
                  {!reducedMotion && (
                    <animate
                      attributeName="d"
                      dur="9s"
                      repeatCount="indefinite"
                      values="M95 130 C420 145 660 30 1060 24 C1190 20 1290 15 1338 28 Q1380 40 1380 88 L1380 302 Q1380 350 1325 350 H100 Q30 350 30 280 V200 Q30 145 95 130Z;M95 130 C420 127 660 45 1060 32 C1190 28 1290 11 1338 28 Q1380 40 1380 88 L1380 302 Q1380 350 1325 350 H100 Q30 350 30 280 V200 Q30 145 95 130Z;M95 130 C420 145 660 30 1060 24 C1190 20 1290 15 1338 28 Q1380 40 1380 88 L1380 302 Q1380 350 1325 350 H100 Q30 350 30 280 V200 Q30 145 95 130Z"
                    />
                  )}
                </path>
              </g>

              <g clipPath="url(#product-rear-clip)">
                <path
                  d="M480 130 Q850 18 1380 39"
                  fill="none"
                  stroke="white"
                  strokeOpacity=".8"
                  strokeWidth="1.5"
                >
                  {!reducedMotion && (
                    <animate
                      attributeName="d"
                      dur="9s"
                      repeatCount="indefinite"
                      values="M480 130 Q850 18 1380 39;M480 122 Q850 39 1380 36;M480 130 Q850 18 1380 39"
                    />
                  )}
                </path>

                <path
                  d="M530 160 Q950 25 1440 87 L1440 108 Q960 48 530 180Z"
                  fill="white"
                  opacity=".08"
                />
              </g>
            </g>

            {/* STATIONARY IVORY PANEL */}
            <path
              filter="url(#product-glass-shadow)"
              fill="url(#product-ivory-gradient)"
              stroke="#ffffff"
              strokeWidth="1.4"
              d="M110 55 H600 Q666 55 649 111 L598 287 Q581 350 516 350 H108 Q30 350 30 283 V138 Q30 55 110 55Z"
            />
          </svg>

          {/* LAYER 2 — EXISTING PRODUCT DESCRIPTION */}
          <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-7 py-12 sm:min-h-[620px] sm:px-12 lg:min-h-[680px] lg:w-[43%] lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#de801c]">
              BioShield Marine Coatings
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#16495b] sm:text-4xl">
              Built for the water.
              <br />
              Designed to protect.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#666666] sm:text-base">
              A next-generation living hydrogel coating being developed
              to help protect marine metal surfaces from corrosion.
            </p>

            <p className="mt-5 text-sm font-semibold text-[#16495b]">
              Boats • Marine Equipment • Docks • Coastal Infrastructure
            </p>

            <a
              href="#pilot-testing"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-[#e87f23] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#d9731d]"
            >
              Explore Pilot Opportunities
            </a>

            <p className="mt-4 text-xs text-[#888888]">
              Technology in development. Performance subject to validation.
            </p>
          </div>

          {/* LAYER 3 — EXISTING PRODUCT IMAGES */}
          {/* LAYER 3 — PRODUCT IMAGE — RESPONSIVE SIZE AND POSITION */}
<img
  src="/bioshield-products.png"
  alt="BioShield marine coating products"
  className="pointer-events-none relative z-20 mx-auto mt-4 block h-auto w-full max-w-[560px] object-contain drop-shadow-[0_20px_24px_rgba(0,0,0,0.12)] lg:absolute lg:bottom-[35px] lg:right-[-1%] lg:mt-0 lg:w-[min(85%,950px)] lg:max-w-none"
/>

        </div>
      </div>
    </section>
  );
}






function AnimatedTechnologyGlass() {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const glass = document.getElementById(
      "technology-animated-glass"
    );

    if (!glass) return;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frame = 0;
    let startTime: number | null = null;
    let active = false;
    let completed = false;

    const DURATION = 2000;

    const animate = (time: number) => {
      if (!active) return;

      if (startTime === null) {
        startTime = time;
      }

      const elapsed = time - startTime;
      const t = Math.min(elapsed / DURATION, 1);

      setProgress(t);

      if (t < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        active = false;
        completed = true;
      }
    };

    const observer = new IntersectionObserver(
  ([entry]) => {
    if (motionQuery.matches) {
      setProgress(1);
      return;
    }

    if (entry.isIntersecting && !completed && !active) {
      // Play the animation when entering Core Technology.
      active = true;
      startTime = null;
      frame = requestAnimationFrame(animate);
    } else if (
      !entry.isIntersecting &&
      entry.boundingClientRect.top > 0
    ) {
      // Reset when scrolling back above Core Technology.
      cancelAnimationFrame(frame);

      active = false;
      completed = false;
      startTime = null;

      setProgress(0);
    }
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px 15% 0px",
  }
);
    const updateMotion = () => {
      const reduce = motionQuery.matches;
      setReducedMotion(reduce);

      if (reduce) {
        cancelAnimationFrame(frame);
        active = false;
        completed = true;
        setProgress(1);
      }
    };

    updateMotion();
    observer.observe(glass);

    motionQuery.addEventListener("change", updateMotion);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", updateMotion);
      cancelAnimationFrame(frame);
      active = false;
    };
  }, []);

  const clamp = (value: number) =>
    Math.max(0, Math.min(1, value));

  // Gentle start, smooth travel, gradual arrival.
  const easeInOut = (value: number) => {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  };

  /*
   * WAVE MOVEMENT
   *
   * Travel ends slightly inside the white glass,
   * allowing the wave to overlap the block.
   */

  const travel = easeInOut(progress / 0.78);

  const waveHead = -0.24 + 0.85 * travel;

  // The tail follows later, creating the flowing wave.
  const waveTail =
    -0.75 +
    1.36 *
      easeInOut((progress - 0.32) / 0.58);

  const waveBoundary = `
    M ${waveTail} 0
    L ${waveHead} 0
    C ${waveHead - 0.075} 0.25,
      ${waveHead + 0.065} 0.65,
      ${waveHead - 0.035} 1
    L ${waveTail} 1
    C ${waveTail + 0.055} 0.65,
      ${waveTail - 0.035} 0.25,
      ${waveTail} 0
    Z
  `;

  /*
   * AQUA REAR GLASS
   *
   * Begins appearing after the wave overlaps the block.
   * Then gently settles into its final position.
   */

  const glassReveal = reducedMotion
    ? 1
    : easeInOut((progress - 0.48) / 0.38);

  const rearX = -28 * (1 - glassReveal);
  const rearY = 23 * (1 - glassReveal);

  // Wave disappears while the rear glass finishes settling.
  const waveOpacity = reducedMotion
    ? 0
    : clamp(progress / 0.08) *
      clamp((0.92 - progress) / 0.22);

  return (
  <div
    id="technology-animated-glass"
    className="relative isolate mx-auto w-full"
    style={{
      maxWidth: "950px",
      overflow: "visible",
    }}
  >
      {/* FULL-WIDTH OCEAN WAVE */}
      {/* FULL-WIDTH OCEAN WAVE — TALLER, WITH BOTTOM ALIGNED */}
<div
  className="pointer-events-none absolute z-0 overflow-hidden"
  style={{
    width: "100vw",

    // Make the wave taller, like your HTML example.
    height: "calc(100% + 160px)",

    left: "50%",

    // Extend upward while keeping the bottom aligned
    // with the bottom of the white glass.
    top: "-160px",

    transform: "translateX(-50%)",
    opacity: waveOpacity,
  }}
>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 480"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-full w-full"
        >
          <defs>
            <clipPath
              id="technology-full-ocean-clip"
              clipPathUnits="objectBoundingBox"
            >
              <path d={waveBoundary} />
            </clipPath>
          </defs>

          <g clipPath="url(#technology-full-ocean-clip)">
            <path
              d="M0 110 C200 0 360 75 560 125 C780 180 900 175 1070 115 C1240 55 1330 145 1440 75 L1440 480 L0 480 Z"
              fill="#eaf6f6"
              fillOpacity=".82"
            />

            <path
              d="M0 310 C220 390 400 455 660 390 C890 330 1000 455 1230 365 C1330 325 1380 315 1440 300 L1440 480 L0 480 Z"
              fill="#dceeed"
              fillOpacity=".72"
            />

            <path
              d="M0 385 C230 475 370 470 610 445 C830 420 1050 490 1250 425 C1340 395 1400 390 1440 390 L1440 480 L0 480 Z"
              fill="#e4f1f1"
              fillOpacity=".75"
            />
          </g>
        </svg>
      </div>

    
  

{/* NEW SEAGLASS + IMAGE — ORIGINAL WAVE PRESERVED */}
<div className="relative isolate z-10 w-full">

  {/* AQUA REAR PANEL — FROM NEW HTML */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute"
    style={{
      zIndex: 0,
      top: "-9%",
      right: "-2.1%",
      bottom: "0",
      left: "2.1%",
      opacity: glassReveal,
      transform: `translate(${rearX}px, ${rearY}px)`,
      filter: "drop-shadow(0 7px 10px #71878b1c)",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="block h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient
          id="technology-sheet-aqua"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#c7e3e3" />
          <stop offset="1" stopColor="#bdd9db" />
        </linearGradient>
      </defs>

      <path
        d="M80 48 C310 36 665 21 915 2 Q998 -5 998 98 L998 465 Q998 548 936 548 H80 Q0 548 0 466 V130 Q0 54 80 48Z"
        fill="url(#technology-sheet-aqua)"
      />

      <path
        d="M34 66 C290 53 690 35 979 23"
        fill="none"
        stroke="#f1f9f9"
        strokeOpacity=".78"
        strokeWidth="1.3"
      />
    </svg>
  </div>

  {/* WHITE GLASS FRAME + FULL IMAGE */}
  <div
    className="relative z-10 w-full"
    style={{
      padding: "clamp(10px, 1.5vw, 20px)",
      borderRadius: "clamp(24px, 4.5vw, 64px)",
      background:
        "linear-gradient(135deg, #f0f8f8, #eff7f8)",
      boxShadow: "0 12px 20px #71878b35",
    }}
  >
     <img
          src="/Microbe hydrogel callout over engine spray.png"
          alt="BioShield corrosion inhibitor spray protecting marine engine hardware, with microbes and hydrogel callout"
          className="block w-full"
          style={{
            height: "auto",
            aspectRatio: "1672 / 941",
            borderRadius: "clamp(15px, 3.2vw, 45px)",
          }}
        />
         </div>
    </div>
  </div>
  );
}

// ============================================================
// CORE TECHNOLOGY PLATFORM
// ============================================================

function CoreTechnology() {
  const technologyCards = [
    {
      icon: "🦠",
      title: "Engineered Microbes",
      description:
        "Biological systems designed to support adaptive surface interaction, environmental responsiveness, and intelligent coating behavior.",
    },
    {
      icon: "💧",
      title: "Hydrogel Systems",
      description:
        "Tunable hydrogel matrices engineered for controlled material transport, surface protection, and environmental durability.",
    },
    {
      icon: "⚗️",
      title: "Cross-Linking Chemistry",
      description:
        "Advanced polymer and cross-linking architectures enabling tunable adhesion, mechanical strength, and coating longevity.",
    },
  ];

    return (
    <div
      className="relative w-full"
      style={{
        transform: "translate(0px, -210px)",
        marginBottom: "-80px",
      }}
    >
      <section className="relative z-10 mx-auto mb-[-1px] mt-20 flex justify-center">
  <ParticleLogo />
</section>

      <section
        id="solution"
        className="relative z-10 mx-auto w-full max-w-[1700px] scroll-mt-28 px-4 pb-24 sm:px-6 lg:px-10"
      >
        {/* SECTION HEADING */}
        <div className="mx-auto max-w-[1250px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#de801c]">
            Core Technology Platform
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#4a4745] sm:text-4xl md:text-5xl">
            Tunable coating systems built from{" "}
            <span className="text-[#408b90]">
              living materials.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-[#4a4745] md:text-lg">
            BioShield combines engineered microbes, hydrogel systems,
            and cross-linking chemistry to create adaptive coating
            formulations for industrial environments.
          </p>
        </div>

        {/* IMAGE LEFT — TECHNOLOGY CARDS RIGHT */}
        <div className="mt-12 grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
  <div className="relative isolate min-w-0">
    <AnimatedTechnologyGlass />
  </div>

          <div className="relative z-20 flex min-w-0 flex-col gap-5">
            {technologyCards.map((card) => (
              <div
                key={card.title}
                className="flex min-w-0 items-center gap-4 rounded-[24px] border border-zinc-200 bg-white/90 p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:gap-5 sm:p-6"
              >
                <div className="flex w-16 shrink-0 items-center justify-center border-r border-zinc-300 pr-4 sm:w-20 sm:pr-5">
                  <span className="text-4xl sm:text-5xl">
                    {card.icon}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#383635] sm:text-xl md:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#4c4947] md:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PLATFORM OUTCOME */}
        <div className="mx-auto mt-8 max-w-[900px] rounded-[26px] bg-[#1f7da6] px-7 py-5 text-center text-white shadow-xl sm:px-9 sm:py-6 md:mt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Platform Outcome
          </p>

          <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl md:text-[28px]">
            A tunable formulation platform for next-generation
            industrial protection.
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/80 md:text-base">
            By integrating microbes, hydrogels, and precision
            chemistry, BioShield is developing adaptive coatings
            designed for long-term industrial performance.
          </p>
        </div>

                <div className="mt-20">
          <ParticleLogo />
        </div>
      </section>
    </div>
  );
}

// ============================================================
// VALUE PROPOSITION
// ============================================================


function ValueProposition() {
  const benefits = [
    {
      title: "Cost-conscious protection",
      description:
        "Targeting lower production and application costs.",
      icon: "cost",
    },
    {
      title: "Safer material design",
      description:
        "Developed around biological inputs, with safety validation ongoing.",
      icon: "leaf",
    },
    {
      title: "U.S. sourcing potential",
      description:
        "Designed to support a domestic supply chain.",
      icon: "usa",
    },
    {
      title: "Adaptive protection",
      description:
        "Future formulations aim to restore damaged protective films.",
      icon: "shield",
    },
  ];

  const marketSegments = [
    {
      label: "TAM",
      amount: "$874B",
      description: "Estimated annual U.S. corrosion cost",
      background: "from-[#eff8fa] to-[#e6f5f7]",
      border: "border-[#c9e9ee]",
    },
    {
      label: "SAM",
      amount: "$13–21B",
      description: "Estimated annual maritime corrosion cost",
      background: "from-[#e8f8fb] to-[#d8f1f7]",
      border: "border-[#b9e5ee]",
    },
    {
      label: "SOM",
      amount: "$270M–$1.36B",
      description:
        "Estimated annual spend: private boat owners and small commercial vessel operators.",
      background: "from-[#fff8ec] to-[#fff0dc]",
      border: "border-[#f8dfb9]",
    },
  ];

  const renderBenefitIcon = (icon: string) => {
    if (icon === "cost") {
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          className="h-16 w-16"
          aria-hidden="true"
        >
          <ellipse
            cx="20"
            cy="43"
            rx="15"
            ry="6"
            stroke="#008b80"
            strokeWidth="2.7"
          />
          <path
            d="M5 43v9c0 3.5 6.7 6 15 6s15-2.5 15-6v-9"
            stroke="#008b80"
            strokeWidth="2.7"
          />
          <path
            d="M5 49c0 3.5 6.7 6 15 6s15-2.5 15-6"
            stroke="#008b80"
            strokeWidth="2.7"
          />
          <ellipse
            cx="44"
            cy="17"
            rx="15"
            ry="6"
            stroke="#008b80"
            strokeWidth="2.7"
          />
          <path
            d="M29 17v25c0 3.5 6.7 6 15 6s15-2.5 15-6V17"
            stroke="#008b80"
            strokeWidth="2.7"
          />
          <path
            d="M29 25c0 3.5 6.7 6 15 6s15-2.5 15-6M29 33c0 3.5 6.7 6 15 6s15-2.5 15-6M29 41c0 3.5 6.7 6 15 6s15-2.5 15-6"
            stroke="#008b80"
            strokeWidth="2.7"
          />
        </svg>
      );
    }

    if (icon === "leaf") {
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          className="h-16 w-16"
          aria-hidden="true"
        >
          <path
            d="M30 56C8 55 6 35 7 17c16 1 27 9 30 24"
            stroke="#008b80"
            strokeWidth="2.7"
            strokeLinejoin="round"
          />
          <path
            d="M30 56C28 26 43 10 59 6c3 26-6 44-29 50Z"
            stroke="#008b80"
            strokeWidth="2.7"
            strokeLinejoin="round"
          />
          <path
            d="M30 56c3-17 12-30 22-39M14 27l16 29"
            stroke="#008b80"
            strokeWidth="2.7"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (icon === "usa") {
      return (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          className="h-16 w-16"
          aria-hidden="true"
        >
          <path
            d="M5 16l11 2 7-3 8 3 9-1 6 5 12-1-3 7-6 4-2 8-7 1-5 8-8-4-7 2-5-7-7-2-1-9-5-4 3-9Z"
            stroke="#008b80"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M13 24l8 5 9-2 8 5 10-3"
            stroke="#008b80"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity=".55"
          />
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-16 w-16"
        aria-hidden="true"
      >
        <path
          d="M32 5c9 8 18 10 25 11v17c0 13-10 22-25 27C17 55 7 46 7 33V16c7-1 16-3 25-11Z"
          stroke="#008b80"
          strokeWidth="2.7"
          strokeLinejoin="round"
        />
        <path
          d="M21 29c2-6 7-10 14-10 5 0 9 2 12 6M47 18v8h-8"
          stroke="#008b80"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43 35c-2 6-7 10-14 10-5 0-9-2-12-6M17 46v-8h8"
          stroke="#008b80"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <section
      id="market"
      className="relative z-10 mx-auto -mt-[290px] w-full max-w-[1550px] scroll-mt-28 px-5 pb-20 sm:px-8 lg:px-12"
    >
      {/* SECTION HEADING */}
      <div className="mx-auto max-w-[1250px] text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f47b00] sm:text-base">
          Value &amp; Market Opportunity
        </p>

        <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#06445b] sm:text-4xl lg:text-[48px]">
          Less maintenance. More time on the water.
        </h2>

        <div className="mx-auto mt-2 h-[5px] w-[100px] rounded-full bg-[#ff7900] lg:mx-0 lg:ml-[7%]" />

        <p className="mx-auto mt-3 max-w-[1050px] text-base leading-7 text-[#33394e] sm:text-lg lg:text-[21px] lg:leading-8">
          BioShield is developing adaptive coatings to help reduce
          corrosion-related rework, downtime, and maintenance
          costs—starting with maritime.
        </p>
      </div>

      {/* BENEFITS AND MARKET OPPORTUNITY */}
      <div className="mt-12 grid grid-cols-1 items-start gap-10 xl:grid-cols-[1.03fr_1fr] xl:gap-10">
        {/* LEFT — FOUR BENEFIT CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex min-h-[215px] flex-col rounded-[26px] border border-[#b5e8ed] bg-white/85 px-7 py-6 shadow-[0_12px_25px_rgba(30,85,100,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(30,85,100,0.14)] sm:min-h-[225px]"
            >
              <div className="mb-3">
                {renderBenefitIcon(benefit.icon)}
              </div>

              <h3 className="text-xl font-extrabold leading-tight text-[#06445b] sm:text-[21px]">
                {benefit.title}
              </h3>

              <div className="mt-2 h-[4px] w-[62px] rounded-full bg-[#ff7900]" />

              <p className="mt-3 text-base leading-6 text-[#33394e]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* RIGHT — MARKET SIZING */}
        <div>
          <h3 className="text-2xl font-extrabold leading-tight text-[#06445b] sm:text-3xl lg:text-[33px]">
            A focused maritime starting point
          </h3>

          <div className="mt-2 h-[4px] w-[85px] rounded-full bg-[#ff7900]" />

          <div className="mt-4 flex flex-col gap-7">
            {marketSegments.map((segment, index) => (
              <div key={segment.label} className="relative">
                <div
                  className={`grid min-h-[112px] grid-cols-1 items-center gap-4 rounded-[24px] border bg-gradient-to-r px-7 py-5 shadow-[0_8px_16px_rgba(25,95,115,0.12)] sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-6 ${segment.background} ${segment.border}`}
                >
                  <div className="min-w-0">
                    <p className="text-xl font-extrabold leading-none text-[#06445b] sm:text-[23px]">
                      {segment.label}
                    </p>

                    <div className="mt-1 h-[4px] w-[55px] rounded-full bg-[#ff7900]" />

                    <p
                      className={`mt-2 font-extrabold leading-none tracking-tight text-[#06445b] ${
                        segment.label === "SOM"
                          ? "text-[30px] sm:text-[32px] lg:text-[35px]"
                          : "text-[40px] sm:text-[43px] lg:text-[49px]"
                      }`}
                    >
                      {segment.amount}
                    </p>
                  </div>

                  <div className="border-t border-[#8dcbd6] pt-3 sm:border-l sm:border-t-0 sm:py-1 sm:pl-6">
                    <p className="text-base leading-snug text-[#26384b] sm:text-lg">
                      {segment.description}
                    </p>
                  </div>
                </div>

                {index < marketSegments.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-[20px] left-1/2 z-10 -translate-x-1/2"
                  >
                    <div className="h-0 w-0 border-l-[11px] border-r-[11px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#ff7900]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MARITIME BANNER */}
      <div className="mt-10 flex flex-col items-center gap-6 rounded-[30px] border border-[#d5f0f2] bg-white/85 px-6 py-7 shadow-[0_10px_25px_rgba(30,85,100,0.08)] lg:flex-row lg:justify-between lg:gap-5 lg:px-8">
        <div className="shrink-0 text-center lg:text-left">
          <h3 className="text-2xl font-extrabold text-[#06445b] sm:text-3xl">
            Why maritime?
          </h3>

          <div className="mx-auto mt-2 h-[4px] w-[75px] rounded-full bg-[#ff7900] lg:mx-0" />
        </div>

        <div className="grid w-full grid-cols-1 gap-3 text-center text-sm text-[#26384b] sm:grid-cols-3 sm:text-base lg:flex lg:flex-1 lg:items-center lg:justify-around lg:gap-4">
          <div className="border-[#86d5df] py-2 lg:border-l lg:pl-5">
            Exposed metal hardware
          </div>

          <div className="border-[#86d5df] py-2 lg:border-l lg:pl-5">
            Direct access to pilot partners
          </div>

          <div className="border-[#86d5df] py-2 lg:border-l lg:pl-5">
            Defined early applications
          </div>
        </div>

        <a
          href="#pilot-testing"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#ff7900] px-7 py-3 text-center text-base font-bold text-white shadow-[0_8px_18px_rgba(255,121,0,0.2)] transition hover:bg-[#e66c00]"
        >
          Explore Pilot Opportunities
        </a>
      </div>

      {/* DISCLAIMER */}
      <p className="mx-auto mt-6 max-w-[1150px] text-center text-xs italic leading-6 text-[#33394e] sm:text-sm">
        Market figures are planning estimates, not projected BioShield
        revenue. Technology in development; performance subject to
        validation.
      </p>
    </section>
  );
}

// ============================================================
// CONTACT SECTION
// ============================================================


function ContactSection() {
  const team = [
    {
      name: "Izzat Azmi",
      firstName: "Izzat",
      role: "CFO | BioShield",
      email: "izzato11bioshield@gmail.com",
      phone: "646-371-0213",
      phoneLink: "+16463710213",
      linkedin: "linkedin.com/in/izzat-azmi-1b1244222",
    },
    {
      name: "Zach Burton",
      firstName: "Zach",
      role: "CEO | BioShield",
      email: "microbialzach@gmail.com",
      phone: "573-592-9045",
      phoneLink: "+15735929045",
      linkedin: "linkedin.com/in/zachary-burton-6a1372109",
    },
  ];

  return (
    <section
      id="investors"
      className="relative isolate z-10 w-full scroll-mt-28 overflow-hidden bg-[#34738e] px-5 pb-5 pt-16 sm:px-8 lg:px-12 lg:pt-20"
    >
      {/* FULL-WIDTH OCEAN WAVE BACKGROUND */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M0 0 H1600 V900 H0 Z"
          fill="#34738e"
        />

        <path
          d="M0 120 C300 -80 450 20 750 80 S1250 -100 1600 75 V900 H0 Z"
          fill="#5593ae"
          opacity="0.55"
        />

        <path
          d="M0 220 C300 40 550 210 850 110 S1300 60 1600 160 V900 H0 Z"
          fill="#397d9b"
          opacity="0.65"
        />

        <path
          d="M0 480 C300 350 550 560 900 450 S1300 510 1600 380 V900 H0 Z"
          fill="#276780"
          opacity="0.65"
        />

        <path
          d="M0 680 C300 500 600 760 950 620 S1300 650 1600 540 V900 H0 Z"
          fill="#205c76"
          opacity="0.65"
        />

        <path
          d="M0 820 C300 670 600 880 950 760 S1300 790 1600 700 V900 H0 Z"
          fill="#174d66"
          opacity="0.45"
        />
      </svg>

      {/* MAIN WHITE CONTACT PANEL */}
      <div className="relative mx-auto w-full max-w-[1400px] rounded-[35px] border border-white/80 bg-white px-6 py-9 shadow-[0_15px_45px_rgba(8,45,65,0.25)] sm:px-10 lg:rounded-[65px] lg:px-16 lg:py-10">

        {/* MAIN HEADING */}
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-[#07394d] sm:text-[42px] lg:text-[56px] xl:text-[62px]">
            Connect with the BioShield team
          </h2>

          <p className="mt-2 text-base font-medium leading-snug text-[#07394d] sm:text-xl lg:text-[26px]">
            Explore our technology, pilot opportunities, and partnerships.
          </p>
        </div>

        {/* TWO CONTACT COLUMNS */}
        <div className="mx-auto mt-8 grid max-w-[1120px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">

          {team.map((person, index) => (
            <article
              key={person.name}
              className={`flex min-w-0 flex-col ${
                index === 0
                  ? "border-b border-[#25c5cd] pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10 lg:pr-14"
                  : "md:pl-10 lg:pl-14"
              }`}
            >
              {/* NAME AND ROLE */}
              <h3 className="text-[30px] font-extrabold leading-tight tracking-tight text-[#07394d] lg:text-[40px]">
                {person.name}
              </h3>

              <p className="mt-1 text-xl font-bold text-[#008579] lg:text-[27px]">
                {person.role}
              </p>

              {/* CONTACT INFORMATION */}
              <div className="mt-3 flex flex-col gap-3">

                {/* EMAIL */}
                <a
                  href={`mailto:${person.email}`}
                  className="group flex min-w-0 items-center gap-4 text-[#101535] transition hover:text-[#e87f23]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 shrink-0 text-[#008579]"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                    />
                    <path d="m2 6 10 8L22 6" />
                    <path d="m2 18 7-7M22 18l-7-7" />
                  </svg>

                  <span className="min-w-0 break-all text-base font-medium lg:text-[21px] xl:text-[23px]">
                    {person.email}
                  </span>
                </a>

                {/* PHONE */}
                <a
                  href={`tel:${person.phoneLink}`}
                  className="flex items-center gap-4 text-[#101535] transition hover:text-[#e87f23]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 shrink-0 text-[#008579]"
                    aria-hidden="true"
                  >
                    <path d="M6.6 2.5c-.6-.6-1.5-.6-2.1 0L2.7 4.3c-1.8 1.8-.3 6.7 4.5 11.5s9.7 6.3 11.5 4.5l1.8-1.8c.6-.6.6-1.5 0-2.1l-3.4-3.1c-.6-.5-1.5-.5-2 .1l-1.5 1.5c-1.4-.7-2.7-1.7-3.9-2.9-1.2-1.2-2.2-2.5-2.9-3.9l1.5-1.5c.6-.6.6-1.5.1-2.1Z" />
                  </svg>

                  <span className="text-lg font-medium lg:text-[23px]">
                    {person.phone}
                  </span>
                </a>

                {/* LINKEDIN */}
                <a
                  href={`https://${person.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-start gap-4 text-[#101535] transition hover:text-[#008579]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#008579] text-[25px] font-extrabold leading-none text-white">
                    in
                  </span>

                  <div className="min-w-0">
                    <p className="text-lg font-extrabold leading-tight lg:text-[23px]">
                      Connect on LinkedIn
                    </p>

                    <p className="mt-1 break-all text-xs font-medium leading-snug sm:text-sm xl:text-[17px]">
                      {person.linkedin}
                    </p>
                  </div>
                </a>
              </div>

              {/* ORANGE EMAIL BUTTON */}
              <a
                href={`mailto:${person.email}`}
                className="mt-6 flex min-h-[52px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f58200] to-[#eb7200] px-6 py-3 text-center text-xl font-extrabold text-white shadow-[0_5px_12px_rgba(235,114,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:text-[27px]"
              >
                Email {person.firstName}
              </a>
            </article>
          ))}
        </div>

        {/* LINKTREE WITH HORIZONTAL DIVIDERS */}
        <div className="mt-7 flex items-center justify-center gap-3 lg:gap-7">

          <div className="h-[2px] flex-1 bg-[#25c5cd]" />

          <a
            href="https://linktr.ee/BioShieldCoats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-center justify-center gap-3 text-[#07394d] transition hover:text-[#008579]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 shrink-0 text-[#008579] lg:h-11 lg:w-11"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.5.5l4-4a5 5 0 0 0-7-7l-2.3 2.3" />
              <path d="M14 11a5 5 0 0 0-7.5-.5l-4 4a5 5 0 0 0 7 7l2.3-2.3" />
            </svg>

            <span className="break-all text-base font-extrabold sm:text-xl lg:text-[30px]">
              linktr.ee/BioShieldCoats
            </span>
          </a>

          <div className="h-[2px] flex-1 bg-[#25c5cd]" />
        </div>

        {/* RESEARCH TAGLINE */}
        <p className="mt-4 text-center text-lg font-bold italic text-[#07394d] sm:text-xl lg:text-[26px]">
          Research roots. Real-world purpose.
        </p>

        {/* UNIVERSITY AND NSF ACKNOWLEDGMENTS */}
        <div className="mx-auto mt-5 grid max-w-[1120px] grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-0">

          {/* IOWA STATE UNIVERSITY */}
          <div className="flex items-center justify-center gap-5 border-b border-[#25c5cd] pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-8 lg:gap-7">

            <img
              src="/iowa-state-logo.png"
              alt="Iowa State University seal"
              loading="lazy"
              className="h-[85px] w-[85px] shrink-0 object-contain lg:h-[125px] lg:w-[125px]"
            />

            <p className="text-base font-extrabold leading-tight text-[#101535] sm:text-lg lg:text-[24px]">
              Developed at
              <br />
              Iowa State University
            </p>
          </div>

          {/* NATIONAL SCIENCE FOUNDATION */}
          <div className="flex items-center justify-center gap-5 md:pl-8 lg:gap-7">

            <img
              src="/nsf-logo.png"
              alt="National Science Foundation logo"
              loading="lazy"
              className="h-[85px] w-[110px] shrink-0 object-contain lg:h-[125px] lg:w-[150px]"
            />

            <p className="text-base font-extrabold leading-tight text-[#101535] sm:text-lg lg:text-[24px]">
              Supported by the NSF
              <br />
              Convergence Accelerator
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTINUOUS LATEST UPDATES TICKER
// ============================================================

function NewsTicker() {
  return (
    <div className="flex w-full min-w-0 items-center overflow-hidden rounded-[22px] border border-[#dce8eb] bg-white shadow-[0_10px_25px_rgba(27,70,82,0.10)]">

      {/* LEFT — FIXED TITLE */}
      <div className="relative z-10 flex shrink-0 items-center border-r border-[#dce8eb] bg-white px-4 py-5 sm:px-7">
        <span className="whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#de801c] sm:text-xs sm:tracking-[0.22em]">
          Latest Updates
        </span>
      </div>

      {/* RIGHT — CONTINUOUSLY SCROLLING UPDATES */}
      <div className="relative min-w-0 flex-1 overflow-hidden py-4">
        <div className="bioshield-ticker flex w-max items-center">

          {[...updates, ...updates].map((update, index) => (
            <div
              key={`${update.date}-${index}`}
              className="flex shrink-0 items-center gap-4 px-8"
            >
              {/* Calendar icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1f7da6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
              </svg>

              {/* Update text */}
              <span className="whitespace-nowrap text-sm font-bold text-[#194c5b]">
                {update.text}
              </span>

              {/* Update date */}
              <span className="whitespace-nowrap text-xs text-[#78919a]">
                {update.date}
              </span>

              {/* Separator */}
              <span className="ml-3 text-sm text-[#de801c]">
                ●
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
// ============================================================
// MAIN HOMEPAGE
// ============================================================

export default function Home() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileHome />
      </div>

      <div className="hidden lg:block">
        <main
      id="home"
      className="relative min-h-screen w-full min-w-0 overflow-x-clip text-black"
      style={{
        backgroundImage: "url('/bioshield-background.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "1650px auto",
        backgroundPosition: "top center",
        backgroundColor: "#ffffff",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-0 top-0 h-[450px] w-[min(450px,100%)] rounded-full bg-[#dcefed]/30 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-[350px] h-[450px] w-[min(450px,100%)] rounded-full bg-[#e5f4f6]/40 blur-3xl" />

      {/* NAVIGATION */}
      <Navigation />

      {/* HERO AND CONTACT FORM */}
      <section className="relative z-10 mx-auto grid w-full max-w-[1700px] min-w-0 grid-cols-1 items-stretch gap-5 px-3 pt-28 sm:px-5 sm:pt-32 lg:grid-cols-[minmax(0,2.15fr)_minmax(300px,0.95fr)] lg:gap-6 lg:pt-36">
        {/* LEFT — VIDEO AND UPDATES */}
<div className="flex h-full min-w-0 flex-col gap-5">
  <div className="min-h-0 flex-1">
    <HeroVideo />
  </div>

  <LatestUpdatesBar />
</div>

        {/* RIGHT — PILOT TESTING FORM */}
        <PilotTestingForm />
      </section>

            {/* THREE CHALLENGE ICONS */}
      <ChallengesSection />

            {/* PRODUCT APPLICATION */}
<ProductApplication />

{/* EXISTING CORE TECHNOLOGY */}
<CoreTechnology />

      {/* EXISTING VALUE PROPOSITION */}
      <ValueProposition />

      {/* EXISTING CONTACT SECTION */}
      <ContactSection />
        </main>
      </div>
    </>
  );
}
