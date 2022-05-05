import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "react-bootstrap-icons/dist/icons/search";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    navigate(`/results?search_query=${searchValue}`);
    // <Navigate to={`/search?searchValue=${searchValue}`} />;
  };

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          className="searchbar__input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button type="submit">
          <Search style={{ color: "white" }} />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
