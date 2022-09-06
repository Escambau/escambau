import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: var(--blue);

  height: 110px;

  padding: 10px 0px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;

    margin-bottom: 0px;
    & > button{
      & > h1 {
        color: white;
        font-family: "Montserrat";
        font-size: 18px;
        font-weight: 900;
      }
    }

    .btnLogin {
      background-color: var(--green);
      padding: 8px 30px;
      color: white;
      font-family: "Montserrat";
      font-size: 12px;
      font-weight: 900;
      
      :hover {
        background-color: var(--greenOpacity);
        transition: 0.4s;
      }
    }

  }

  .searchBar {
    position: relative;
    width: 90%;
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
      color: var(--blue);

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
          color: white;
          font-weight: 400;
        }

        & > svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
