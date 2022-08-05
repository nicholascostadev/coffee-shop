import styled from "styled-components";

export const CheckoutInformationContainer = styled.div`
  flex: 0.3;

  > div {
    padding: 40px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-radius: 6px 44px 6px 44px;
    background: ${props => props.theme["gray-200"]};

    margin-top: 15px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    hr {
      width: 100%;
      margin: 1.5rem 0;
      border: 1px solid ${props => props.theme["gray-400"]};
    }
  }
`;

export const CheckoutTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    &.total {
      font-weight: bold;
    }
  }
`;
export const CheckoutConfirmButton = styled.button`
  border: none;
  height: 2.875rem;
  background: ${props => props.theme["yellow-400"]};
  border-radius: 6px;
  color: ${props => props.theme["white"]};

  cursor: pointer;
  margin-top: 12px;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: ${props => props.theme["yellow-700"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const BackToHomeButton = styled(CheckoutConfirmButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
