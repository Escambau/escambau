import styled from "styled-components";
import "animate.css";

export const ModalLogin = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "Montserrat";
  z-index: 10;

  svg {
    color: ${(props) => props.theme.colors.textGeneral};
  }

  .box-login {
    background-color: ${(props) => props.theme.colors.backgroundGeneral};
  }

  h2 {
    color: #4169e1;
    font-family: "Montserrat";
    font-weight: 700;
    margin-bottom: 20px;
  }
  .btn-exit {
    width: 90%;
    display: flex;
    justify-content: end;

    button {
      width: 23px;
      height: 23px;

      font-size: 16px;
      font-family: "Montserrat";
      font-weight: 700;

      background-color: ${(props) => props.theme.colors.darkGrey};
      color: ${(props) => props.theme.colors.textButton};

      border-radius: 50%;

      margin-top: 10px;

      :hover {
        opacity: 80%;
      }
    }
  }

  .box-login {
    max-width: 310px;
    width: 100%;
    max-height: 400px;
    height: 100%;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    ${(props) => props.theme.colors.backgroundGeneral};
    border: none;
    border-radius: 10px;

    animation: fadeIn 0.5s;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 15px;

      width: 100%;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        gap: 10px;

        line-height: 5px;

        div {
          display: flex;
          align-items: center;
          flex-direction: row;

          background-color: transparent;

          width: 100%;

          border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};

          padding-right: 10px;

          input {
            border: none;
          }
        }

        label {
          color: ${(props) => props.theme.colors.grey};
          font-family: "Montserrat";
        }

        input {
          font-family: "MontSerrat";

          width: 100%;

          padding: 8px 0 8px 8px;

          font-size: 14px;

          border: none;
          border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};

          background-color: transparent;

          outline: 0;

          ::placeholder {
            color: ${(props) => props.theme.colors.placeholder};
          }
        }
        button {
          border: none;
          background-color: transparent;
        }
        span {
          font-size: 10px;
          font-weight: 700;
          color: ${(props) => props.theme.colors.redSpan};
        }
      }

      .enter-btn {
        width: 80%;

        margin-top: 20px;
        color: ${(props) => props.theme.colors.textButton};
        background-color: ${(props) => props.theme.colors.green};

        padding: 12px 0;

        font-size: 16px;
        font-weight: 600;

        border-radius: 5px;
        border: none;

        font-family: "Montserrat";

        :hover {
          background-color: ${(props) => props.theme.colors.greenOpacity};
          transition: 0.4s;
        }
      }
    }

    .box-to-register {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 80%;

      margin: 0 auto;
      padding-bottom: 20px;

      h3 {
        color: ${(props) => props.theme.colors.blue};
        font-size: 14px;
        font-family: "Montserrat";

        padding: 20px;
      }

      button {
        width: 100%;

        color: ${(props) => props.theme.colors.textButton};
        background-color: ${(props) => props.theme.colors.grey};

        border-radius: 5px;
        border: none;

        padding: 12px 0;

        font-size: 16px;
        font-weight: 600;
        font-family: "Montserrat";

        :hover {
          background-color: ${(props) => props.theme.colors.lightGrey};
          transition: 0.4s;
        }
      }
    }
  }
`;
