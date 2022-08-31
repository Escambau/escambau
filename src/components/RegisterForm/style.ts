import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 700;
    color: #4169e1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  width: 100vw;

  .endereco,
  .dadosPessoais {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
  }

  .inputSmall {
    width: 80px;
  }

  label {
    font-family: var(--font-family);
    color: var(--grey0);
    font-weight: 400;
    font-size: 0.8rem;
  }

  input {
    color: var(--grey);
  }

  input::placeholder {
    color: var(--lightGrayBackground);
    font-weight: 400;
    font-size: 0.7rem;
    padding: 0 5px;
  }
`;
