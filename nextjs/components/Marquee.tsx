const items = [
  "Lobster",
  "Kerapu Merah",
  "Kepiting Bakau",
  "Udang Galah",
  "Tiram Segar",
  "Gindara Miso",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <span className="flex items-center gap-10" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <span key={it} className="flex items-center gap-10">
          <span>{it}</span>
          <span className="text-red">✦</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="bg-ink-900 text-paper/35 border-y border-white/10 overflow-hidden py-4">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap text-[13px] tracking-kicker uppercase">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
