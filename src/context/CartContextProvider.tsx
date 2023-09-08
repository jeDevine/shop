import { ReactNode, useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import CartItem from "../models/CartItem";
import {
  addToCart,
  deleteCart,
  deleteCartItem,
  getCart,
  updateQuantity,
} from "../services/cartService";
import UserContext from "./UserContext";
import Product from "../models/Product";

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState<CartItem[]>([]);

  const loadCart = async (): Promise<void> => {
    setCart(await getCart(user?._id!));
  };

  useEffect(() => {
    (async () => {
      if (user) {
        loadCart();
      }
    })();
  }, [user]);

  const addToCartHandler = async (product: Product): Promise<void> => {
    await addToCart({ userId: user?._id!, product, quantity: 1 });
    loadCart();
  };

  const updateQuantityHandler = async (
    productId: string,
    update: any
  ): Promise<void> => {
    await updateQuantity(user?._id!, productId, update);
    loadCart();
  };

  const deleteCartItemHandler = async (productId: string): Promise<void> => {
    await deleteCartItem(user?._id!, productId);
    loadCart();
  };

  const deleteCartHandler = async (): Promise<void> => {
    await deleteCart(user?._id!);
    loadCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        updateQuantityHandler,
        deleteCartItemHandler,
        deleteCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
