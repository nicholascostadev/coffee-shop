import currency from "currency.js";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useCartContext } from "../../contexts/CartContext";
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
}

export const Coffee = ({
  image,
  tags,
  title,
  description,
  price
}: CoffeeProps) => {
  const { addItemToCart } = useCartContext();

  return (
    <CoffeeContainer>
      <Image src={image} alt={title} />
      <TagsContainer>
        {tags.map(tag => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </TagsContainer>
      <CoffeeInfo>
        <strong>{title}</strong>
        <p>{description}</p>
      </CoffeeInfo>

      <CoffeeActions>
        <PriceContainer>
          <strong>
            {currency(price, {
              symbol: "R$",
              separator: ".",
              decimal: ","
            }).format()}
          </strong>
        </PriceContainer>
        <div>
          <div>
            <CartActionButton>
              <Minus />
            </CartActionButton>
            <strong>0</strong>
            <CartActionButton
              onClick={() => addItemToCart({ title, price, image })}
            >
              <Plus />
            </CartActionButton>
          </div>
          <CartButton>
            <ShoppingCart />
          </CartButton>
        </div>
      </CoffeeActions>
    </CoffeeContainer>
  );
};
