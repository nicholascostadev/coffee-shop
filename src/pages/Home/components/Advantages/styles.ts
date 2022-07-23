import styled from "styled-components";

export const AdvantagesContainer = styled.div`
  margin-top: 4.12rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;

  @media (max-width: 1000px) {
    justify-items: center;
  }
`;

export const Advantage = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;

  text-align: left;

  gap: 0 12px;

  font-size: 1rem;
`;

interface AdvantageIconProps {
  variant: "YELLOW_DARK" | "YELLOW_LIGHT" | "GRAY_DARK" | "PURPLE_LIGHT";
}

enum AdvantageIconVariant {
  YELLOW_DARK = "yellow-700",
  YELLOW_LIGHT = "yellow-400",
  GRAY_DARK = "gray-700",
  PURPLE_LIGHT = "purple-400"
}
export const AdvantageIcon = styled.div<AdvantageIconProps>`
  background: ${props => props.theme[AdvantageIconVariant[props.variant]]};
  color: ${props => props.theme["white"]};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 50%;
`;
