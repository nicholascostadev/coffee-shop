import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Advantage, AdvantageIcon, AdvantagesContainer } from "./styles";

export const Advantages = () => {
  return (
    <AdvantagesContainer>
      <Advantage>
        <AdvantageIcon variant="YELLOW_DARK">
          <ShoppingCart />
        </AdvantageIcon>
        <p>Compra simples e segura</p>
      </Advantage>
      <Advantage>
        <AdvantageIcon variant="GRAY_DARK">
          <Package />
        </AdvantageIcon>
        <p>Compra simples e segura</p>
      </Advantage>
      <Advantage>
        <AdvantageIcon variant="YELLOW_LIGHT">
          <Timer />
        </AdvantageIcon>
        <p>Compra simples e segura</p>
      </Advantage>
      <Advantage>
        <AdvantageIcon variant="PURPLE_LIGHT">
          <Coffee />
        </AdvantageIcon>
        <p>Compra simples e segura</p>
      </Advantage>
    </AdvantagesContainer>
  );
};
