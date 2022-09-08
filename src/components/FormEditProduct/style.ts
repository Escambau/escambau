import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .form-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5vh;

    span {
      color: ${(props) => props.theme.colors.redSpan};
      font-size: 14px;
      font-weight: 500;
    }

    .price-and-category {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 5vh;
    }

    fieldset {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.5vh;

      label {
        color: ${(props) => props.theme.colors.grey};
        font-size: 16px;
        font-weight: 800;
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

        p {
          color: ${(props) => props.theme.colors.textGeneral};
          font-size: 16px;
        }

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
    }

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2vw;

      .save-button {
        background-color: ${(props) => props.theme.colors.green};
        height: 40px;
        width: 120px;
        color: ${(props) => props.theme.colors.textButton};
        font-size: 16px;
        font-family: "Montserrat";
        font-weight: 900;
      }

      .cancel-button {
        background-color: ${(props) => props.theme.colors.grey};
        height: 40px;
        width: 120px;
        color: ${(props) => props.theme.colors.textButton};
        font-size: 16px;
        font-family: "Montserrat";
        font-weight: 900;
      }
    }
  }

  //Tablet
  @media (min-width: 600px) {
  }

  //Desktop
  @media (min-width: 768px) {
    width: 100%;

    .form-main {
      fieldset {
        gap: 1.5vh;

        .input-standard,
        select {
          height: 7vh;
          border: none;
          border-radius: 8px;
          outline: 0;
          font-size: 16px;
          padding: 0 1vw;
        }

        textarea {
          width: 100%;
          border-bottom: none;
          border-radius: 8px;
          padding: 1vw;
        }

        .price {
          border-radius: 8px;
          border: none;
          gap: 1vw;
          padding: 0 1vw;
          height: 7vh;
        }
      }

      .buttons {
        width: 100%;
        justify-content: space-between;
        gap: 3vw;
        padding: 0 1vw;

        .save-button {
          width: 100%;

          :hover {
            background-color: ${(props) => props.theme.colors.greenOpacity};
            transition: 0.4s;
          }
        }
        .cancel-button {
          width: 100%;

          :hover {
            background-color: ${(props) => props.theme.colors.redOpacity};
            transition: 0.4s;
          }
        }
      }
    }
  }
`;
