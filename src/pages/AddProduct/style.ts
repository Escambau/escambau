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
      }
    }
  }
`;
