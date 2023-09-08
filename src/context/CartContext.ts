import { createContext } from "react";
import CartItem from "../models/CartItem";
import Product from "../models/Product";

interface CartContextModel {
  cart: CartItem[];
  addToCartHandler: (product: Product) => void;
  updateQuantityHandler: (productId: string, update: any) => void;
  deleteCartItemHandler: (productId: string) => void;
  deleteCartHandler: () => void;
}

const defaultValues: CartContextModel = {
  cart: [],
  addToCartHandler: () => {},
  updateQuantityHandler: () => {},
  deleteCartItemHandler: () => {},
  deleteCartHandler: () => {},
};

const CartContext = createContext(defaultValues);

export default CartContext;
