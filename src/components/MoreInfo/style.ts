import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 50px auto;
  display: flex;
  gap: 100px;

  .left-wrapper {
    img {
      width: 600px;
    }
    .product-info {
      text-align: left;
      small {
        position: relative;
        top: -20px;
        color: var(--blue);
      }
      h3 {
        font-size: 30px;
        font-family: "Montserrat";
      }
    }

    .product-description {
      width: 500px;
      margin: 0 auto;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 30px;
      h3 {
        font-size: 30px;
        color: var(--blue);
      }
    }
  }

  .right-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      background: var(--blue);
      display: flex;
      max-width: fit-content;
      margin: 20px auto;
      padding: 10px 20px;
      color: white;
    }

    .user-info {
      background: rgba(217, 217, 217, 0.2);
      padding: 80px;
      border-radius: 5px;
      border: 1px solid var(--lightGrey);
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: rgba(0, 0, 0, 0.7);

      .username {
        font-size: 20px;
        color: var(--blue);
      }
      .price {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    .left-wrapper {
      .product-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 100%;
      }
      .product-description {
        width: 100%;
        text-align: left;
        h3 {
          text-align: center;
        }
      }
    }

    .right-wrapper {
      .user-info {
        gap: 5px;
        padding: 20px;
      }
    }
  }
`;

// ${(props) => (props.isLogged ? "var(--blue)" : "#ccc")};
