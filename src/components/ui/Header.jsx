import Styled from "styled-components";

export function Header({ toogleTheme }) {
  return (
    <Wrapper>
      <h1>A simple TicTacToe</h1>
      <ThemeButton onClick={toogleTheme}>Switch theme</ThemeButton>
    </Wrapper>
  );
}

const Wrapper = Styled.header`
    height: 80px;
    border-bottom: 1px solid;
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem
`;

const ThemeButton = Styled.button`
  background-color : ${(props) => props.theme.bgColor};
  color : ${(props) => props.theme.mainColor};
  padding: .5rem 1rem;
  border: 1px solid;
  border-radius : 3px;
  transition: all .3s ease;
  &:hover {
      border: 1px solid;
      background-color : ${(props) => props.theme.mainColor};
      color : ${(props) => props.theme.bgColor};
      border-radius : 3px;
      cursor: pointer;
  }
`;
