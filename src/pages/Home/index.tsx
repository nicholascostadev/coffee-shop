import { CoffeeListing } from "./components/CofeeListing";
import { Hero } from "./components/Hero";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <CoffeeListing />
    </HomeContainer>
  );
};
