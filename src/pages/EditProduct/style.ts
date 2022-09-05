import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3vh;
  padding: 4vh;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;

    .profile-button {
      background-color: white;
      width: 150px;
      height: 35px;
      align-self: center;
      font-family: "Montserrat";
      color: var(--blue);
      font-size: 14px;
      font-weight: 900;
      border: 2px solid var(--blue);
    }

    h2 {
      font-family: "Montserrat";
      color: var(--blue);
      font-size: 18px;
      font-weight: 900;
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5vh;

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;

      h3 {
        font-family: "Montserrat";
        color: var(--darkGrey);
        font-size: 16px;
        font-weight: 900;
      }

      img {
        display: none;
      }
    }
  }

  @media (min-width: 600px) {
  }

  @media (min-width: 768px) {
    align-items: center;
    gap: 7vh;
    padding: 14vh 14vw;

    section {
      flex-direction: row;

      .profile-button {
        position: absolute;
        left: 14vw;
        background-color: var(--blue);
        color: white;
        font-size: 12px;
      }

      h2 {
        font-size: 24px;
      }
    }

    main {
      background-color: var(--lightGreyBackground);
      padding: 10vh 4vw;
      border-radius: 10px;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-start;
      gap: 5vw;

      div {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 7vh;

        h3 {
          font-weight: 900;
          font-size: 20px;
        }

        img {
          display: block;
          max-width: 90%;
        }
      }
    }
  }
`;
