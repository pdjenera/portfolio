export default function StatusDot({
  animate = false,
  size = 9,
}: {
  animate?: boolean;
  size?: number;
}) {
  return (
    <span
      className="rounded-full bg-accent inline-block shrink-0"
      style={{
        width: size,
        height: size,
        boxShadow: "0 0 0 3px color-mix(in srgb, #2e7d52 22%, transparent)",
        animation: animate ? "blink 1.6s steps(1) infinite" : undefined,
      }}
    />
  );
}
