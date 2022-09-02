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
        color: var(--grey);
        font-size: 16px;
      }

      textarea {
        width: 100%;
        height: 15vh;
        border: none;
        border-bottom: 1px solid var(--lightGrey);
        outline: 0;
        color: var(--grey);
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto";
        resize: none;

        ::placeholder {
          align-self: flex-start;
          color: var(--lightGrey);
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
        border-bottom: 1px solid var(--lightGrey);
        outline: 0;
        color: var(--grey);
        font-size: 16px;

        p {
          color: var(--grey);
          font-size: 16px;
        }

        .input-price {
          border: none;
          width: 100%;
          height: 6vh;
          outline: 0;
          color: var(--grey);
          font-size: 16px;

          ::placeholder {
            color: var(--lightGrey);
            font-size: 16px;
            font-weight: 400;
          }
        }
      }

      .input-standard,
      select {
        width: 100%;
        height: 6vh;
        border-bottom: 1px solid var(--lightGrey);
        outline: 0;
        color: var(--grey);
        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto";

        ::placeholder {
          color: var(--lightGrey);
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
        background-color: var(--green);
        height: 40px;
        width: 120px;
        color: white;
        font-size: 16px;
        font-family: "Montserrat";
        font-weight: 900;
      }

      .cancel-button {
        background-color: var(--grey);
        height: 40px;
        width: 120px;
        color: white;
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
        gap: 1vh;

        .input-standard,
        select {
          height: 7vh;
          border: none;
          border-radius: 8px;
          outline: 0;
          color: var(--grey);
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
          background-color: white;
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

        .save-button,
        .cancel-button {
          width: 100%;

          :hover {
            opacity: 80%;
          }
        }
      }
    }
  }
`;
