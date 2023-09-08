import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../services/productService";
import Product from "../models/Product";
import comingSoon from "../images/coming-soon.jpg";
import CartContext from "../context/CartContext";

const ProductDetails = () => {
  const { addToCartHandler } = useContext(CartContext);
  const id = useParams().id;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // getProduct(id!).then((response: any) => {
    //   setProduct(response);
    // });
    (async () => {
      setProduct(await getProduct(id!));
    })();
  }, [id]);

  return (
    <div className="ProductDetails">
      {product ? (
        <>
          <p>Product: {product.name}</p>
          <p>Price {product.price}</p>
          {product.photoURL ? (
            <img src={product.photoURL} alt={product.name} />
          ) : (
            <img src={comingSoon} alt="coming soon" />
          )}
          <button onClick={() => addToCartHandler(product)}>Add to cart</button>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ProductDetails;
