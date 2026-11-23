export default function AboutPage() {
  return (
    <main className="min-h-[140vh] bg-[#f7f7f5] text-black">

      {/* UPDATED NAVBAR */}
      <nav className="fixed left-1/2 top-3 z-[9999] flex w-[88%] max-w-[1250px] -translate-x-1/2 items-center justify-between rounded-[18px] border border-zinc-200 bg-white px-10 py-5 shadow-[0_12px_35px_rgba(0,0,0,0.10)]">

        <a href="/" className="block cursor-pointer">
          <img
            src="/Bioshield clear logo.png"
            alt="BioShield Corrosion Protection"
            className="h-16 w-auto"
          />
        </a>

        <div className="hidden items-center gap-12 md:flex text-zinc-700 font-medium">

          <div className="group relative flex flex-col items-center">
            <img
              src="/Bioshield logo particles.png"
              alt="particles"
              className="absolute -top-10 w-16 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            />
            <a href="/about" className="transition hover:text-black">
              About Us
            </a>
          </div>

          <div className="group relative flex flex-col items-center">
            <img
              src="/Bioshield logo particles.png"
              alt="particles"
              className="absolute -top-10 w-16 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            />
            <a href="/#solution" className="transition hover:text-black">
              Solution
            </a>
          </div>

          <div className="group relative flex flex-col items-center">
            <img
              src="/Bioshield logo particles.png"
              alt="particles"
              className="absolute -top-10 w-16 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            />
            <a href="/#market" className="transition hover:text-black">
              Market
            </a>
          </div>

          <div className="group relative flex flex-col items-center">
            <img
              src="/Bioshield logo particles.png"
              alt="particles"
              className="absolute -top-10 w-16 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            />
            <a href="/#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>

          <div className="group relative flex flex-col items-center">
            <img
              src="/Bioshield logo particles.png"
              alt="particles"
              className="absolute -top-10 w-16 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            />
            <a href="/#investors" className="transition hover:text-black">
              For Investors
            </a>
          </div>

        </div>

        <button className="rounded-full bg-[#e87f23] px-8 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#d9731d]">
          Rartner Portal
        </button>

      </nav>

      {/* ABOUT CONTENT */}
      <section className="mx-auto w-full max-w-[1280px] px-6 pt-40 pb-24">

        <p className="text-sm uppercase tracking-[0.3em] text-[#e87f23]">
          About BioShield
        </p>

        <h1 className="mt-6 max-w-4xl text-6xl font-bold leading-tight">
          Engineering living protection for industrial surfaces.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-zinc-700">
          BioShield is developing adaptive coating technologies designed to
          improve durability, reduce corrosion-related lifecycle costs, and
          create safer industrial protection systems.
        </p>

      </section>

    </main>
  );
}