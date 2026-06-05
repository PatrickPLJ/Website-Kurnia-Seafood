import { Monogram } from "./Logo";

const socials = [
  {
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20l1.5-4.5A8 8 0 1 1 9 19L4 20Z" />
        <path d="M9 10c0 4 2 6 6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 8h2V5h-2c-2 0-3 1-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8c0-.5.5-1 1-1Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-paper/70">
      <div className="mx-auto max-w-shell px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="text-brand-200">
                <Monogram />
              </span>
              <span className="font-display text-xl text-paper">
                Kurnia<span className="text-red"> Seafood</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-paper/55">
              Restoran seafood premium yang menghormati laut Nusantara — dari
              tangkapan harian hingga meja Anda, sejak 1998.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-red hover:text-red transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[12px] tracking-kicker uppercase text-paper/40">Jelajahi</h3>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><a href="#filosofi" className="ul-anim hover:text-paper">Filosofi</a></li>
              <li><a href="#menu" className="ul-anim hover:text-paper">Hidangan</a></li>
              <li><a href="#pengalaman" className="ul-anim hover:text-paper">Pengalaman</a></li>
              <li><a href="#reservasi" className="ul-anim hover:text-paper">Reservasi</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[12px] tracking-kicker uppercase text-paper/40">Jam Buka</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-paper/55">
              <li>Sel–Jum · 11–23</li>
              <li>Sab–Min · 11–24</li>
              <li className="text-paper/35">Senin tutup</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[12px] tracking-kicker uppercase text-paper/40">Kunjungi</h3>
            <address className="mt-4 not-italic text-[15px] leading-relaxed text-paper/55">
              Jl. Pantai Indah Selatan No. 8
              <br />
              Jakarta Utara 14470
              <br />
              <a href="tel:+62215550198" className="ul-anim hover:text-paper">+62 21 555 0198</a>
              <br />
              <a href="mailto:halo@kurniaseafood.co.id" className="ul-anim hover:text-paper">halo@kurniaseafood.co.id</a>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-paper/40">
          <p>© {new Date().getFullYear()} Kurnia Seafood. Hak cipta dilindungi.</p>
          <p className="flex items-center gap-5">
            <a href="#" className="ul-anim hover:text-paper">Privasi</a>
            <a href="#" className="ul-anim hover:text-paper">Syarat</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
