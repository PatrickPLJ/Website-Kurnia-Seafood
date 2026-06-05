import Reveal from "./Reveal";

const features = [
  {
    title: "Tangkapan Harian",
    desc: "Dipasok langsung dari nelayan pesisir setiap pagi, tanpa perantara.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 30c5-7 12-7 18 0 6 7 13 7 18 0M10 22c4 4 12 4 16 0M26 22l4-2-1 4" />
        <circle cx="17" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Tangan Para Master",
    desc: "Chef dengan puluhan tahun pengalaman menjaga setiap teknik & rasa.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6c6 0 10 4 10 10 0 5-4 8-4 12H18c0-4-4-7-4-12C14 10 18 6 24 6Z" />
        <path d="M18 28h12M19 34h10M21 40h6" />
      </svg>
    ),
  },
  {
    title: "Laut ke Meja",
    desc: "Rantai pasok terpendek menjaga kesegaran dan menghormati sumbernya.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 34c4-5 8-5 12 0M6 26c4-5 8-5 12 0" />
        <path d="M24 12v24M24 12c6 2 12 2 18 0v10c-6 2-12 2-18 0" />
      </svg>
    ),
  },
  {
    title: "Ruang Privat",
    desc: "Private dining & chef's table untuk perayaan dan jamuan istimewa.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40V20l16-12 16 12v20" />
        <path d="M18 40V28h12v12" />
        <path d="M24 8v6" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-[12px] tracking-kicker uppercase text-red">Mengapa Kurnia</p>
          <h2 className="mt-4 font-display font-light text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">
            Empat janji yang tak kami tawar.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-ink/10 bg-ink/10">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className="bg-paper p-8 group hover:bg-mist transition-colors duration-300"
            >
              <span className="text-brand group-hover:text-red transition-colors">{f.icon}</span>
              <h3 className="mt-5 font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
