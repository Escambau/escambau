import styled from "styled-components";

export const HeaderTag = styled.header`
  align-items: center;
  justify-content: center;

  padding: 15px 0px;

  .container {
    width: 90%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
  }

  .logotipo {
    width: 220px;

    flex-direction: row;
    align-items: center;

    & > img {
      height: 60px;
    }
  }

  .notification-perfil {
    width: 75px;

    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    & > button {
      padding: initial;
      color: initial;

      display: flex;
      align-items: center;

      & > .notification{
        font-size: 30px;
        transition: .3s;
        :hover{
          color: yellow;
        }
      }

      & > .perfil {
        background-color: var(--grey);
        font-size: 36px;
        
        padding: 5px;
        margin-left: 15px;

        border-radius: 100%;
        margin-right: 10px;
      }
      .userName{
          transition: .3s;
          :hover{
            color: white;
          }
        }
    }
  }

  .searchBar {
    align-items: center;
    justify-content: center;

    & > input {
      width: 90%;
      max-width: 800px;
      padding: 10px;
    }
    & > button {
      position: absolute;
      right: 8%;

      padding: initial;
      border: none;

      background-color: transparent;
      color: initial;
    }
  }

  @media (min-width: 900px) {
    .container {
      margin-bottom: 0px;
    }
    .searchBar {
      position: absolute;
      width: 50%;
      right: 25%;
    }
    .notification-perfil{
      width: auto;

      & > .notification{
        font-size: 30px;
      }
    }
  }
  @media (min-width: 1200px) {
    .container {
      margin-bottom: 0px;
    }
    .searchBar {
      position: absolute;
      width: 50%;
      right: 24%;
    }
  }
`;