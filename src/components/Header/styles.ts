import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.75rem;
`;

const ButtonBase = styled.button`
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const PlaceWrapper = styled(ButtonBase)`
  background: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-700']};

  padding: 0 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
`;

export const CartWrapper = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-700']};

  padding: 0 0.5rem;
  height: 2.375rem;

  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  //
`;
