import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../utils/cartSlice'; // Import the action

const Search = () => {
  const [inputValue, setInputValue] = useState(""); // Local state to hold the input value
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update local state with search term
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
        onChange={handleInputChange} // Update input value on change
      />
      <button onClick={handleSearchClick}>Search</button> {/* Button to trigger search */}
    </div>
  );
};

export default Search;
