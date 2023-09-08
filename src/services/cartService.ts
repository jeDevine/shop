import axios from "axios";
import CartItem from "../models/CartItem";

const baseURL: string = process.env.REACT_APP_API_BASE_URL || "";

export const getCart = async (userId: string): Promise<CartItem[]> => {
  return (
    await axios.get(`${baseURL}/users/${encodeURIComponent(userId)}/cart`)
  ).data;
};

export const addToCart = async (cartItem: CartItem): Promise<CartItem> => {
  return (
    await axios.post(
      `${baseURL}/users/${encodeURIComponent(cartItem.userId)}/cart`,
      cartItem
    )
  ).data;
};

export const updateQuantity = async (
  userId: string,
  productId: string,
  update: any
): Promise<CartItem> => {
  return (
    await axios.patch(
      `${baseURL}/users/${encodeURIComponent(userId)}/cart/${encodeURIComponent(
        productId
      )}`,
      update
    )
  ).data;
};

export const deleteCartItem = async (
  userId: string,
  productId: string
): Promise<void> => {
  await axios.delete(
    `${baseURL}/users/${encodeURIComponent(userId)}/cart/${encodeURIComponent(
      productId
    )}`
  );
};

export const deleteCart = async (userId: string): Promise<void> => {
  await axios.delete(`${baseURL}/users/${encodeURIComponent(userId)}/cart`);
};
