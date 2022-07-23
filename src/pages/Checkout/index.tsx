import { CheckoutData } from "./components/CheckoutData";
import { CheckoutInformation } from "./components/CheckoutInformation";

import { CheckoutContainer } from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutData />
      <CheckoutInformation />
    </CheckoutContainer>
  );
};
