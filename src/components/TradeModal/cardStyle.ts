import styled from "styled-components";

export const Card = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  padding: 10px 20px;
  margin: 8px 0px;
  cursor: pointer;
  transition: 0.3s;
  color: ${(props) => props.theme.colors.textGeneral};
  :hover {
    width: 89%;
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
      object-fit: cover;
      width: 100px;
      height: 100px;
      border-radius: 20px;
      margin-right: 15px;

      @media (max-width: 450px) {
        width: 70px;
        height: 70px;
      }
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
          color: ${(props) => props.theme.colors.blue};
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
          color: ${(props) => props.theme.colors.blue};
        }
      }
    }
  }
  .containerCheckbox {
    position: relative;
    right: 20px;
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    border-radius: 100%;
    width: 25px;
    height: 25px;

    @media (max-width: 450px) {
      right: 0px;
    }
  }

  .checkmarkTrue {
    position: absolute;
    top: 3px;
    left: 2px;
    color: green;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    .checkmark {
      top: 0;
      right: 30px;
    }
  }
  @media (min-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 360px) {
    padding: 5px;
  }
`;
