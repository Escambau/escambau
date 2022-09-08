import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 15;

  @media (min-width: 600px) {
  }

  @media (min-width: 768px) {
  }
`;

export const Box = styled.div`
  position: relative;
  width: 70vw;
  height: 40vh;
  background: ${(props) => props.theme.colors.textButton};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  .x {
    background-color: ${(props) => props.theme.colors.darkGrey};
    color: ${(props) => props.theme.colors.textButton};
    border-radius: 100%;
    font-size: 22px;
    padding: 3px 3px 3px 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${(props) => props.theme.colors.darkGrey};
      transition: 0.3s;
      :hover {
        font-size: 19px;
      }
    }
  }

  div {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 60px;
    background-color: ${(props) => props.theme.colors.divTituloModal};

    p {
      width: 70%;
      color: ${(props) => props.theme.colors.textButton};
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 15px;
      text-align: left;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 180px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.backgroundGeneral};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .confirm {
      background-color: ${(props) => props.theme.colors.green};
      width: 160px;
      height: 40px;
      color: ${(props) => props.theme.colors.textButton};
      font-family: "Montserrat";
      font-weight: 900;
      font-size: 16px;

      &:hover {
        background-color: ${(props) => props.theme.colors.greenOpacity};
        transition: 0.4s;
      }
    }

    .cancel {
      background-color: ${(props) => props.theme.colors.red};
      width: 160px;
      height: 40px;
      color: ${(props) => props.theme.colors.textButton};
      font-family: "Montserrat";
      font-weight: 900;
      font-size: 16px;

      &:hover {
        background-color: ${(props) => props.theme.colors.redOpacity};
        transition: 0.4s;
      }
    }
  }

  //Tablet
  @media (min-width: 600px) {
    width: 45vw;
    height: 20vh;

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 180px;
      ${(props) => props.theme.colors.backgroundGeneral};
    }
  }

  //Desktop
  @media (min-width: 768px) {
    width: 50vw;
    height: 30vh;

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 180px;
      background-color: ${(props) => props.theme.colors.backgroundGeneral};
    }
  }
`;
