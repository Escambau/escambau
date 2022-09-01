import styled from "styled-components";

export const Card = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border: 1px solid var(--lightGrey);
  padding: 15px 5px;
  margin: 8px 0px;

  transition: 0.3s;
  :hover {
    width: 91%;
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

  & > div {
    display: flex;
    align-items: center;

    & > img {
      height: 50px;
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
  .containerCheckbox {
    position: relative;
    right: 20px;
    border: 1px solid var(--lightGrey);
    border-radius: 100%;
    width: 25px;
    height: 25px;
  }

  .checkmarkTrue {
    position: absolute;
    top: 3px;
    left: 2px;
    color: green;
    font-size: 20px;
  }
  .checkmarkFalse {
  }

  @media (min-width: 768px) {
    .checkmark {
      top: 0;
      right: 30px;
    }
  }
`;
