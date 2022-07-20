import { createContext, useContext, useState } from "react";

interface CartItemProps {
  title: string;
  image: React.ReactNode;
  amount: number;
  price: number;
}

interface AddItemToCartProps {
  title: string;
  price: number;
  image: string;
}

interface CartContextProps {
  addItemToCart: ({ title, price, image }: AddItemToCartProps) => void;
  removeItemFromCart: (name: string) => void;
  cart: CartItemProps[];
  subtotal: number;
}

const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState([] as CartItemProps[]);

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);

  const addItemToCart = ({ title, price, image }: AddItemToCartProps) => {
    setCart(prev => {
      const found = prev.find(item => item.title === title);

      if (!found) {
        return [...prev, { title, amount: 1, price, image }];
      }

      return prev.map(item =>
        item.title === title ? { ...item, amount: item.amount + 1 } : item
      );
    });
  };

  const removeItemFromCart = (name: string) => {
    setCart(cart.filter(item => item.title !== name));
  };

  return (
    <CartContext.Provider
      value={{ cart, subtotal, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
