import Reveal from "./Reveal";

const dishes = [
  { no: "01", name: "Lobster Bakar Madu-Asam", desc: "Lobster utuh dipanggang, glasir madu & asam jawa, sambal matah segar." },
  { no: "02", name: "Kerapu Kukus Hong Kong", desc: "Kerapu merah utuh, kecap asin premium, jahe muda, taburan daun bawang." },
  { no: "03", name: "Kepiting Saus Padang", desc: "Kepiting bakau jumbo, saus padang pedas berempah, mantou panggang." },
  { no: "04", name: "Udang Galah Mentega", desc: "Udang galah, saus mentega truffle, bawang putih panggang, peterseli." },
  { no: "05", name: "Tiram Segar Pesisir", desc: "Setengah lusin tiram dingin, mignonette jeruk nipis, roti panggang mentega." },
  { no: "06", name: "Gindara Miso Panggang", desc: "Black cod marinasi miso tiga hari, asinan rumput laut, wijen sangrai." },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[12px] tracking-kicker uppercase text-red">Hidangan Signature</p>
            <h2 className="mt-4 font-display font-light text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">
              Dipilih dari laut,
              <br className="hidden sm:block" /> disempurnakan di dapur.
            </h2>
          </div>
          <a href="#" className="ul-anim self-start md:self-auto inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
            Lihat menu lengkap
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {dishes.map((d, i) => (
            <Reveal as="article" key={d.no} delay={(i % 3) * 80} className="group relative">
              <div className="flex items-baseline justify-between gap-3 border-b border-ink/10 pb-3 group-hover:border-red transition-colors duration-300">
                <span className="font-display text-sm text-steel">{d.no}</span>
                <span className="h-px flex-1 bg-ink/10 group-hover:bg-red/40 transition-colors" />
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-tight">{d.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{d.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
