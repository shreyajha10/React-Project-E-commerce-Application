import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import "./style.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="cart-card">
      <div className="cart-item">
        <img
          src={item.thumbnail}
          alt={item.title}
          width="200px"
          height="200px"
          className="thumbnail"
        />
        <h3 className="product-title">{item.title}</h3>
        <p className="product-description">{item.description}</p>
        <p className="product-price">Price: {item.price}</p>

        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  );
};
export default CartItem;
