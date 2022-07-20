import styled from 'styled-components';

export const CoffeeContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme['gray-200']};
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  padding: 0 0.5rem;

  text-align: center;
`;

export const Image = styled.img`
  margin-top: -32px;
`;

export const TagsContainer = styled.div`
  background: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-700']};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  margin-top: 0.5rem;
  > span {
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
  }
`;

export const CoffeeInfo = styled.div`
  line-height: 1.3;

  strong {
    color: ${props => props.theme['gray-800']};
    font-size: 1.25rem;
    margin: 16px 0 8px;
    display: block;
  }

  p {
    color: ${props => props.theme['gray-600']};
    font-size: 0.875rem;
  }
  //
`;

export const CoffeeActions = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  > div {
    display: flex;
  }

  > div > div {
    background: ${props => props.theme['gray-400']};
    border-radius: 8px;

    height: 2.375rem;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 4px;

    align-self: flex-end;
  }
`;

export const PriceContainer = styled.div`
  color: ${props => props.theme['gray-700']};
  strong {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 1.2rem;

    /* 
    span {
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      display: inline-block;
      margin-right: 0.25rem;
    } */
  }

  //
`;

const ButtonBase = styled.button`
  border: 0;
  color: ${props => props.theme['white']};
  cursor: pointer;

  border-radius: 8px;
  font-size: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;

export const CartButton = styled(ButtonBase)`
  background: ${props => props.theme['purple-700']} !important;
  border: 0;
  border-radius: 8px;
  color: ${props => props.theme['white']};

  padding: 8px;
  margin-left: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.375rem;
  width: 2.375rem;
`;

export const CartActionButton = styled(ButtonBase)`
  background: transparent;
  color: ${props => props.theme['purple-700']} !important;
  padding: 0.5rem;
`;
