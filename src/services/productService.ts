import axios from "axios";
import Product from "../models/Product";

const baseURL: string = process.env.REACT_APP_API_BASE_URL || "";

export const getProducts = async (
  maxPrice: number | null,
  includes: string | null,
  limit: number | null
): Promise<Product[]> => {
  const params = {
    ...(maxPrice ? { "max-price": maxPrice } : {}),
    ...(includes ? { includes } : {}),
    ...(limit ? { limit } : {}),
  };
  return (await axios.get(`${baseURL}/products`, { params })).data;
};

export const getProduct = async (id: string): Promise<Product> => {
  return (await axios.get(`${baseURL}/products/${encodeURIComponent(id)}`))
    .data;
};
