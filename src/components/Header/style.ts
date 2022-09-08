import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props.theme.colors.headerColor};
  height: 110px;
  width: 100vw;
  padding: 10px 10px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    padding: 0;

    button {
      & > h1 {
        color: ${(props) => props.theme.colors.logoColor};
        font-family: "Montserrat";
        font-size: 18px;
        font-weight: 700;
      }
    }
  }

  .notification-perfil {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2vh;

    .toggle-moon {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1vh;

      svg {
        color: ${(props) => props.theme.colors.textGeneral};
      }
    }
  }

  .notification {
    color: ${(props) => props.theme.colors.textButton};
    font-size: 20px;

    transition: 0.3s;
    :hover {
      font-size: 22px;
    }
  }
  .perfil {
    color: ${(props) => props.theme.colors.green};
    font-size: 32px;
    background: ${(props) => props.theme.colors.lightGreen};
    padding: 5px;
    border-radius: 100%;

    transition: 0.3s;
    :hover {
      padding: 6px;
    }
  }
  .userName {
    transition: 0.3s;
    :hover {
      font-weight: 700;
      color: ${(props) => props.theme.colors.greenOpacity};
    }
  }

  .searchBar {
    position: relative;
    width: 100%;
    max-width: 450px;
    & > input {
      width: 100%;
      height: 40px;

      border-radius: 8px;
      font-size: 14px;

      outline: none;

      padding-left: 15px;
    }
    & > button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .magnifyGlass {
      font-size: 18px;
      color: ${(props) => props.theme.colors.icons};

      transition: 0.3s;
      :hover {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 600px) {
    position: relative;
    height: 60px;
    padding: 0px 0px;
    justify-content: center;

    .container {
      margin: 0px;
      width: 80%;
    }

    .searchBar {
      position: absolute;
      width: 25%;
      min-width: 215px;

      & > input {
        width: 100%;
        max-width: 450px;
        height: 40px;

        border-radius: 8px;
        font-size: 14px;
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 70%;
    }

    .notification-perfil {
      width: 160px;
      & > button {
        display: flex;
        align-items: center;

        & > h3 {
          font-size: 14px;
          color: ${(props) => props.theme.colors.textButton};
          font-weight: 400;

          overflow: hidden;
          white-space: nowrap;
          max-width: 150px;
        }

        & > svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
