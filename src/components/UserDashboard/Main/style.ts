import styled from "styled-components";

export const MainTag = styled.main`
  height: 100vh;

  align-items: center;

  .container {
    width: 100%;
    height: 100vh;

    align-items: center;

    background-color: var(--white);

    padding-top: 20px;
  }

  .addProduct {
    width: 90%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;

    & > button {
      background-color: var(--grey);
      border: none;
      padding: 7px;
      padding-bottom: 4px;

      :hover {
        background-color: var(--mediumGrey);
      }
      & > svg {
        color: black;
        font-size: 22px;
      }
    }
  }

  .listContainer {
    width: 90%;

    & > h3 {
      margin-bottom: 15px;
    }

    & > div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 20px;
    }
  }

  .btnsCategory {
    background-color: var(--lightGrey);
    color: var(--black);
    padding: 2px 25px;
    margin-bottom: 5px;

    :hover{
      background-color: var(--mediumBlue);
      color: white;
    }
  }

  @media (min-width: 764px) {
    .container {
      width: 70%;
    }
    .addProduct {
      width: 90%;
    }
    .listContainer {
    & > div {
      width: 100%;

      flex-direction: column;
      align-items: flex-start;

      margin-bottom: 20px;

      & > h3{
        text-align: start;
      }

      & > div{
        flex-direction: row;
        flex-wrap: wrap;

        & > button{
          margin: 5px;
        }
      }
    }
  }
  }
`;
