import Product from "./Product";

export default interface CartItem {
  _id?: string;
  userId: string;
  product: Product;
  quantity: number;
}
