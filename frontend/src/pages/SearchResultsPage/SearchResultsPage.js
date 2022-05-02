import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchResultsPage(props) {
  const { location } = useLocation;
  return (
    <div>
      <h1>{props.search}</h1>
      {console.log(location)}
    </div>
  );
}

export default SearchResultsPage;
