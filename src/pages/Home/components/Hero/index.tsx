
import { Advantages } from "../../../../components/Advantages";
import { HeroContainer, HeroImage, HeroInfoContainer } from "./styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroInfoContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <Advantages />
      </HeroInfoContainer>
      <HeroImage src="/coffee-image.png" alt="" />
    </HeroContainer>
  );
};
