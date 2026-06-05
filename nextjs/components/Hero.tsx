export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper grain">
      {/* atmospheric glows */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-brand/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-brand-400/15 blur-[120px]" />

      {/* floating blueprint line-art — fish */}
      <div
        className="pointer-events-none absolute right-[4%] top-[26%] w-[clamp(200px,32vw,460px)] text-brand-200/25 animate-drift"
        aria-hidden="true"
      >
        <svg viewBox="0 0 240 130" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 65 C55 25 130 25 168 58 L206 32 C198 50 198 80 206 98 L168 72 C130 105 55 105 22 65 Z" />
          <path d="M74 40 C66 58 66 72 74 90" />
          <path d="M100 30 C108 17 130 16 136 30" />
          <path d="M92 76 C102 94 120 92 126 80" />
          <path d="M120 50c8 6 8 24 0 30M138 52c7 5 7 21 0 26" />
          <circle cx="50" cy="56" r="3.2" />
        </svg>
      </div>
      {/* scallop */}
      <div
        className="pointer-events-none absolute left-[2%] bottom-[14%] w-[clamp(120px,16vw,210px)] text-brand-200/20 animate-drift-slow"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 130" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M80 116 C20 116 12 60 26 34 C34 20 44 28 50 30 C58 18 66 18 72 30 C78 20 82 20 88 30 C94 18 102 18 110 30 C116 28 126 20 134 34 C148 60 140 116 80 116 Z" />
          <path d="M80 112V40M62 110 70 44M98 110 90 44M46 102 62 50M114 102 98 50M34 86 56 56M126 86 104 56" />
          <path d="M68 118h24l-5 8h-14z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-shell px-6 lg:px-8 pt-40 pb-24 md:pt-48 md:pb-32">
        <p
          className="animate-rise opacity-0 text-[12px] tracking-kicker uppercase text-brand-200"
          style={{ animationDelay: ".05s" }}
        >
          Restoran Seafood Premium · Jakarta
        </p>

        <h1
          className="animate-rise opacity-0 mt-6 max-w-4xl font-display font-light text-balance text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] tracking-[-0.02em]"
          style={{ animationDelay: ".18s" }}
        >
          Kemewahan dari
          <br />
          <span className="italic font-normal text-brand-200">kedalaman</span> laut.
        </h1>

        <p
          className="animate-rise opacity-0 mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70"
          style={{ animationDelay: ".32s" }}
        >
          Tangkapan harian dari nelayan pesisir Nusantara, diolah dengan presisi
          dan disajikan dalam ruang yang tenang. Sebuah penghormatan untuk laut.
        </p>

        <div
          className="animate-rise opacity-0 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ animationDelay: ".46s" }}
        >
          <a
            href="#reservasi"
            className="group inline-flex items-center gap-3 rounded-full bg-red px-7 py-4 text-[15px] font-semibold text-white shadow-xl shadow-red/25 transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Reservasi Sekarang
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-3 rounded-full border border-paper/25 px-7 py-4 text-[15px] font-semibold text-paper transition hover:border-paper/60 hover:bg-white/5"
          >
            Lihat Hidangan
          </a>
        </div>

        {/* stat row */}
        <dl
          className="animate-rise opacity-0 mt-20 grid grid-cols-2 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          style={{ animationDelay: ".6s" }}
        >
          <div className="p-6 sm:p-8">
            <dt className="text-[12px] uppercase tracking-kicker text-paper/45">Tahun</dt>
            <dd className="mt-2 font-display text-3xl sm:text-4xl">27<span className="text-red">+</span></dd>
            <p className="mt-1 text-[13px] text-paper/55">melayani pencinta laut</p>
          </div>
          <div className="p-6 sm:p-8 sm:border-l border-white/10">
            <dt className="text-[12px] uppercase tracking-kicker text-paper/45">Tangkapan</dt>
            <dd className="mt-2 font-display text-3xl sm:text-4xl">Harian</dd>
            <p className="mt-1 text-[13px] text-paper/55">langsung dari pesisir</p>
          </div>
          <div className="p-6 sm:p-8 border-t sm:border-t-0 sm:border-l border-white/10 col-span-2 sm:col-span-1">
            <dt className="text-[12px] uppercase tracking-kicker text-paper/45">Signature</dt>
            <dd className="mt-2 font-display text-3xl sm:text-4xl">32 Hidangan</dd>
            <p className="mt-1 text-[13px] text-paper/55">racikan para master</p>
          </div>
        </dl>
      </div>

      <div className="relative mx-auto max-w-shell px-6 lg:px-8 pb-10 hidden md:flex items-center gap-3 text-[12px] tracking-kicker uppercase text-paper/40">
        <span className="h-10 w-px bg-gradient-to-b from-paper/40 to-transparent" />
        Gulir untuk menelusuri
      </div>
    </section>
  );
}
