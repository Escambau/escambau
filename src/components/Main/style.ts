import styled from "styled-components";
export const MainTag = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  .container {
    width: 90%;

    & > h2 {
      font-size: 18px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.blue};
      font-family: "Montserrat";
      text-align: start;
      margin-bottom: 20px;
    }

    h3 {
      margin-bottom: 8px;
    }
  }
  .addProduct {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    gap: 8px;

    & > h2 {
      font-size: 18px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.blue};
      font-family: "Montserrat";
      text-align: start;
    }
    & > button {
      background-color: ${(props) => props.theme.colors.green};
      padding: 10px;
      font-size: 13px;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textButton};
      transition: 0.3s;
      :hover {
        background-color: ${(props) => props.theme.colors.greenOpacity};
      }
      & > svg {
        font-size: 18px;
      }
    }
  }
  .listContainer {
    margin-top: 20px;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      & > h3 {
        color: ${(props) => props.theme.colors.blue};
        font-size: 14px;
        font-family: "Montserrat";
        font-weight: 600;
      }
      & > select {
        border: 1px solid ${(props) => props.theme.colors.blue};
        border-radius: 8px;
        padding: 3px 3px;
        text-align: center;
        color: ${(props) => props.theme.colors.blue};
        font-size: 12px;
        font-weight: 500;
      }
      & > div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
      }
    }
  }
  .btnsCategory {
    border: 1px solid ${(props) => props.theme.colors.blue};
    border-radius: 8px;
    padding: 7px 30px;
    text-align: center;
    color: ${(props) => props.theme.colors.blue};
    font-size: 11px;
    font-weight: 600;
    margin: 5px 5px;
    transition: 0.3s;
    :hover {
      background-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.textButton};
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 70%;
    }
    .addProduct {
      flex-direction: row;
      gap: 0;

      & > h2 {
        font-size: 18px;
        font-weight: 700;
        color: ${(props) => props.theme.colors.blue};
        font-family: "Montserrat";
      }
      & > button {
        background-color: ${(props) => props.theme.colors.green};
        padding: 10px 30px;
        font-size: 13px;
        font-weight: 700;
        color: ${(props) => props.theme.colors.textButton};
        & > svg {
          font-size: 18px;
        }
      }
    }
  }
`;
