import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useCartContext } from "../../contexts/CartContext";
import {
  CartWrapper,
  HeaderContainer,
  HeaderInfoWrapper,
  PlaceWrapper
} from "./styles";

export const Header = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <HeaderInfoWrapper>
        <PlaceWrapper>
          <MapPin size={22} />
          Rio de Janeiro, RJ
        </PlaceWrapper>
        <CartWrapper to="/checkout">
          <ShoppingCart size={22} />
        </CartWrapper>
      </HeaderInfoWrapper>
    </HeaderContainer>
  );
};
