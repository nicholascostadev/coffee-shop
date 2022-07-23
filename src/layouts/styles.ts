import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding: 0 0.5rem;
  }
`;
