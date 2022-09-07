import styled from "styled-components";

interface Props {
  isLogged: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3vh;
  gap: 5vh;

  .left-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 4vh;

    .product-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2vh;

      small {
        color: var(--blue);
        font-size: 14px;
        font-weight: 600;
      }

      h3 {
        font-size: 16px;
        font-family: "Montserrat";
        color: var(--darkGrey);
        font-weight: 900;
      }

      img {
        max-width: 100vw;
        max-height: 230px;
        align-self: center;
        object-fit: contain;
      }
    }

    .user-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2vh;

      .user-info-name-address {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5vh;

        .user-info-name {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1vh;
        }

        h3 {
          font-size: 16px;
          color: var(--blue);
          font-weight: 900;
        }

        p {
          font-size: 14px;
          color: var(--grey);
          font-weight: 600;
        }
      }

      .user-info-price-preferences {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1vh;
        .price {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1vh;
        }
        p {
          font-size: 14px;
          color: var(--darkGrey);
        }
        span {
          font-size: 16px;
          color: var(--blue);
          font-weight: 900;
        }
      }
    }
  }

  .right-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4vh;

    .product-description {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1vh;

      h3 {
        font-size: 16px;
        color: var(--blue);
        font-weight: 900;
      }

      p {
        text-align: left;
        font-size: 14px;
        color: var(--darkGrey);
      }
    }

    .btn-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;

      button {
        width: 70%;
        background-color: var(--blue);
        font-size: 18px;
        font-family: "Montserrat";
        color: white;
        font-weight: 900;
        height: 40px;

        :hover {
          opacity: 80%;
        }
      }
    }
  }

  //Desktop
  @media (min-width: 768px) {
    padding: 3vh 15vw;
    gap: 4vh;

    .left-wrapper {
      flex-direction: row;
      justify-content: space-between;
      max-height: 50vw;

      .product-info {
        flex: 6;

        img {
          width: 100%;
          max-height: 350px;
        }
      }

      .user-info {
        flex: 4;
        gap: 3vh;
        background-color: var(--lightGreyBackground);
        border: 0.1px solid var(--lightGrey);
        border-radius: 5px;
        padding: 6vh 0;
        max-height: 230px;

        .user-info-name-address {
          .user-info-name {
            flex-direction: column;
          }
        }
      }
    }

    .right-wrapper {
      flex-direction: row;

      .product-description {
        flex: 6;
      }

      .btn-wrapper {
        align-self: flex-start;
        flex: 4;
      }
    }
  }
`;
