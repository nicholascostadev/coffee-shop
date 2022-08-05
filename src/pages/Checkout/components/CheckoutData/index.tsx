import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PaymentOptionButton } from "../../../../components/PaymentOptionButton";
import {
  CheckoutDataContainer,
  CheckoutFormContainer,
  PaymentOptions,
  PaymentOptionsContainer,
  PaymentOptionsHeader
} from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCartContext } from "../../../../contexts/CartContext";
import { useLocation } from "../../../../contexts/LocationContext";

const schema = z.object({
  cep: z.string().length(8),
  rua: z.string(),
  numero: z.number().positive(),
  complemento: z.string().optional(),
  bairro: z.string(),
  estado: z.string(),
  uf: z.string().length(2)
});

export const CheckoutFormSide = () => {
  const { changeLocation } = useLocation();
  const { changePaymentOption } = useCartContext();
  const [selectedPayment, setSelectedPayment] = useState<PaymentOptionsType>(null);
  const {
    register,
    watch,
    formState: { errors }
    // handleSubmit
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: null,
      complemento: "",
      bairro: "",
      estado: "",
      uf: ""
    }
  });

  useEffect(() => {
    const city = watch("uf");
    const state = watch("estado");
    const number = watch("numero");
    const street = watch("rua");
    const district = watch("bairro");
    const zip = watch("cep");

    changePaymentOption(selectedPayment);
    changeLocation({ city, state, number, district, street, zip });
  }, [
    watch("estado"),
    watch("uf"),
    watch("numero"),
    selectedPayment,
    watch("bairro"),
    watch("rua"),
    watch("cep")
  ]);

  return (
    <CheckoutDataContainer>
      <strong>Complete seu pedido</strong>

      <CheckoutFormContainer>
        <div>
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <form>
          <input placeholder="CEP" className="CEP" type="string" {...register("cep")} />
          <input placeholder="Rua" className="RUA" type="text" {...register("rua")} />
          <input
            placeholder="Número"
            className="NUMERO"
            type="number"
            {...register("numero")}
          />
          <div className="COMPLEMENTO">
            <input placeholder="Complemento" type="text" {...register("complemento")} />
            <span>Opcional</span>
          </div>
          <input
            placeholder="Bairro"
            className="BAIRRO"
            type="text"
            {...register("bairro")}
          />
          <input
            placeholder="Cidade"
            className="CIDADE"
            type="text"
            {...register("estado")}
          />
          <input placeholder="UF" className="UF" type="text" {...register("uf")} />
          {errors.uf && <span>{errors.uf.message}</span>}
        </form>
      </CheckoutFormContainer>
      <PaymentOptionsContainer>
        <PaymentOptionsHeader>
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </div>
        </PaymentOptionsHeader>
        <PaymentOptions>
          <PaymentOptionButton
            icon={<CreditCard size={16} />}
            title="cartão de crédito"
            active={selectedPayment === "credit"}
            onClick={() => setSelectedPayment("credit")}
          />
          <PaymentOptionButton
            icon={<Bank size={16} />}
            title="cartão de débito"
            active={selectedPayment === "debit"}
            onClick={() => setSelectedPayment("debit")}
          />
          <PaymentOptionButton
            icon={<Money size={16} />}
            title="dinheiro"
            active={selectedPayment === "money"}
            onClick={() => setSelectedPayment("money")}
          />
        </PaymentOptions>
      </PaymentOptionsContainer>
    </CheckoutDataContainer>
  );
};
