import styled from "styled-components";

export const CoffeeListingContainer = styled.div`
  h1 {
    font-family: "Baloo 2", "Roboto", sans-serif;
    font-size: 2rem;
    color: ${props => props.theme["gray-800"]};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;

    gap: 2rem 2.5rem;
    padding: 3.375rem 0 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
    > div {
      grid-template-columns: repeat(2, 1fr);
      place-content: center;
      justify-items: center;
    }
  }

  @media (max-width: 580px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;
