import { ArrowRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext";
import { useLocation } from "../../../../contexts/LocationContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { CheckoutItem } from "../CheckoutItem";
import {
  BackToHomeButton,
  CheckoutConfirmButton,
  CheckoutInformationContainer,
  CheckoutTotalContainer
} from "./styles";

export const CheckoutInformationSide = () => {
  const { cart, subtotal } = useCartContext();
  const { allFilled } = useLocation();
  const tax = 5;
  const hasAnyCoffeeInCart = cart.length > 0;

  const navigate = useNavigate();

  return (
    <CheckoutInformationContainer>
      <strong>Cafés selecionados</strong>
      <div>
        {hasAnyCoffeeInCart ? (
          cart.map(item => {
            return (
              <>
                <CheckoutItem
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  amount={item.amount}
                />

                <hr />
              </>
            );
          })
        ) : (
          <>
            <p>Nenhum café selecionado</p>
          </>
        )}
        {hasAnyCoffeeInCart ? (
          <CheckoutTotalContainer>
            <div>
              <p>Total de itens:</p>
              <span>{formatMoney({ price: subtotal })}</span>
            </div>
            <div>
              <p>Entrega:</p>
              <span>{formatMoney({ price: tax })}</span>
            </div>
            <div className="total">
              <p>Total:</p>
              <span>{formatMoney({ price: subtotal + tax })}</span>
            </div>

            <CheckoutConfirmButton
              disabled={!allFilled}
              onClick={() => navigate("/checkout/delivery")}
            >
              Confirmar pedido
            </CheckoutConfirmButton>
          </CheckoutTotalContainer>
        ) : (
          <CheckoutTotalContainer>
            <BackToHomeButton onClick={() => navigate("/")}>
              Selecionar Cafés
              <ArrowRight />
            </BackToHomeButton>
          </CheckoutTotalContainer>
        )}
      </div>
    </CheckoutInformationContainer>
  );
};
