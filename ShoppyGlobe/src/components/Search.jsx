import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../utils/cartSlice";

const Search = () => {
  const [inputValue, setInputValue] = useState(""); // Local state to hold the input value
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setSearchTerm(inputValue)); // Dispatch the search term to Redux when button is clicked
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>{" "}
    </div>
  );
};

export default Search;
