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
  background-color: ${(props) => props.theme.colors.backgroundGeneral};
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
    background-color: ${(props) => props.theme.colors.green};
    padding: 10px;
    width: 300px;
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.colors.textButton};
    transition: 0.3s;

    @media (max-width: 768px) {
      width: 250px;
      font-weight: 600;
      font-size: 16px;
    }
    :hover {
      background-color: ${(props) => props.theme.colors.greenOpacity};
    }
  }

  .container {
    position: relative;
    background-color: ${(props) => props.theme.colors.divTituloModal};
    width: 100%;

    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    border-radius: 8px 8px 0px 0px;
    .title {
      color: ${(props) => props.theme.colors.textButton};
      font-size: 18px;
      margin-left: 15px;
      width: 100%;
      text-align: start;
      line-height: 15px;

      @media (max-width: 768px) {
        width: 80%;
        font-size: 16px;
      }
    }

    & > button {
      position: absolute;
      right: 25px;

      & > svg {
        font-size: 28px;
        color: ${(props) => props.theme.colors.textButton};
        background-color: ${(props) => props.theme.colors.darkGrey};
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
    min-height: 150px;
    color: ${(props) => props.theme.colors.textGeneral};
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
    background-color: ${(props) => props.theme.colors.lightGrey};
    border-radius: 5px;
  }
`;
