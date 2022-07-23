import currency from "currency.js";

export interface FormatMoneyProps {
  price: number;
  amount?: number;
}
export const formatMoney = ({ price, amount = 1 }: FormatMoneyProps) => {
  return currency(price * amount, {
    symbol: "R$",
    separator: ".",
    decimal: ",",
    precision: 2
  }).format();
};
