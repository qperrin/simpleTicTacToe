import Styled from "styled-components";
import { useState } from "react";

export function GameMode() {
  const [gameMode, setGameMode] = useState(null);
  const handleGameModeChange = (e) => {
    e.preventDefault();
    setGameMode({ ...gameMode, mode: "local" });
  };

  return (
    <Wrapper>
      {gameMode === null && (
        <>
          <Title>Which game mode do you want ?</Title>
          <ButtonWrapper>
            <button onClick={handleGameModeChange}>Local</button>
            <button disabled={true}>Online</button>
          </ButtonWrapper>
        </>
      )}

    </Wrapper>
  );
}

const Wrapper = Styled.div`
    width: 100%;
    text-align: center;
`;

const Title = Styled.h2`
    margin-bottom: 32px;
`;

const ButtonWrapper = Styled.div`
    button {
            font-size: 1.2rem;
    }
    > * {
     &:first-child, &:first-child:hover {
        border-right : none;
        border-radius: 3px 0 0 3px;
       }
     &:last-child, &:last-child:hover {
     	border-left: none;
     	border-radius: 0 3px 3px 0;
     }
    }
    
`;
