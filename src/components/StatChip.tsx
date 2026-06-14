interface StatChipProps {
  children: React.ReactNode;
  /** Optional accent color override (e.g. the element color). */
  color?: string;
}

export function StatChip({ children, color }: StatChipProps) {
  return (
    <span className="chip" style={color ? { borderColor: color, color } : undefined}>
      {children}
    </span>
  );
}
