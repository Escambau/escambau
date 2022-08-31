import styled from "styled-components";

export const Container = styled.div`
  .product-info {
    small {
      color: var(--blue);
    }
    h3 {
      font-size: 2rem;
      font-weight: 600;
    }
    img {
      width: 34.375rem;
    }
  }

  .product-description {
    h3 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--blue);
    }
    p {
      font-size: 1.5rem;
      max-width: 34.375rem;
    }
  }
`;
