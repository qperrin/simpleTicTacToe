import Styled from "styled-components";
import { useState } from "react";
import { Cross } from "./cross";
import { Circle } from "./ui/Circle";

export function Game() {
  const [draw, setDraw] = useState([]);
  const [cross, setCross] = useState(false);
  const handleClick = (e) => {
    if (draw.length < 9) {
      const parent = e.target.getBoundingClientRect();
      const x = e.clientX - parent.x;
      const y = e.clientY - parent.y;
      const slotX = x < 133 ? 1 : x < 266 ? 2 : 3;
      const slotY = y < 133 ? 1 : y < 266 ? 2 : 3;
      const color = cross ? "#44cf64" : "#6885d6";
      setDraw([...draw, { cross: cross, x: slotX, y: slotY, color: color }]);
      setCross(!cross);
    } else {
      return null;
    }
  };
  return (
    <Wrapper>
      <svg onPointerDown={handleClick} viewBox="0 0 99 99">
        <path d="M0 33 L 100 33" stroke="#000" />
        <path d="M0 66 L 100 66" stroke="#000" />
        <path d="M33 0 L 33 100" stroke="#000" />
        <path d="M66 0 L 66 100" stroke="#000" />
        {draw.map((item) => {
          if (item.cross) {
            return (
              <Cross
                x={item.x}
                y={item.y}
                color={item.color}
                key={Math.random()}
              />
            );
          }
          return (
            <Circle
              x={item.x}
              y={item.y}
              color={item.color}
              key={Math.random()}
            />
          );
        })}
      </svg>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
svg {
  height: 50vh;
  background: white;
  margin: 0 auto;
  aspect-ratio: 1/1;
      height: 400px;
    width: 400px;
  @media (max-width: 600px) {

    margin: o auto;
  }}
`;
