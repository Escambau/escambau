import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid var(--lightGrey);
  padding: 10px 20px;
  margin: 8px 0px;
  cursor: pointer;
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
    align-items: center;
    justify-content: space-evenly;
    height: 70px;
    margin-right: 10px;
    gap: 5px;
    .btnTrade {
      background-color: var(--green);
      padding: 10px;
      color: white;
      width: 180px;
      @media (min-width: 768px) {
        width: 180px;
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
      font-size: 14px;
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
    gap: 10px;
    & > img {
      object-fit: cover;
      width: 100px;
      min-width: 100px;
      height: 100px;
      border-radius: 20px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      /* height: 70px; */
      text-align: start;
      & > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
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
    padding: 20px;
  }
  @media (max-width: 360px) {
    padding: 5px;
  }
`;