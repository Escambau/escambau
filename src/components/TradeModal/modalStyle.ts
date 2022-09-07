import styled from "styled-components";

export const BackgroundGradiente = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  max-width: 700px;
  max-height: 450px;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
  .containerBtnTrade {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
  }
  .btnTrade {
    background-color: var(--green);
    padding: 10px;
    width: 300px;
    font-weight: 600;
    font-size: 18px;
    color: white;
    transition: 0.3s;

    @media (max-width: 768px) {
      width: 250px;
      font-weight: 600;
      font-size: 16px;
    }
    :hover {
      background-color: var(--greenOpacity);
    }
  }

  .container {
    position: relative;
    background-color: var(--blue);
    width: 100%;

    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    border-radius: 8px 8px 0px 0px;
    .title {
      color: white;
      font-size: 18px;

      width: 100%;
      text-align: start;
      line-height: 15px;
    }

    & > button {
      position: absolute;
      right: 25px;

      & > svg {
        font-size: 28px;
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
  }
  .emptyList {
    font-size: 16px;
    font-weight: 400;
    padding: 20px;
  }

  @media (min-width: 768px) {
    & > div {
      & > h3 {
        font-size: 14px;
      }
      & > button {
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
  max-height: 320px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--lightGrey);
    border-radius: 5px;
  }
`;
