import { useState } from "react";
import coffeeImage from "../../../../assets/coffee-1.png";
import coffeeImage2 from "../../../../assets/coffee-2.png";
import coffeeImage3 from "../../../../assets/coffee-3.png";
import { Coffee } from "../../../../components/Coffee";
import { useCartContext } from "../../../../contexts/CartContext";
import { CoffeeListingContainer } from "./styles";

const coffees = [
  {
    image: coffeeImage,
    tags: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    amount: 0
  },
  {
    image: coffeeImage2,
    tags: ["Tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 12.2,
    amount: 0
  },
  {
    image: coffeeImage3,
    tags: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 13.99,
    amount: 0
  }
];

export const CoffeeListing = () => {
  const [coffeesState, setCoffeesState] = useState(coffees); // not useful right now
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
