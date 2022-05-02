import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("SEARCH");
  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    navigate(`/search?searchValue=${searchValue}`);
    // <Navigate to={`/search?searchValue=${searchValue}`} />;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
