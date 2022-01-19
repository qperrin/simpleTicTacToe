export function Cross({ x, y, color }) {
  const gap = 4;
  return (
    <path
      d={`M${33 * (x - 1) + gap} ${(y - 1) * 33 + gap} L${x * 33 - gap} ${
        33 * y - gap
      } M${x * 33 - gap} ${33 * (y - 1) + gap} L ${(x - 1) * 33 + gap} ${
        y * 33 - gap
      }  `}
      stroke={color}
    />
  );
}
