import coffeeImage from "../../../../assets/coffee-1.png";
import coffeeImage2 from "../../../../assets/coffee-2.png";
import coffeeImage3 from "../../../../assets/coffee-3.png";
import { Coffee } from "../../../../components/Coffee";
import { CoffeeListingContainer } from "./styles";

export const CoffeeListing = () => {
  return (
    <CoffeeListingContainer>
      <h1>Nossos Cafés</h1>
      <div>
        <Coffee
          image={coffeeImage}
          tags={["Tradicional"]}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9.9}
        />
        <Coffee
          image={coffeeImage2}
          tags={["Tradicional"]}
          title="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          price={12.2}
        />
        <Coffee
          image={coffeeImage3}
          tags={["Tradicional"]}
          title="Expresso Cremoso"
          description="Café expresso tradicional com espuma cremosa"
          price={13.99}
        />
      </div>
    </CoffeeListingContainer>
  );
};
