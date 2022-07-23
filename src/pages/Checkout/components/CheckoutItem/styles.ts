import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  min-height: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;

  gap: 0 20px;

  > div {
    img {
      width: 64px;
      height: 64px;
    }
  }

  > div > div {
    margin-top: 0.5rem;
    display: flex;

    gap: 0 8px;
  }
`;

export const CheckoutItemActionContainer = styled.div`
  background: ${props => props.theme["gray-400"]};
  border-radius: 8px;

  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;

  align-self: flex-end;
`;

export const CheckoutInformationRemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4063rem;
  height: 2.375rem;

  font-size: 0.75rem;
  background: ${props => props.theme["gray-400"]};
  border-radius: 8px;
  border: 0;

  color: ${props => props.theme["purple-400"]};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme["gray-500"]};
  }

  span {
    color: ${props => props.theme["gray-700"]};
  }

  gap: 4px;
`;

export const PriceContainer = styled.div`
  > strong {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
`;
