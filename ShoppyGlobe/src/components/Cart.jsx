import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items || []);

  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) =>
            item ? <CartItem key={item.id} item={item} /> : null
          )
        )}
      </div>
    </>
  );
};
export default Cart;
