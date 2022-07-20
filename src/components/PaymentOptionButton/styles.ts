import styled from 'styled-components';

interface ButtonProps {
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  height: 51px;
  border: 0;
  border-radius: 6px;

  padding: 1.125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 12px;

  background-color: ${props =>
    props.active ? props.theme['purple-100'] : props.theme['gray-400']};
  /* border: ${props =>
    props.active ? `2px solid ${props.theme['purple-400']}` : '0'}; */

  color: ${props => props.theme['purple-400']};

  span {
    color: ${props => props.theme['gray-700']};
    font-size: 0.75rem;
  }
`;
