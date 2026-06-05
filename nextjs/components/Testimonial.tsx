import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section id="galeri" className="bg-mist py-24 md:py-32">
      <Reveal className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <svg className="mx-auto text-red" width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9.5 6C6.5 7.3 5 9.7 5 13.2V18h5v-5H7.6c.1-2 .9-3.3 2.6-4.1L9.5 6Zm9 0C15.5 7.3 14 9.7 14 13.2V18h5v-5h-2.4c.1-2 .9-3.3 2.6-4.1L18.5 6Z" />
        </svg>
        <blockquote className="mt-8 font-display font-light text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.2] tracking-[-0.01em] text-balance text-ink">
          &ldquo;Sebuah ode untuk laut Nusantara. Kesegaran yang jujur, ruang yang
          tenang, dan pelayanan yang membuat Anda ingin berlama-lama.&rdquo;
        </blockquote>
        <div className="mt-9 flex items-center justify-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-paper font-display text-lg">
            SW
          </span>
          <div className="text-left">
            <p className="font-semibold text-ink">Sastra Wijaya</p>
            <p className="text-[13px] text-steel">Kolumnis Kuliner · Majalah Rasa</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-steel">
          <span className="flex items-center gap-2 text-[14px]">
            <span className="text-red">★★★★★</span> 4.9 · 1.200+ ulasan
          </span>
          <span className="hidden sm:block h-4 w-px bg-steel/30" />
          <span className="text-[14px]">Diliput Tatler Dining</span>
          <span className="hidden sm:block h-4 w-px bg-steel/30" />
          <span className="text-[14px]">Pilihan Editor · Foodism ID</span>
        </div>
      </Reveal>
    </section>
  );
}
