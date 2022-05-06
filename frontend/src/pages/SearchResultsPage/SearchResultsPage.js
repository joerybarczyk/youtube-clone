import React from "react";
import { useSearchParams } from "react-router-dom";
import useVideoSearchResults from "../../hooks/useVideoSearchResults";
import ResultVideoCard from "../../components/ResultVideoCard/ResultVideoCard";

function SearchResultsPage(props) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search_query");
  const [searchResults] = useVideoSearchResults(searchTerm, 10);

  return (
    <div>
      {searchResults != null && (
        <div className="results">
          {searchResults.map((video, index) => {
            return (
              <>
                <ResultVideoCard key={index} video={video} />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
