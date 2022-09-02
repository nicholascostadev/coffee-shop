import { useState } from "react";
import { Coffee } from "../../../../components/Coffee";
import { useCartContext } from "../../../../contexts/CartContext";
import { CoffeeListingContainer } from "./styles";

const coffees = [
  {
    image: "/coffee-1.png",
    tags: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    amount: 0
  },
  {
    image: "/coffee-2.png",
    tags: ["Tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 12.2,
    amount: 0
  },
  {
    image: "/coffee-3.png",
    tags: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 13.99,
    amount: 0
  }
];

export const CoffeeListing = () => {
  const [coffeesState, ] = useState(coffees); // not useful right now
  const { cart } = useCartContext();

  return (
    <CoffeeListingContainer>
      <h1>Nossos Cafés</h1>
      <div>
        {coffeesState.map(coffee => {
          const isItemInCart = cart.findIndex(item => item.title === coffee.title);
          if (isItemInCart === -1) {
            // if item is not in cart
            return (
              <Coffee
                key={coffee.title}
                title={coffee.title}
                tags={coffee.tags}
                description={coffee.description}
                price={coffee.price}
                image={coffee.image}
                amount={0}
              />
            );
          } else {
            // if item is in cart
            return (
              <Coffee
                key={coffee.title}
                title={coffee.title}
                tags={coffee.tags}
                description={coffee.description}
                price={coffee.price}
                image={coffee.image}
                amount={cart[isItemInCart].amount}
              />
            );
          }
        })}
      </div>
    </CoffeeListingContainer>
  );
};
