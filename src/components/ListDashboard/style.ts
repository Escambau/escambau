import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 65vh;
  height: auto;
  padding: 10px 10px;
  overflow-y: scroll;
  height: 100vh;

  ::-webkit-scrollbar-track {
    border: 5px solid white;
    background-color: #b2bec3;
    opacity: 0.5;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #dfe6e9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 5px;
  }
`;
