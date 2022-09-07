import styled from "styled-components";

export const Category = styled.div`
  display: flex;
  justify-content: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .searchResults {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 30px;

    h1 {
      margin-left: 30px;
      color: var(--blue);
    }
  }

  & > div {
    
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    
    & > h3 {
      color: var(--blue);
      font-size: 14px;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 5px 10px 0 0;
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
  }

  & > div {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
  }
  .btnAll {
    border: 1px solid var(--blue);
    border-radius: 8px;
    padding: 7px 30px;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    margin: 5px 5px;
    background-color: var(--blue);
    color: white;
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
      transition: 0.4s;
    }
  }
`;
