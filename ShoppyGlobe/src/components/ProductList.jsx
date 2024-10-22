import { useEffect } from "react";
import useFetchData from "../utils/useFetchData";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
  const { data, error, loading } = useFetchData(
    "https://dummyjson.com/products"
  );
  const searchTerm = useSelector((state) =>
    state.cart.searchTerm.toLowerCase()
  );

  useEffect(() => {
    if (data) {
      console.log("Data fetched successfully", data);
    }
  }, [data]);

  if (error) {
    return <p>Error in loading {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredProducts = data.products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div className="product-k">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))
        ) : (
          <p>No Product Found.</p>
        )}
      </div>
    </>
  );
}

export default ProductList;
