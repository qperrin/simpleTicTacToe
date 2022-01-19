import { Header } from "./Header";
import Styled, { ThemeProvider } from "styled-components";
import Dark from "../theme/dark.json";
import Light from "../theme/light.json";
import { GlobalStyle } from "../theme/GlobalStyle";
import { useState } from "react";
import { Footer } from "./Footer";
export function Layout({ children }) {
  const [isLight, setIsLight] = useState(false);

  const handleThemeChange = () => {
    setIsLight(!isLight);
  };

  return (
    <ThemeProvider theme={isLight ? Light : Dark}>
      <div>
        <GlobalStyle />
        <Header toogleTheme={handleThemeChange} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

const Main = Styled.main`
  min-height: calc(100vh - 192px);
  width: 96%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top : 32px
`;
