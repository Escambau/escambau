import styled from "styled-components";
export const MainTag = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  .container {
    width: 90%;
    
    & > h2{
      font-size: 18px;
        font-weight: 700;
        color: var(--blue);
        font-family: "Montserrat";
        text-align: start;
        margin-bottom: 20px;
    }
  }
  .addProduct {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    & > button {
      background-color: var(--blue);
      padding: 5px 6px 2px 6px;
      font-size: 14px;
      font-weight: 400;
      color: white;
      transition: 0.3s;
      :hover {
        background-color: var(--greenOpacity);
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
        color: var(--blue);
        font-size: 14px;
        font-family: "Montserrat";
        font-weight: 600;
      }
      & > select {
        border: 1px solid var(--blue);
        border-radius: 8px;
        padding: 3px 3px;
        text-align: center;
        color: var(--blue);
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
    border: 1px solid var(--blue);
    border-radius: 8px;
    padding: 7px 30px;
    text-align: center;
    color: var(--blue);
    font-size: 11px;
    font-weight: 600;
    margin: 5px 5px;
    transition: 0.3s;
    :hover {
      background-color: var(--blue);
      color: white;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 70%;
    }
    .addProduct {
      & > h2 {
        font-size: 18px;
        font-weight: 700;
        color: var(--blue);
        font-family: "Montserrat";
      }
      & > button {
        background-color: var(--green);
        padding: 10px;
        /* padding: 7px 8px 4px 8px; */
        font-size: 13px;
        font-weight: 700;
        color: white;
        & > svg {
          font-size: 18px;
        }
      }
    }
  }
`;