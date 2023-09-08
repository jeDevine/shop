import CartItem from "../models/CartItem";
import "./CartRow.css";
import comingSoon from "../images/coming-soon.jpg";
import CartContext from "../context/CartContext";
import { useContext } from "react";

interface Props {
  cartItem: CartItem;
}

const CartRow = ({ cartItem }: Props) => {
  const { deleteCartItemHandler, updateQuantityHandler } =
    useContext(CartContext);
  return (
    <tr className="CartRow">
      <td>
        {cartItem.product.photoURL ? (
          <img src={cartItem.product.photoURL} alt={cartItem.product.name} />
        ) : (
          <img src={comingSoon} alt="coming soon" />
        )}
      </td>
      <td>{cartItem.product.name}</td>
      <td>${cartItem.product.price}</td>
      <td>
        <button
          disabled={cartItem.quantity === 1}
          onClick={() =>
            updateQuantityHandler(cartItem.product._id!, {
              quantity: cartItem.quantity - 1,
            })
          }
        >
          -
        </button>
        {cartItem.quantity}
        <button
          onClick={() =>
            updateQuantityHandler(cartItem.product._id!, {
              quantity: cartItem.quantity + 1,
            })
          }
        >
          +
        </button>
      </td>
      <td>
        <button onClick={() => deleteCartItemHandler(cartItem.product._id!)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
