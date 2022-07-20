import { Button } from "./styles";

interface PaymentOptionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  title: string;
  active?: boolean;
}

export const PaymentOptionButton = ({
  icon,
  title,
  active,
  ...rest
}: PaymentOptionButtonProps) => {
  return (
    <Button active={active} type="button" {...rest}>
      {icon}
      <span>{title.toUpperCase()}</span>
    </Button>
  );
};
