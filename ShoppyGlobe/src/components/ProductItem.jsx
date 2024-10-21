import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  return (
    <>
      <div className="product-list">
        <div className="product-item">
        <Link to={`/product/${product.id}`} className="to-view">
          <img
            src={product.thumbnail}
            alt={product.title}
            width="200px"
            height="200px"
            className="thumbnail"
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: {product.price}</p>
          <p className="view-detail">View Details </p>

          {/* <Link to={`/product/${product.id}`} className="to-view"> */}
            {/* View Details */}
          </Link>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
