import { createContext, useContext, useState } from "react";

interface CartItemProps {
  title: string;
  image: string;
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
  decreaseAmount: (name: string) => void;
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

  // make a function that makes the amount of items in the specific item in the cart less 1
  const decreaseAmount = (name: string) => {
    const coffeeToDecrease = cart.find(item => item.title === name);
    if (coffeeToDecrease) {
      if (coffeeToDecrease.amount - 1 === 0) {
        removeItemFromCart(name);
      } else {
        setCart(prev =>
          prev.map(item => {
            return item.title === name ? { ...item, amount: item.amount - 1 } : item;
          })
        );
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, subtotal, addItemToCart, removeItemFromCart, decreaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
