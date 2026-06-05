"use client";

import Reveal from "./Reveal";

const cards = [
  {
    tall: true,
    kicker: "Ruang Utama",
    title: "Cahaya rendah, langit-langit tinggi",
    img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=70",
    alt: "Interior ruang utama restoran dengan pencahayaan hangat",
    grad: "from-brand/40 via-ink to-ink-900",
  },
  {
    kicker: "Private Dining",
    title: "Ruang tertutup untuk 12 tamu",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=70",
    alt: "Meja private dining yang ditata elegan",
    grad: "from-ink-800 via-ink to-brand/30",
  },
  {
    kicker: "Raw Bar & Cellar",
    title: "Tiram dingin & anggur pilihan",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=70",
    alt: "Raw bar dengan tiram dan es",
    grad: "from-red/30 via-ink to-ink-900",
  },
];

export default function Experience() {
  return (
    <section id="pengalaman" className="relative bg-ink text-paper py-24 md:py-32 grain overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh] w-[70vh] rounded-full bg-brand/20 blur-[140px]" />
      <div className="relative mx-auto max-w-shell px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] tracking-kicker uppercase text-brand-200">Pengalaman</p>
          <h2 className="mt-4 font-display font-light text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] tracking-[-0.02em]">
            Tiga babak dalam satu <span className="italic text-brand-200">jamuan</span>.
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed text-paper/65">
            Ruang yang dirancang untuk memperlambat waktu — dari sambutan pertama
            hingga teguk terakhir.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal
              as="figure"
              key={c.kicker}
              delay={i * 80}
              className={`group relative overflow-hidden rounded-3xl bg-ink-800 border border-white/10 ${
                c.tall ? "aspect-[4/5] md:row-span-2 md:aspect-auto" : "aspect-[16/10]"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.grad}`} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent" />
              <figcaption className="absolute bottom-0 p-7">
                <p className="text-[11px] tracking-kicker uppercase text-brand-200">{c.kicker}</p>
                <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
