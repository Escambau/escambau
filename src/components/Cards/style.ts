import styled from "styled-components";

export const Card = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid var(--lightGrey);
  padding: 10px 20px;
  margin: 8px 0px;

  transition: 0.3s;
  :hover {
    width: 99%;
  }

  & > section {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .containerButtons {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    height: 70px;
    margin-right: 10px;

    .btnTrade {
      background-color: var(--green);
      padding: 10px;
      color: white;
      width: 100%;

      @media (min-width: 768px) {
        width: 150%;
      }
    }

    & > button {
      color: var(--blue);
      font-weight: 700;
    }
    .iconInfo {
      margin-right: 5px;
      font-size: 14px;
    }
    .infoPlus {
      display: flex;
      align-items: center;
      color: var(--blue);
      font-size: 11px;
      font-weight: 400;

      transition: 0.3s;

      :hover {
        color: var(--darkGrey);
        transition: 0.4s;
      }
    }
  }
  & > div {
    display: flex;
    align-items: center;

    & > img {
      height: 50px;
      margin-right: 10px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 70px;
      text-align: start;

      & > div {
        & > h4 {
          font-size: 12px;
          font-weight: 400;
          color: var(--blue);
        }
        & > h3 {
          font-size: 14px;
          font-family: "Montserrat";
        }
      }

      & > section {
        display: flex;
        align-items: center;
        & > p {
          font-size: 12px;
          margin-right: 5px;
        }
        & > span {
          font-size: 14px;
          color: var(--blue);
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 360px) {
    padding: 5px;
  }
`;
