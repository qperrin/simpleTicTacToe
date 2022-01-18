import Styled from "styled-components";

export function Footer() {
  return <Wrapper>Developer avec ❤️ par Quentin Perrin © 2022</Wrapper>;
}

const Wrapper = Styled.footer`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
