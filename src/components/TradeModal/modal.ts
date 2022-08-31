import styled from "styled-components";

export const BackgroundGradiente = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--lightGreyBackground);
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 85%;
  max-width: 800px;
  height: 70vh;
  min-height: 450px;
  background-color: white;
  border-radius: 10px;

  & > button {
    position: absolute;
    bottom: 15px;
    background-color: var(--green);
    padding: 10px;
    width: 75%;
    max-width: 300px;
    color: white;
    transition: 0.3s;
    :hover {
      opacity: 0.8;
    }
  }

  & > div {
    position: relative;
    background-color: var(--blue);
    width: 100%;

    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    border-radius: 8px 8px 0px 0px;
    & > h3 {
      color: white;
      font-size: 12px;

      width: 100%;
      text-align: center;
      line-height: 15px;
    }
    & > svg {
      position: absolute;
      top: 0px;
      right: 0px;

      font-size: 20px;
      color: white;
      background-color: var(--darkGrey);
      padding: 3px 3px 3px 3px;
      border-radius: 100%;

      transition: 0.3s;
      :hover {
        font-size: 21px;
      }
    }
  }

  @media (min-width: 768px) {
    & > div {
      & > h3 {
        font-size: 14px;
      }
      & > svg {
        top: -12px;
        right: -12px;
        font-size: 22px;
        :hover {
          font-size: 23px;
        }
      }
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  padding: 10px 0px;
  height: 70%;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--lightGrey);
    border-radius: 5px;
  }
`;
