import { MapPin, Money, Timer } from "phosphor-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Advantage,
  AdvantageDescription,
  AdvantageIcon
} from "../../components/Advantages/styles";
import { useCartContext } from "../../contexts/CartContext";
import { useLocation } from "../../contexts/LocationContext";
import { DeliveryContainer, RainbowContainer } from "./styles";

type paymentOptionFormatted =
  | "Cartão de crédito"
  | "Cartão de débito"
  | "Dinheiro"
  | null;

export const Delivery = () => {
  const { location, allFilled } = useLocation();
  const { paymentOption } = useCartContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!allFilled) {
      navigate("/checkout");
    }
  }, []);

  const formatPayment = (paymentOption: string): paymentOptionFormatted => {
    switch (paymentOption) {
      case "credit":
        return "Cartão de crédito";
        break;
      case "debit":
        return "Cartão de débito";
        break;
      case "money":
        return "Dinheiro";
        break;
    }
    return null;
  };

  const paymentOptionFormatted: paymentOptionFormatted = paymentOption
    ? formatPayment(paymentOption)
    : null;

  return (
    <DeliveryContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <RainbowContainer>
          <Advantage>
            <AdvantageIcon variant="PURPLE_LIGHT">
              <MapPin />
            </AdvantageIcon>
            <AdvantageDescription>
              <p>
                {location.city && location.state
                  ? `Entrega em ${location.street}, ${location.number}`
                  : "Nenhum local informado"}
              </p>
              <span>
                {location.district ? `${location.district}` : ""}
                {location.state ? ` - ${location.state}` : ""}
                {location.city ? `, ${location.city}` : ""}
              </span>
            </AdvantageDescription>
          </Advantage>
          <Advantage>
            <AdvantageIcon variant="YELLOW_LIGHT">
              <Timer />
            </AdvantageIcon>
            <AdvantageDescription>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </AdvantageDescription>
          </Advantage>
          <Advantage>
            <AdvantageIcon variant="YELLOW_DARK">
              <Money />
            </AdvantageIcon>
            <AdvantageDescription>
              <p>Pagamento na entrega</p>
              <strong>
                {paymentOption === null
                  ? "Forma de pagamento"
                  : `${paymentOptionFormatted}`}
              </strong>
            </AdvantageDescription>
          </Advantage>
        </RainbowContainer>
        <img src="/illustration.svg" alt="Ilustração de uma pessoa em uma motocicleta" />
      </div>
    </DeliveryContainer>
  );
};
