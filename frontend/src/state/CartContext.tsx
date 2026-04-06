import { createContext, useMemo, useReducer, type ReactNode } from "react";

import type { CartState } from "../types/cart";
import type { Product } from "../types/product";
import { cartReducer, initialCartState } from "./cartReducer";

interface CartContextValue {
  state: CartState;
  addItem: (product: Product) => void;
  decreaseItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  itemCount: number;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const value = useMemo(
    () => ({
      state,
      addItem: (product: Product) =>
        dispatch({ type: "ADD_ITEM", payload: product }),
      decreaseItem: (productId: string) =>
        dispatch({ type: "DECREASE_ITEM", payload: productId }),
      removeItem: (productId: string) =>
        dispatch({ type: "REMOVE_ITEM", payload: productId }),
      clearCart: () => dispatch({ type: "CLEAR_CART" }),
      itemCount: state.items.reduce((total, item) => total + item.quantity, 0),
    }),
    [state],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
