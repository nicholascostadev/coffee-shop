import styled from "styled-components";
export const DeliveryContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2", "Roboto", sans-serif;
    color: ${props => props.theme["yellow-700"]};
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
  }

  > div {
    display: grid;
    gap: 0 6.375rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      gap: 1rem 0;
    }

    img {
      max-width: 100%;
    }
  }
`;

export const RainbowContainer = styled.div`
  margin-top: 2.5rem;
  border: 2px solid transparent;
  border-image: linear-gradient(
    to right,
    #b827fc 0%,
    #2c90fc 25%,
    #b8fd33 50%,
    #fec837 75%,
    #fd1892 100%
  );
  border-image-slice: 1;
  border-radius: 6px 36px 6px 36px;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  gap: 32px 0;

  > div {
    min-height: 2rem;
    height: auto;
  }
`;
