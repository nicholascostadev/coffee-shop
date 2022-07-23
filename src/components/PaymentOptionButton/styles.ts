/* eslint-disable indent */
import styled from "styled-components";

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

  cursor: pointer;

  background-color: ${props =>
    props.active ? props.theme["purple-100"] : props.theme["gray-400"]};

  color: ${props => props.theme["purple-400"]};

  span {
    color: ${props => props.theme["gray-700"]};
    font-size: 0.75rem;
  }

  &:not(:focus) {
    box-shadow: ${props =>
      props.active ? `0 0 0 2px ${props.theme["purple-700"]}` : "0"};
    offset-distance: 20px;
  }
`;
