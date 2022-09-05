import styled from "styled-components";

export const ContainerAddProduct = styled.main`
  padding-bottom: 20px;

  .box-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
    gap: 20px;

    width: 100%;

    button {
      background-color: white;
      width: 150px;
      height: 35px;
      align-self: center;
      font-family: "Montserrat";
      color: var(--blue);
      font-size: 14px;
      font-weight: 900;
      border: 2px solid var(--blue);

      :hover {
        opacity: 80%;
      }
    }
    h2 {
      font-family: "Montserrat";
      color: var(--blue);
      font-size: 18px;
      font-weight: 900;
    }
  }
  section {
    padding-bottom: 20px;
  }
  .section-main {
    .apresenting-space {
      display: none;
    }

    .main-form {
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
          border-bottom: 1px solid var(--lightGrey);
          outline: 0;
          color: var(--grey);
          font-size: 16px;

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
      }

      div {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 20px;

        span {
          color: var(--redSpan);
          font-size: 14px;
          font-weight: 500;
        }
        label {
          color: var(--grey);
          font-size: 16px;
          font-weight: 800;
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
      }
      button {
        width: 200px;

        display: flex;
        justify-content: center;

        margin: 0 auto;
        padding: 15px 0;

        color: #fff;
        background-color: var(--green);

        font-size: 16px;
        font-weight: 1000;
        font-family: "Montserrat";

        :hover {
          background-color: var(--greenOpacity);
          transition: 0.4s;
        }
      }
    }
  }

  //Desktop
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    width: 70%;

    .box-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;

      button {
        font-size: 12px;
        font-weight: 700;

        color: #fff;
        background-color: var(--blue);
        border: none;

        padding-right: 20px;
        padding-left: 20px;
      }

      h2 {
        font-size: 24px;
      }
    }

    section {
      display: flex;
      flex-direction: row;
      background-color: var(--lightGreyBackground);
      border-radius: 8px;

      margin-top: 20px;

      .section-main {
        display: flex;
        margin: 0 auto;
        width: 90%;
        gap: 20px;
        padding: none;

        .apresenting-space {
          width: 50%;

          display: flex;
          flex-direction: column;

          padding-top: 60px;

          p {
            font-size: 26px;
            font-weight: 700;
            font-family: "Montserrat";

            line-height: 30px;
            text-align: start;

            color: var(--blue);
          }
          p + p {
            color: var(--green);
            padding-top: 20px;
          }

          figure {
            width: 100%;

            margin-top: 0 auto;
            padding-top: 50px;

            img {
              display: flex;
              justify-content: center;
              align-items: center;

              margin-right: 20px;

              max-width: 80%;
            }
          }
        }

        .main-form {
          width: 50%;

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

            ::-webkit-scrollbar {
              width: 12px;
            }

            ::-webkit-scrollbar-track {
              background: transparent;
            }

            ::-webkit-scrollbar-thumb {
              background-color: var(--blue);
              border-radius: 20px;
              border: 3px solid var(--blue);
            }
          }

          fieldset {
            gap: 1.5vh;

            .price {
              background-color: white;
              border-radius: 8px;
              border: none;
              gap: 1vw;
              padding: 0 1vw;
              height: 7vh;
            }

            span {
              font-size: 14px;
              color: var(--redSpan);
            }
          }
        }
      }
    }
  }
`;
