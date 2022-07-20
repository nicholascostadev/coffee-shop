import styled from "styled-components";

export const CheckoutDataContainer = styled.div`
  flex: 0.7;

  //
`;

export const CheckoutFormContainer = styled.div`
  background: ${props => props.theme["gray-200"]};
  border-radius: 0.375rem;

  padding: 40px;
  margin-top: 15px;
  > div {
    display: flex;
    gap: 0 0.5rem;
    color: ${props => props.theme["yellow-400"]};

    margin-bottom: 32px;

    > div {
      p {
        font-size: 16px;
        font-weight: 500;
        color: ${props => props.theme["gray-800"]};
      }
      span {
        display: inline-block;
        font-size: 14px;
        color: ${props => props.theme["gray-700"]};
      }
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px 12px;
    grid-template-areas:
      "CEP . . . . ."
      "RUA RUA RUA RUA RUA RUA"
      "NUMERO COMPLEMENTO COMPLEMENTO COMPLEMENTO COMPLEMENTO COMPLEMENTO"
      "BAIRRO CIDADE CIDADE CIDADE CIDADE UF";
    color: ${props => props.theme["gray-600"]};

    .CEP {
      grid-area: CEP;
    }

    .RUA {
      grid-area: RUA;
    }

    .NUMERO {
      grid-area: NUMERO;
    }

    .COMPLEMENTO {
      grid-area: COMPLEMENTO;
      position: relative;

      > input {
        width: 100%;
      }

      > span {
        font-style: italic;
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        font-size: 14px;
      }
    }

    .BAIRRO {
      grid-area: BAIRRO;
    }

    .CIDADE {
      grid-area: CIDADE;
    }

    .UF {
      grid-area: UF;
    }

    input {
      border-radius: 4px;
      border: 1px solid ${props => props.theme["gray-400"]};
      padding: 0.75rem;
      background: ${props => props.theme["gray-300"]};
    }
  }
`;

export const PaymentOptionsContainer = styled.div`
  margin-top: 12px;
  background: ${props => props.theme["gray-200"]};
  border-radius: 0.375rem;

  padding: 40px;
`;

export const PaymentOptionsHeader = styled.div`
  //
  display: flex;
  gap: 0 0.5rem;
  color: ${props => props.theme["purple-400"]};

  margin-bottom: 32px;

  > div {
    p {
      font-size: 16px;
      font-weight: 500;
      color: ${props => props.theme["gray-800"]};
    }
    span {
      display: inline-block;
      font-size: 14px;
      color: ${props => props.theme["gray-700"]};
    }
  }
`;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 0.75rem;

  margin-top: 2rem;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;
