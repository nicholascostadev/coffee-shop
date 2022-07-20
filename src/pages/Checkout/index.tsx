import { CheckoutData } from "./components/CheckoutData";

import { CheckoutContainer } from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutData />
      <div>
        <strong>Cafés selecionados</strong>

        <div>{/* Checkout Information */}</div>
        {/* right side grid */}
        {/* Cafés selecionados */}
      </div>
    </CheckoutContainer>
  );
};
