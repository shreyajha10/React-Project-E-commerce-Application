import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import "./style.css";

function ProductDetails() {
  const params = useParams();
  const productId = params.id;

  const { data, error, loading } = useFetchData(
    `https://dummyjson.com/products/${productId}`
  );

  return (
    
<>
    <div className="product-detail-container">
      {data && (
        <div className="product-card">
          <div className="product-image">
          <img src={data.thumbnail} alt={data.title} className="product-img" />
          

         
          <h1 className="product-title">{data.title}</h1>
          <p className="product-description">{data.description}</p>
          <p className="product-price">Price: ${data.price}</p>
          </div>
          <div className="product-info">
          <p className="product-category">Category: {data.category}</p>
          <p className="product-stock">Stock: {data.stock} - {data.availabilityStatus}</p>
          <p className="product-rating">Rating: {data.rating} stars</p>
          <p className="product-brand">Brand: {data.brand}</p>
          <p>SKU: {data.sku}</p>
          <p>Dimensions: {`${data.dimensions.width} x ${data.dimensions.height} x ${data.dimensions.depth}`}</p>
          
          <p className="return-policy">Return Policy: {data.returnPolicy}</p>
          <p>Minimum Order Quantity: {data.minimumOrderQuantity}</p>
          <div className="reviews-section">
            <h2>Reviews:</h2>
            {data.reviews.length > 0 ? (
              data.reviews.map((review, index) => (
                <div key={index} className="review">
                  <p><strong>{review.reviewerName}:</strong> {review.comment}</p>
                  <p>Rating: {review.rating} stars</p>
                  <p>Date: {new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <p className="warranty">Warranty: {data.warrantyInformation}</p>
          <p className="shipping">Shipping: {data.shippingInformation}</p>
          {data.meta.qrCode && (
            <img src={data.meta.qrCode} alt="QR Code" className="qr-code" />
          )}
          </div>
        </div>
      )}
      
    </div>


    </>
  );
}

export default ProductDetails;