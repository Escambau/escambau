import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10000;

  background-color: transparent;
  cursor: auto;
`

export const Container = styled.div`
    width: 200px;
    height: 90px;

    position: absolute;
    top: 60px;
    right: 10%;

    background-color: var(--darkGrey);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    & > button{
      width: 80%;
      font-size: 11px;
      font-weight: 600;
      color: white;

      padding: 8px 20px;

      transition: 0.3s;
    }
    .profile {
      margin-bottom: 5px;
      background-color: var(--green);
      border: 1px solid var(--green);
    }
    .exit{
        margin-bottom: 5px;
        background-color: var(--grey);
        border: 1px solid var(--grey);
    }
`