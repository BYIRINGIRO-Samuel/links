export function ThornTick({ size = 18 }: { size?: number }) {
  const spikes = 14;
  const outer = 10;
  const inner = 7.6;
  const cx = 11;
  const cy = 11;
  const points: string[] = [];

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    const radius = i % 2 === 0 ? outer : inner;
    points.push(
      `${(cx + Math.cos(angle) * radius).toFixed(2)},${(cy + Math.sin(angle) * radius).toFixed(2)}`,
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <polygon points={points.join(" ")} fill="#22c55e" />
      <path
        d="M7.2 11.1l2.3 2.3 5-5.2"
        stroke="#0a0a0a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
