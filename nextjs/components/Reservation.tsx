"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const field =
  "w-full rounded-xl bg-ink-900/60 border border-white/15 px-4 py-3 text-paper placeholder:text-paper/35 outline-none focus-visible:border-brand-200 focus-visible:ring-2 focus-visible:ring-brand/40 transition";
const label = "block text-[12px] tracking-kicker uppercase text-paper/55 mb-2";

export default function Reservation() {
  const [sent, setSent] = useState(false);

  return (
    <section id="reservasi" className="relative bg-ink text-paper py-24 md:py-32 grain overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-[-5%] h-[50vh] w-[50vh] rounded-full bg-red/15 blur-[120px]" />
      <div className="relative mx-auto max-w-shell px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <Reveal>
          <p className="text-[12px] tracking-kicker uppercase text-brand-200">Reservasi</p>
          <h2 className="mt-4 font-display font-light text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.02em]">
            Amankan meja Anda
            <br />
            di tepi laut.
          </h2>
          <p className="mt-6 max-w-md text-[16.5px] leading-relaxed text-paper/65">
            Kami menyarankan reservasi untuk akhir pekan dan private dining. Tim
            kami akan mengonfirmasi dalam 1×24 jam.
          </p>

          <dl className="mt-10 space-y-5 text-[15px]">
            <div className="flex gap-4">
              <dt className="text-brand-200 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </dt>
              <dd className="text-paper/80">
                Jl. Pantai Indah Selatan No. 8
                <br />
                Jakarta Utara 14470
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-brand-200 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              </dt>
              <dd className="text-paper/80">
                <a href="tel:+62215550198" className="ul-anim hover:text-paper">+62 21 555 0198</a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-brand-200 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </dt>
              <dd className="text-paper/80">
                Selasa – Minggu · 11.00 – 23.00
                <br />
                <span className="text-paper/45">Senin tutup</span>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal
          delay={120}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 sm:p-9"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
              setSent(true);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="nama" className={label}>Nama</label>
                <input id="nama" name="nama" type="text" required placeholder="Nama lengkap" className={field} />
              </div>
              <div>
                <label htmlFor="tgl" className={label}>Tanggal</label>
                <input id="tgl" name="tgl" type="date" required className={`${field} [color-scheme:dark]`} />
              </div>
              <div>
                <label htmlFor="tamu" className={label}>Jumlah Tamu</label>
                <select id="tamu" name="tamu" className={field}>
                  <option>2 orang</option>
                  <option>3–4 orang</option>
                  <option>5–6 orang</option>
                  <option>7–12 orang</option>
                  <option>Private dining (12+)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="telp" className={label}>No. Telepon / WhatsApp</label>
                <input id="telp" name="telp" type="tel" required placeholder="+62 8.." className={field} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="catatan" className={label}>
                  Catatan <span className="text-paper/35 normal-case tracking-normal">(opsional)</span>
                </label>
                <textarea id="catatan" name="catatan" rows={3} placeholder="Alergi, perayaan, permintaan khusus…" className={`${field} resize-none`} />
              </div>
            </div>
            <button
              type="submit"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-red px-6 py-4 text-[15px] font-semibold text-white shadow-xl shadow-red/25 transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
            >
              Kirim Permintaan Reservasi
            </button>
            {sent && (
              <p className="mt-4 text-center text-[14px] text-brand-200">
                Terima kasih — permintaan terkirim. Kami akan menghubungi Anda segera.
              </p>
            )}
            <p className="mt-3 text-center text-[12.5px] text-paper/40">
              Demo form · belum terhubung ke sistem pemesanan.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
