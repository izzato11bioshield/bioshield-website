
"use client";

import { useState } from "react";

const linktreeUrl = "https://linktr.ee/BioShieldCoats";

const pilotFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSco2cMzAYhdNZZM3Pijrqinc9-MgYtD_PWhPm8PVpYcO6VSPQ/viewform";

const navLinks = [
  { label: "Home", id: "mobile-home" },
  { label: "Solution", id: "mobile-products" },
  { label: "Technology", id: "mobile-technology" },
  { label: "Market", id: "mobile-market" },
  { label: "For Investors", id: "mobile-investors" },
];

const challenges = [
  {
    image: "/corrosion-icon.png",
    title: "Saltwater corrosion coming back?",
    description: "Exposed metal needs repeated attention.",
  },
  {
    image: "/maintenance-icon.png",
    title: "Too much time on maintenance?",
    description: "Cleaning, inspecting, and recoating.",
  },
  {
    image: "/costs-icon.png",
    title: "Maintenance costs adding up?",
    description: "Supplies, labor, and replacement parts.",
  },
];

const technology = [
  {
    icon: "🦠",
    title: "Engineered Microbes",
    description:
      "Biological systems designed to support adaptive surface interaction and intelligent coating behavior.",
  },
  {
    icon: "💧",
    title: "Hydrogel Systems",
    description:
      "Tunable hydrogel matrices engineered for controlled material transport and surface protection.",
  },
  {
    icon: "⚗️",
    title: "Cross-Linking Chemistry",
    description:
      "Polymer and cross-linking architectures for tunable adhesion, strength, and coating longevity.",
  },
];

const benefits = [
  {
    title: "Cost-conscious protection",
    description: "Targeting lower production and application costs.",
  },
  {
    title: "Safer material design",
    description:
      "Developed around biological inputs, with safety validation ongoing.",
  },
  {
    title: "U.S. sourcing potential",
    description: "Designed to support a domestic supply chain.",
  },
  {
    title: "Adaptive protection",
    description:
      "Future formulations aim to restore damaged protective films.",
  },
];

const markets = [
  {
    label: "TAM",
    value: "$874B",
    description: "Estimated annual U.S. corrosion cost",
  },
  {
    label: "SAM",
    value: "$13–21B",
    description: "Estimated annual maritime corrosion cost",
  },
  {
    label: "SOM",
    value: "$270M–$1.36B",
    description:
      "Estimated annual spend: private boat owners and small commercial vessel operators.",
  },
];

