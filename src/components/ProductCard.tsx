import Product from "../models/Product";
import "./ProductCard.css";
import comingSoon from "../images/coming-soon.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCartHandler } = useContext(CartContext);

  return (
    <li className="ProductCard">
      <Link to={`/products/${encodeURIComponent(product._id!)}`}>
        <p>Product: {product.name}</p>
      </Link>
      <p>Price: {product.price}</p>
      {product.photoURL ? (
        <img src={product.photoURL} />
      ) : (
        <img src={comingSoon} />
      )}
      <button onClick={() => addToCartHandler(product)}>Add to cart</button>
    </li>
  );
};

export default ProductCard;
