export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" strokeOpacity=".45" />
      <path d="M9 27c4-5 9-5 13 0 4 5 9 5 13 0" strokeLinecap="round" />
      <path
        d="M13 19c4 4 12 4 18 0M31 19l5-3-1 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="font-display text-[20px] font-semibold tracking-tight">
      Kurnia<span className="text-red"> Seafood</span>
    </span>
  );
}
