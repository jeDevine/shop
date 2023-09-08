import { useEffect, useState } from "react";
import "./ProductList.css";
import Product from "../models/Product";
import { getProducts } from "../services/productService";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  let maxPrice: number | null = Number(searchParams.get("max-price"));
  if (isNaN(maxPrice)) maxPrice = null;
  const includes: string | null = searchParams.get("includes");
  let limit: number | null = Number(searchParams.get("limit"));
  if (isNaN(limit)) limit = null;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const response: Product[] = await getProducts(maxPrice, includes, limit);
      console.log(response);
      setProducts(response);
    })();
  }, [maxPrice, includes, limit]);

  return (
    <ul className="ProductList">
      <Filter />
      {products.map((item) => (
        <ProductCard product={item} key={item._id} />
      ))}
    </ul>
  );
};

export default ProductList;
