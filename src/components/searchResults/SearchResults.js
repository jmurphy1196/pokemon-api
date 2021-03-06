import React, { useEffect } from "react";

import { Col, Row } from "reactstrap";
import "./searchResults.scss";

function SearchResults({ name, number, setSelected, setSearchResults }) {
  useEffect(() => {
    let SearchResult = document.querySelector(`#search-${number}`);
    SearchResult.style.top = `${(number + 1.2) * 2}rem`;
  });

  return (
    <React.Fragment>
      <Row
        onClick={() => {
          setSelected(name);
          let searchBtn = document.getElementById("search-btn");
          searchBtn.value = name;
          setSearchResults({
            ...SearchResults,
            displayResults: false,
          });
        }}
        className="search-result"
        id={`search-${number}`}
      >
        <Col xs={12} className="search-col">
          <p className="text-center">{name}</p>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default SearchResults;