function MobileButton({
  children,
  onClick,
  href,
  secondary = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  secondary?: boolean;
}) {
  const classes = `inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-bold text-white shadow-lg transition active:scale-[0.98] ${
    secondary ? "bg-[#2581a4]" : "bg-[#e87f23]"
  }`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default function MobileHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      90;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <main
      id="mobile-home"
      className="min-h-screen w-full overflow-x-clip bg-white pb-0 text-[#16495b]"
      style={{
        backgroundImage: "url('/bioshield-background.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "950px auto",
      }}
    >
      {/* MOBILE NAVIGATION */}
      <header className="fixed inset-x-3 top-3 z-[9999] rounded-[22px] border border-white/80 bg-white/95 shadow-[0_10px_30px_rgba(20,70,85,0.15)] backdrop-blur-xl">
        <div className="flex min-h-[70px] items-center justify-between gap-3 px-4">
          <button
            type="button"
            onClick={() => scrollTo("mobile-home")}
            aria-label="BioShield home"
            className="shrink-0"
          >
            <img
              src="/bioshield-logo-transparent.png"
              alt="BioShield"
              className="h-[52px] w-auto max-w-[170px] object-contain"
            />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dce8eb] bg-[#f0f8f8] text-2xl text-[#16495b]"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#e5edf0] px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="block min-h-11 w-full rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-[#edf7f8]"
              >
                {link.label}
              </button>
            ))}

            <a
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#e87f23] px-5 text-sm font-bold text-white"
            >
              Linktree Portal
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="px-3 pt-[100px]">
        <div className="relative flex min-h-[530px] items-end overflow-hidden rounded-[26px] bg-[#173e51] shadow-xl">
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

          <div className="absolute inset-0 bg-gradient-to-t from-[#092d40]/95 via-[#123d50]/65 to-[#123d50]/10" />

          <div className="relative z-10 w-full px-6 pb-9 pt-24">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#bde9f3]">
              BioShield Marine Coatings
            </p>

            <h1 className="mt-4 text-[clamp(30px,8vw,42px)] font-extrabold leading-[1.1] tracking-tight text-white">
              Living protection against saltwater corrosion.
            </h1>

            <p className="mt-5 text-sm leading-7 text-white/95">
              BioShield is developing a hydrogel coating that
              uses living microbes to protect exposed metal on
              boats and marine equipment.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <MobileButton
                onClick={() => scrollTo("mobile-products")}
              >
                Explore Pilot Opportunities
              </MobileButton>

              <MobileButton
                secondary
                onClick={() => scrollTo("mobile-technology")}
              >
                View Technology
              </MobileButton>
            </div>
          </div>
        </div>
      </section>

      {/* PILOT OPPORTUNITIES */}
      <section className="px-4 pt-6">
        <div className="rounded-[26px] border border-[#d9ebec] bg-white p-6 shadow-lg">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e87f23]">
            Contact BioShield
          </p>

          <h2 className="mt-3 text-[27px] font-extrabold leading-tight">
            Help Shape the Future of Marine Protection.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#53717d]">
            We&apos;re looking for partners to explore
            BioShield&apos;s next-generation coating technology
            in real operating conditions.
          </p>

          <div className="mt-6 space-y-3">
            {[
              ["Boat Owners", "Boat owners & marine equipment operators"],
              ["Marinas & Boatyards", "Marine services & offshore operators"],
              ["Manufacturing & Industry", "Manufacturing, testing & industrial applications"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#d9ebec] bg-[#f0f8f8] p-4"
              >
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[#64818a]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <MobileButton href={pilotFormUrl}>
              Join the Pilot Program ↗
            </MobileButton>
          </div>

          <p className="mt-3 text-center text-xs text-[#7a969d]">
            Opens a short application in Google Forms
          </p>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-5 py-16">
        <h2 className="text-center text-3xl font-extrabold">
          Sound familiar?
        </h2>

        <div className="mt-8 space-y-8">
          {challenges.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt=""
                className="h-32 w-32 object-contain drop-shadow-lg"
              />
              <h3 className="mt-3 text-lg font-extrabold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#62696c]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCT APPLICATION */}
      <section
        id="mobile-products"
        className="scroll-mt-24 px-4 pb-16"
      >
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e87f23]">
            Product Application
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight">
            Built for the water.
            <br />
            Designed to protect.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#53717d]">
            A next-generation living hydrogel coating being
            developed to help protect marine metal surfaces
            from corrosion.
          </p>
        </div>

        <img
          src="/Aqua-framed three-photo gallery cutout.png"
          alt="Marine coating applications"
          className="mt-7 h-auto w-full object-contain"
        />

        <div className="mt-6 overflow-hidden rounded-[26px] border border-[#c7e2e2] bg-gradient-to-br from-[#f0f8f8] to-[#d4e9e9] p-5 shadow-lg">
          <img
            src="/bioshield-products.png"
            alt="BioShield marine coating products"
            className="mx-auto h-auto w-full object-contain"
          />

          <p className="mt-4 text-center text-sm font-semibold leading-6">
            Boats • Marine Equipment • Docks • Coastal Infrastructure
          </p>

          <p className="mt-3 text-center text-xs text-[#64818a]">
            Technology in development. Performance subject to validation.
          </p>
        </div>

        <div className="mt-6">
          <MobileButton href={pilotFormUrl}>
            Apply for Pilot Testing
          </MobileButton>
        </div>
      </section>

      {/* CORE TECHNOLOGY */}
      <section
        id="mobile-technology"
        className="scroll-mt-24 px-4 pb-16"
      >
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e87f23]">
            Core Technology Platform
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight">
            Tunable coating systems built from{" "}
            <span className="text-[#408b90]">
              living materials.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#4a4745]">
            BioShield combines engineered microbes, hydrogel
            systems, and cross-linking chemistry to create
            adaptive coating formulations for industrial
            environments.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[25px] border-[10px] border-[#e6f4f4] bg-white shadow-xl">
          <img
            src="/Microbe hydrogel callout over engine spray.png"
            alt="BioShield hydrogel technology protecting marine engine hardware"
            className="block h-auto w-full"
          />
        </div>

        <div className="mt-7 space-y-4">
          {technology.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-[22px] border border-[#dce8eb] bg-white/95 p-5 shadow-md"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>

              <div className="min-w-0">
                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4c4947]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] bg-[#1f7da6] p-6 text-center text-white shadow-lg">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            Platform Outcome
          </p>

          <h3 className="mt-3 text-xl font-bold leading-tight">
            A tunable formulation platform for
            next-generation industrial protection.
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/85">
            BioShield is developing adaptive coatings designed
            for long-term industrial performance.
          </p>
        </div>
      </section>

      {/* VALUE AND MARKET */}
      <section
        id="mobile-market"
        className="scroll-mt-24 px-4 pb-16"
      >
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e87f23]">
            Value &amp; Market Opportunity
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight">
            Less maintenance. More time on the water.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#33394e]">
            BioShield is developing adaptive coatings to help
            reduce corrosion-related rework, downtime, and
            maintenance costs—starting with maritime.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[500px]:grid-cols-2">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-[23px] border border-[#b5e8ed] bg-white/95 p-5 shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                {item.title}
              </h3>
              <div className="mt-3 h-1 w-14 rounded-full bg-[#ff7900]" />
              <p className="mt-3 text-sm leading-6 text-[#33394e]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-center text-2xl font-extrabold">
          A focused maritime starting point
        </h3>

        <div className="mt-6 space-y-5">
          {markets.map((market, index) => (
            <div key={market.label}>
              <article
                className={`rounded-[23px] border p-6 shadow-md ${
                  market.label === "SOM"
                    ? "border-[#f8dfb9] bg-[#fff4e4]"
                    : "border-[#c9e9ee] bg-[#e8f7fa]"
                }`}
              >
                <p className="text-lg font-extrabold">
                  {market.label}
                </p>

                <div className="mt-1 h-1 w-14 rounded-full bg-[#ff7900]" />

                <p className="mt-3 break-words text-[clamp(30px,9vw,43px)] font-extrabold leading-tight tracking-tight">
                  {market.value}
                </p>

                <p className="mt-3 border-t border-[#a4d4db] pt-3 text-sm leading-6 text-[#26384b]">
                  {market.description}
                </p>
              </article>

              {index < markets.length - 1 && (
                <div className="flex justify-center pt-3 text-xl text-[#ff7900]">
                  ▼
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-9 rounded-[25px] border border-[#d5f0f2] bg-white/95 p-6 text-center shadow-md">
          <h3 className="text-2xl font-extrabold">
            Why maritime?
          </h3>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#ff7900]" />

          <p className="mt-5 text-sm leading-7">
            Exposed metal hardware
            <br />
            Direct access to pilot partners
            <br />
            Defined early applications
          </p>

          <div className="mt-6">
            <MobileButton
              onClick={() => scrollTo("mobile-products")}
            >
              Explore Pilot Opportunities
            </MobileButton>
          </div>
        </div>

        <p className="mt-6 text-center text-xs italic leading-6 text-[#33394e]">
          Market figures are planning estimates, not projected
          BioShield revenue. Technology in development;
          performance subject to validation.
        </p>
      </section>

      {/* INVESTOR CONTACTS */}
      <section
        id="mobile-investors"
        className="scroll-mt-20 bg-gradient-to-br from-[#2b83ad] via-[#256f91] to-[#1e5d79] px-4 py-16 text-white"
      >
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bde9f3]">
            Investor Relations
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight">
            Connect With the BioShield Team
          </h2>

          <p className="mt-4 text-sm leading-7 text-blue-100">
            Interested in investment opportunities,
            technology, or strategic partnerships?
            Reach out directly.
          </p>
        </div>

        <div className="mt-9 space-y-5">
          {[
            {
              initials: "IA",
              name: "Izzat Azmi",
              role: "CFO | BioShield",
              email: "izzato11bioshield@gmail.com",
              phone: "646-371-0213",
              tel: "+16463710213",
            },
            {
              initials: "ZB",
              name: "Zach Burton",
              role: "CEO | BioShield",
              email: "microbialzach@gmail.com",
              phone: "573-592-9045",
              tel: "+15735929045",
            },
          ].map((person) => (
            <article
              key={person.name}
              className="rounded-[26px] bg-white p-6 text-[#16495b] shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e1f3f5] text-lg font-extrabold text-[#147b9b]">
                  {person.initials}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#2581a4]">
                    {person.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#f58200]" />

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#718c97]">
                Email
              </p>
              <a
                href={`mailto:${person.email}`}
                className="mt-1 block break-all text-sm font-semibold"
              >
                {person.email}
              </a>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#718c97]">
                Phone
              </p>
              <a
                href={`tel:${person.tel}`}
                className="mt-1 block text-base font-semibold"
              >
                {person.phone}
              </a>

              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#718c97]">
                BioShield Links
              </p>
              <a
                href={linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm font-semibold text-[#2581a4]"
              >
                linktr.ee/BioShieldCoats
              </a>

              <div className="mt-7">
                <MobileButton
                  href={`mailto:${person.email}`}
                >
                  Email {person.name.split(" ")[0]}
                </MobileButton>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-blue-100">
          BioShield Marine Coatings
        </p>
      </section>
    </main>
  );
}
