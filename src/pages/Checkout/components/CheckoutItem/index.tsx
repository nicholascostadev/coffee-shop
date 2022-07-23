import { Minus, Plus, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { CartActionButton } from "../../../../components/Coffee/styles";
import { useCartContext } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  CheckoutInformationRemoveButton,
  CheckoutItemActionContainer,
  CheckoutItemContainer,
  PriceContainer
} from "./styles";

interface CheckoutItemProps {
  title: string;
  price: number;
  image: string;
  amount: number;
}

export const CheckoutItem = ({ title, price, image, amount }: CheckoutItemProps) => {
  const { addItemToCart, decreaseAmount, removeItemFromCart } = useCartContext();
  const navigate = useNavigate();

  const updateCart = (action: ACTION) => {
    switch (action) {
      case "add":
        addItemToCart({
          title,
          price,
          image
        });
        break;
      case "decrease":
        decreaseAmount(title);
        break;
      case "gotoCart":
        if (amount > 0) {
          navigate("/checkout");
        } else {
          addItemToCart({ title, price, image });
          navigate("/checkout");
        }
        break;
      case "remove":
        removeItemFromCart(title);
        break;
    }
  };

  return (
    <CheckoutItemContainer>
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{title}</p>
        <div>
          <CheckoutItemActionContainer>
            <CartActionButton onClick={() => updateCart("decrease")}>
              <Minus />
            </CartActionButton>
            <strong>{amount}</strong>
            <CartActionButton onClick={() => updateCart("add")}>
              <Plus />
            </CartActionButton>
          </CheckoutItemActionContainer>

          <CheckoutInformationRemoveButton onClick={() => updateCart("remove")}>
            <Trash size={16} />
            <span>REMOVER</span>
          </CheckoutInformationRemoveButton>
        </div>
      </div>
      <PriceContainer>
        <strong>{formatMoney({ price, amount })}</strong>
      </PriceContainer>
    </CheckoutItemContainer>
  );
};
