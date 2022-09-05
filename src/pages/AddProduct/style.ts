import styled from "styled-components";

export const ContainerAddProduct = styled.main`
  padding-bottom: 20px;

  .box-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
    gap: 20px;
    
    width: 100%;

    button {
      color: var(--blue);
      border: 2px solid var(--blue);
      background-color: #fff;

      font-size: 16px;
      font-family: "Montserrat";
      font-weight: 700;

      padding: 10px 0;

      width: 200px;

      :hover {
        opacity: 80%;
      }
    }
    h2 {
      font-family: "Montserrat";
      font-size: 20px;
      font-weight: 1000;
      
      color: var(--blue);
    }
  }
  section {
    padding-bottom: 20px;
  }
  .section-main {
    .apresenting-space {
      display: none;
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 40px;

      width: 90%;

      div {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 20px;

        span {
          color: red;
          font-size: 10px;
          margin-bottom: 20px;
        }
        label {
          color: var(--grey);
          font-weight: 800;
        }
        input {
          width: 100%;
          border-bottom: 1px solid var(--grey);
          color: var(--grey);

          padding-left: 10px;
          outline: 0;

          ::placeholder {
            color: var(--lightGrey);
          }
        }
        textarea {
          width: 100%;
          height: 70px;
          border-bottom: 1px solid var(--grey);
          color: var(--grey);

          font-family: "Montserrat";
          font-size: 16px;

          resize: none;
          border: none;
          border-bottom: 1px solid var(--grey);

          padding-left: 10px;
          outline: 0;
          

          ::placeholder {
            color: var(--lightGrey);
          }
        }
        select {
          width: 100%;
          border-bottom: 1px solid var(--grey);
          color: var(--grey);

          ::placeholder {
            color: var(--lightGrey);
          }
        }
      }
      button {
        width: 200px;

        display: flex;
        justify-content: center;

        margin: 0 auto;
        padding: 15px 0;

        color: #fff;
        background-color: var(--green);

        font-size: 16px;
        font-weight: 1000;
        font-family: "Montserrat";

        :hover {
          opacity: 80%;
        }
      }
    }
  }

  @media screen and (min-width: 700px){
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    width: 70%;

    .box-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;

      button {
        width: 100px;

        font-size: 10px;
        font-weight: 700;

        color: #fff;
        background-color: var(--blue);
        border: none;

        padding-right: 20px;
        padding-left: 20px;
      }
    }

    section {

      display: flex;
      flex-direction: row;
      background-color: #f7f7f7;
      border-radius: 8px;

      margin-top: 20px;

      .section-main {
        display: flex;
        margin: 0 auto;
        width: 90%;
        gap: 20px;
        padding: none;

        .apresenting-space {
          width: 50%;

          display: flex;
          flex-direction: column;

          padding-top: 60px;

          p {
            font-size: 26px;
            font-weight: 700;
            font-family: "Montserrat";

            line-height: 30px;
            text-align: start;

            color: var(--blue);
          }
          p + p {
            color: var(--green);
            padding-top: 20px;
          }
          
          figure {
            
            width: 100%;

            margin-top: 0 auto;
            padding-top: 50px;

            img {
              
              display: flex;
              justify-content: center;
              align-items: center;

              margin-right: 20px;

              width: 100%;
            }
          }
        }

        form {
          width: 50%;


          span {
            font-size: 14px;
          }
          input {
            padding: 15px 0 10px 15px;
            border-radius: 8px;
            border: none;
          }
          select {
            padding: 15px 0 10px 15px;
            border-radius: 8px;
            border: none;
          }
          textarea {
            height: 100px;

            border-radius: 8px;
            border: none;

            ::-webkit-scrollbar {
              width: 12px;
            }

            ::-webkit-scrollbar-track {
              background: transparent;
            }

            ::-webkit-scrollbar-thumb {
              background-color: var(--blue);
              border-radius: 20px;
              border: 3px solid var(--blue);
            }
          }
        }
      }
    }
  }
`