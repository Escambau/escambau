import styled from "styled-components";

export const FormAdd = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 40px;

  width: 90%;

  fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1vh;

    .price {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 2vw;
      height: 6vh;
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
      outline: 0;
      font-size: 16px;
      background-color: ${(props) => props.theme.colors.backgroundInput};

      .input-price {
        border: none;
        width: 100%;
        height: 6vh;
        outline: 0;

        font-size: 16px;

        ::placeholder {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      color: ${(props) => props.theme.colors.redSpan};
      font-size: 14px;
      font-weight: 500;

      margin-top: 5px;
    }
    label {
      color: ${(props) => props.theme.colors.grey};
      font-size: 16px;
      font-weight: 800;

      margin-bottom: 20px;
      margin-top: 20px;
    }
    .input-standard,
    select {
      width: 100%;
      height: 6vh;
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
      outline: 0;
      font-size: 16px;
      font-weight: 400;
      font-family: "Roboto";

      ::placeholder {
        font-size: 16px;
        font-weight: 400;
      }
    }

    textarea {
      width: 100%;
      height: 15vh;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
      outline: 0;
      font-size: 16px;
      font-weight: 400;
      font-family: "Roboto";
      resize: none;

      ::placeholder {
        align-self: flex-start;
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto";
      }
    }
  }
  button {
    width: 200px;

    display: flex;
    justify-content: center;

    margin: 0 auto;
    padding: 15px 0;

    color: ${(props) => props.theme.colors.textButton};
    background-color: ${(props) => props.theme.colors.green};

    font-size: 16px;
    font-weight: 1000;
    font-family: "Montserrat";

    :hover {
      background-color: ${(props) => props.theme.colors.greenOpacity};
      transition: 0.4s;
    }
  }
  @media (min-width: 768px) {
    width: 50%;

    div {
      span {
        font-size: 14px;
        color: ${(props) => props.theme.colors.redSpan};
      }

      .input-standard,
      select {
        height: 7vh;
        border-radius: 8px;
        outline: 0;
        font-size: 16px;
        padding: 0 1vw;
        border-bottom: none;
        border: none;
      }

      textarea {
        width: 100%;
        border-bottom: none;
        border: none;
        border-radius: 8px;
        padding: 1vw;

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${(props) => props.theme.colors.blue};
          border-radius: 20px;
          border: 3px solid ${(props) => props.theme.colors.blue};
        }
      }

      fieldset {
        gap: 1.5vh;

        .price {
          border-radius: 8px;
          border: none;
          gap: 1vw;
          padding: 0 1vw;
          height: 7vh;
        }

        span {
          font-size: 14px;
          color: ${(props) => props.theme.colors.redSpan};
        }
      }
    }
  }
`;
