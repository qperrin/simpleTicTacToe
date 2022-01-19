export function Circle({ x, y, color }) {
  return (
    <circle
      cx={(x - 1) * 33 + 16.5}
      cy={(y - 1) * 33 + 16.5}
      r={13}
      stroke={color}
      fill="none"
    />
  );
}
