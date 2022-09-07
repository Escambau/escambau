import styled from "styled-components";

interface Props {
  isLogged: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2vh;

      small {
        color: var(--blue);
        font-size: 14px;
        font-weight: 400;
      }

      h3 {
        font-size: 16px;
        font-family: "Montserrat";
        color: var(--darkGrey);
        font-weight: 700;
      }

      img {
        max-width: 100vw;
        max-height: 230px;
        align-self: flex-start;
        object-fit: contain;
        border-radius: 5px;
      }
    }

    .user-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4vh;

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
          font-weight: 700;
        }

        p {
          font-size: 14px;
          color: var(--grey);
          font-weight: 400;
        }
        .city {
          font-size: 16px;
          font-weight: 500;
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
      max-width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 0;

      & > button {
        width: 100%;
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
    .btn-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .edit-delete {
      width: 45%;
      font-size: 11px;
      font-weight: 600;
      color: white;
      padding: 10px 20px;
      transition: 0.3s;
    }
    .edit {
      color: var(--grey);
      border: 1px solid var(--grey);
      :hover {
        background-color: grey;
        color: white;
      }
    }
    .delete {
      color: var(--orange);
      border: 1px solid var(--orange);
      background-color: white;
      :hover {
        background-color: var(--orange);
        color: white;
      }
    }
  }

  //Desktop
  @media (min-width: 800px) {
    padding: 3vh 15vw;
    gap: 4vh;

    .left-wrapper {
      flex-direction: row;
      justify-content: space-between;
      max-height: 50vw;

      .product-info {
        flex: 6;

        img {
          align-items: flex-start;
          max-height: 300px;
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
            flex-direction: row;
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

        width: 40%;

        display: flex;
        flex-direction: row;

        gap: 20px;

        .edit-delete {
          width: 150px;

          :hover {
            opacity: 80%;
          }
        }
      }
    }
  }

  @media (min-width: 550px) {
    .left-wrapper {
      flex-direction: row;
      justify-content: space-between;
    }
    .right-wrapper {
      flex-direction: row;
    }
    .user-info {
      max-width: 300px;
      width: initial;
      flex: 4;
      gap: 3vh;
      background-color: var(--lightGreyBackground);
      border: 0.1px solid var(--lightGrey);
      border-radius: 5px;
      padding: 6vh 0;
      max-height: 230px;
    }
    .user-info-name {
      width: initial;
    }
  }
`;
