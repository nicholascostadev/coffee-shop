import { CheckoutFormSide } from "./components/CheckoutData";
import { CheckoutInformationSide } from "./components/CheckoutInformation";

import { CheckoutContainer } from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutFormSide />
      <CheckoutInformationSide />
    </CheckoutContainer>
  );
};
