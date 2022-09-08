import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  padding: 1.5rem;
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 600px) {
    align-items: center;
  }

  h3 {
    font-family: "Montserrat";
    font-size: 19px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.blue};
  }
  .infoInicial {
    display: none;

    img {
      max-width: 100%;
    }

    @media (min-width: 600px) {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 5rem;

      height: 90vh;
      width: 50%;

      .texto {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        h2 {
          font-family: "Montserrat";
          font-weight: 700;
          color: ${(props) => props.theme.colors.blue};
          font-size: 1.3rem;
          text-align: left;
          line-height: 35px;
        }

        p {
          text-align: left;
          font-family: "Montserrat";
          font-weight: 700;
          color: ${(props) => props.theme.colors.green};
          font-size: 1rem;
        }

        img {
          width: 800px;
        }
      }
    }

    @media (min-width: 768px) {
      align-items: flex-start;
      justify-content: flex-end;
      gap: 5rem;
      .texto {
        h2 {
          font-family: "Montserrat";
          font-weight: 800;
          color: ${(props) => props.theme.colors.blue};
          font-size: 1.75rem;
          text-align: left;
          line-height: 2.5rem;
        }

        p {
          text-align: left;
          font-family: "Montserrat";
          font-weight: 700;
          color: ${(props) => props.theme.colors.green};
          font-size: 1.4rem;
        }
      }
    }
  }

  .background {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 60px;
    ${(props) => props.theme.colors.backgroundGeneral};

    @media (min-width: 600px) {
      width: 73%;
      background-color: ${(props) => props.theme.colors.lightGreyBackground};
      flex-direction: row;
      align-items: center;
      gap: 5rem;
      padding: 0 40px;

      border-radius: 8px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  width: 100%;

  .form-field {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;

    @media (min-width: 600px) {
      gap: 10px;
    }
  }

  .endereco,
  .dadosPessoais {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .endereco-child-cidade,
  .endereco-child-estado,
  .dados-child-cpf,
  .dados-child-idade {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 600px) {
      gap: 4px;
    }
  }

  label {
    color: ${(props) => props.theme.colors.grey};
    font-size: 16px;
    font-weight: 800;
  }

  input {
    width: 100%;
    height: 6vh;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
    color: ${(props) => props.theme.colors.grey};
    outline: 0;
    padding: 0 1vh;
    font-size: 16px;
    font-weight: 400;
    font-family: "Roboto";

    @media (min-width: 600px) {
      border: none;
      height: 7vh;
      border-radius: 8px;
    }
  }

  input::placeholder {
    align-self: flex-start;
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 16px;
    font-weight: 400;
    font-family: "Roboto";

    @media (min-width: 600px) {
      padding: 0 0.5rem;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  select {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.lightGrey};
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
    height: 2rem;
    width: 100%;
    cursor: pointer;
    outline: 0;

    @media (min-width: 600px) {
      border: none;
      height: 2.5rem;
      border-radius: 8px;
    }
  }
  select option {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.grey};
    width: 100%;
    cursor: pointer;
  }

  button {
    background-color: ${(props) => props.theme.colors.green};
    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.textButton};

    width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    transition: 0.4s;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.greenOpacity};
    transition: 0.4s;
  }

  @media (min-width: 600px) {
    width: 50%;
    padding: 2rem 0;
  }
  .error {
    padding-top: 0.4rem;
    padding-left: 0.1rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.redSpan};
  }
`;
