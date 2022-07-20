import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  margin-bottom: 8rem;
`;

export const HeroInfoContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    color: ${props => props.theme['gray-900']};

    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme['gray-900']};
    font-size: 1.25rem;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const HeroImage = styled.img`
  justify-self: flex-end;
  padding-right: 2rem;

  @media (max-width: 1440px) {
    padding-right: 1rem;
  }

  @media (max-width: 1000px) {
    padding-right: 0;
  }
`;

export const BackgroundBlur = styled.div`
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
`;
