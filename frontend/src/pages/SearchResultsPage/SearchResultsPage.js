import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useVideoSearchResults from "../../hooks/useVideoSearchResults";
import HomeVideoCard from "../../components/HomeVideoCard/HomeVideoCard";

function SearchResultsPage(props) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search_query");
  const [searchResults] = useVideoSearchResults(searchTerm);

  return (
    <div>
      <h1>Search Results Page</h1>
      {searchResults != null && (
        <tbody>
          {searchResults.map((video) => {
            return (
              <td>
                <HomeVideoCard video={video} />
              </td>
            );
          })}
        </tbody>
      )}
    </div>
  );
}

export default SearchResultsPage;
