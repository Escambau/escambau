import styled from "styled-components";

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

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
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
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
`

