import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { formatMoney } from "../../utils/formatMoney";

import {
  CartActionButton,
  CartButton,
  CoffeeActions,
  CoffeeContainer,
  CoffeeInfo,
  Image,
  PriceContainer,
  TagsContainer
} from "./styles";
interface CoffeeProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
}
export const Coffee = ({
  image,
  tags,
  title,
  description,
  price,
  amount = 0
}: CoffeeProps) => {
  const navigate = useNavigate();
  const { addItemToCart, decreaseAmount, removeItemFromCart } = useCartContext();
  const updateCart = (action: ACTION) => {
    switch (action) {
      case "add":
        addItemToCart({ title, price, image });
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
    <CoffeeContainer>
      {" "}
      <Image src={image} alt={title} />{" "}
      <TagsContainer>
        {" "}
        {tags.map(tag => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}{" "}
      </TagsContainer>{" "}
      <CoffeeInfo>
        {" "}
        <strong>{title}</strong> <p>{description}</p>{" "}
      </CoffeeInfo>{" "}
      <CoffeeActions>
        {" "}
        <PriceContainer>
          {" "}
          <strong>{formatMoney({ price })}</strong>{" "}
        </PriceContainer>{" "}
        <div>
          {" "}
          <div>
            {" "}
            <CartActionButton onClick={() => updateCart("decrease")}>
              {" "}
              <Minus />{" "}
            </CartActionButton>{" "}
            <strong>{amount}</strong>{" "}
            <CartActionButton onClick={() => updateCart("add")}>
              {" "}
              <Plus />{" "}
            </CartActionButton>{" "}
          </div>{" "}
          <CartButton onClick={() => updateCart("gotoCart")}>
            {" "}
            <ShoppingCart />{" "}
          </CartButton>{" "}
        </div>{" "}
      </CoffeeActions>{" "}
    </CoffeeContainer>
  );
};
