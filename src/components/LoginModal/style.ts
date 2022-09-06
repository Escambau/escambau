import styled from "styled-components";

export const ModalLogin = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "Montserrat";

  h2 {
    color: #4169e1;
    font-family: "Montserrat";
    font-weight: 700;
  }

  .box-login {
    max-width: 310px;
    width: 100%;
    max-height: 400px;
    height: 100%;

    padding-top: 30px;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    background-color: white;
    border: none;
    border-radius: 10px;

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

          border-bottom: 1px solid #d9d9d9;

          padding-right: 10px;

          input {
            border: none;
          }
        }

        label {
          color: var(--grey);
          font-family: "Montserrat";
        }

        input {
          font-family: "MontSerrat";

          width: 100%;

          padding: 8px 0 8px 8px;

          font-size: 14px;

          border: none;
          border-bottom: 1px solid #d9d9d9;

          background-color: transparent;

          outline: 0;

          ::placeholder {
            color: #d9d9d9;
          }
        }
        button {
          border: none;
          background-color: transparent;
        }
        span {
          font-size: 10px;
          color: var(--redSpan);
        }
      }

      .enter-btn {
        width: 80%;

        margin-top: 20px;
        color: white;
        background-color: var(--green);

        padding: 12px 0;

        font-size: 16px;
        font-weight: 600;

        border-radius: 5px;
        border: none;

        font-family: "Montserrat";

        :hover {
          background-color: var(--greenOpacity);
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
        color: var(--blue);
        font-size: 14px;
        font-family: "Montserrat";

        padding-bottom: 20px;
      }

      button {
        width: 100%;

        color: white;
        background-color: var(--grey);

        border-radius: 5px;
        border: none;

        padding: 12px 0;

        font-size: 16px;
        font-weight: 600;
        font-family: "Montserrat";

        :hover {
          background-color: var(--lightGrey);
          transition: 0.4s;
        }
      }
    }
  }
`;
