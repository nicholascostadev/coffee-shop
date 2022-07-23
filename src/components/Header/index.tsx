import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useCartContext } from "../../contexts/CartContext";
import { useLocation } from "../../contexts/LocationContext";
import { CartWrapper, HeaderContainer, HeaderInfoWrapper, PlaceWrapper } from "./styles";

export const Header = () => {
  const { cart } = useCartContext();
  const { location } = useLocation();

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <HeaderInfoWrapper>
        <PlaceWrapper onClick={() => navigate("/checkout")}>
          <MapPin size={22} />
          {location.city && location.state
            ? `${location.city}, ${location.state}`
            : "Nenhum local identificado ainda"}
        </PlaceWrapper>
        <CartWrapper to="/checkout">
          {cart.length > 0 && <span>{cart.length}</span>}
          <ShoppingCart size={22} />
        </CartWrapper>
      </HeaderInfoWrapper>
    </HeaderContainer>
  );
};
