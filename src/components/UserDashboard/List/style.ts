import styled from "styled-components";

export const ListTag = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding: 10px 10px;
  height: 100vh;

  ::-webkit-scrollbar-track {
    border: 5px solid white;
    background-color: #b2bec3;
    opacity: 0.5;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #dfe6e9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: 5px;
  }

  width: 100%;
`;

const Card = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid var(--lightGrey);
  padding: 10px 20px;
  margin: 8px 0px;

  transition: 0.3s;
  :hover {
    width: 99%;
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

    .iconInfo {
      margin-right: 5px;
      font-size: 14px;
    }
    .infoPlus {
      display: flex;
      align-items: center;
      color: var(--blue);
      font-size: 11px;
      margin-right: 20px;

      transition: 0.3s;

      :hover {
        color: var(--darkGrey);
      }
    }
    .edit-delete {
      font-size: 11px;
      font-weight: 600;
      color: white;

      padding: 6px 20px;

      transition: 0.3s;
    }
    .edit {
      color: var(--grey);
      margin-bottom: 5px;
      border: 1px solid var(--grey);

      :hover {
        background-color: grey;
        color: white;
      }
    }
    .delete {
      color: var(--orange);
      border: 1px solid var(--orange);
      background-color: white;

      :hover {
        background-color: var(--orange);
        color: white;
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;

    & > img {
      object-fit: cover;
      width: 100px;
      height: 100px;
      border-radius: 20px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* height: 70px; */
      gap: 15px;
      text-align: start;

      & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & > h4 {
          font-size: 12px;
          font-weight: 400;
          color: var(--blue);
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
          color: var(--blue);
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 15px;
  }
`;

export default Card;
