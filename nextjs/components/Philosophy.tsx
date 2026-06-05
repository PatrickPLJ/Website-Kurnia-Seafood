import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="filosofi" className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-shell px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6">
          <p className="text-[12px] tracking-kicker uppercase text-red">Filosofi Kami</p>
          <h2 className="mt-5 font-display font-light text-balance text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] tracking-[-0.02em]">
            Laut diperlakukan dengan <span className="italic text-brand">hormat</span>, bukan sekadar bahan.
          </h2>
          <p className="mt-7 max-w-lg text-[16.5px] leading-relaxed text-ink/70">
            Setiap pagi, tangkapan terbaik tiba dari nelayan langganan di sepanjang
            pesisir. Kami memilih dengan teliti — hanya yang paling segar yang layak
            menyentuh dapur kami. Tidak ada jalan pintas, tidak ada kompromi.
          </p>
          <p className="mt-4 max-w-lg text-[16.5px] leading-relaxed text-ink/70">
            Dari laut ke meja Anda dalam hitungan jam. Itulah janji yang kami jaga
            selama lebih dari dua dekade.
          </p>
          <div className="mt-9 flex items-center gap-5">
            <span className="font-display italic text-2xl text-brand">Kurnia</span>
            <span className="h-px w-16 bg-steel/40" />
            <span className="text-[13px] tracking-wide text-steel">Pendiri &amp; Kepala Dapur</span>
          </div>
        </Reveal>

        {/* blueprint card */}
        <Reveal className="lg:col-span-6" delay={120}>
          <figure className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-3xl bg-ink text-brand-200 grain shadow-2xl shadow-ink/30">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(#9CC3EA22 1px,transparent 1px),linear-gradient(90deg,#9CC3EA22 1px,transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <figcaption className="absolute left-6 top-6 z-10 text-[11px] tracking-kicker uppercase text-paper/60">
              Pl. 01 — Anatomi Kesegaran
            </figcaption>
            <span className="absolute right-6 top-6 z-10 text-[11px] tracking-kicker uppercase text-red">
              Kurnia&nbsp;Seafood
            </span>

            <div className="absolute inset-0 grid place-items-center p-10">
              <svg viewBox="0 0 220 220" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3/4 text-paper/80 animate-drift-slow">
                <path d="M150 36 C188 70 184 132 138 162 C112 179 78 178 58 162" />
                <path d="M150 52 C176 80 172 124 134 150 C112 165 86 165 70 154" />
                <path d="M168 78 154 86M170 96 154 102M168 116 152 118M160 134 146 132M146 150 136 144" />
                <path d="M58 162 38 150M58 162 46 178M58 162 64 182M58 162 76 180" />
                <path d="M150 36 C156 24 168 18 182 18M150 36 168 30M150 36 162 44" />
                <path d="M182 18 C150 6 96 8 60 26M182 18 C160 14 120 22 92 40" />
                <path d="M138 162l-4 16M120 170l-2 16M102 172l0 16M84 170l2 16" />
                <circle cx="160" cy="40" r="2.6" fill="currentColor" stroke="none" />
                <path d="M30 196h160M30 192v8M190 192v8" strokeOpacity=".5" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
              <p className="text-[12px] leading-snug text-paper/55 max-w-[60%]">
                Udang galah · dipilih utuh,
                <br />
                diukur, ditimbang setiap pagi.
              </p>
              <p className="font-display text-3xl text-paper">No.&nbsp;01</p>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
