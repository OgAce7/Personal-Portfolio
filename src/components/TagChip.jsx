export default function TagChip({ children }) {
  return (
    <span className="font-mono text-[11px] tracking-wide uppercase text-ink-muted bg-base-elevated/80 border border-base-border rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}
