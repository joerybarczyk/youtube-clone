import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function SearchResultsPage(props) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search_query");

  return (
    <div>
      <h1>Search Results Page</h1>
      <h3>Search term: {searchTerm}</h3>
    </div>
  );
}

export default SearchResultsPage;
