import React, { useState, useEffect } from "react";
import { Col, Row, Form, Input, Button } from "reactstrap";
import SearchResult from "../components/searchResults/SearchResults";
//pokemondetails
import PokemonDetails from "../components/pokemonDetails/PokemonDetails";
import PokemonDetailsSide from "../components/pokemonDetails/PokemonDetailsSide";
//list of all pokemon names
import { pokemonNames } from "../util/pokemonNames";
//calls api based off pokemon name
import { getSearchResult } from "../util/getSearchResult";
import "./home.scss";

function Home() {
  const [searchResults, setsearchResults] = useState({
    search: null,
    displayResults: true,
  });
  const [selected, setselected] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  let numberOfResult = -1;
  useEffect(() => {
    console.log(selectedDetails);
    return () => {};
  });
  return (
    <React.Fragment>
      <Row className="home-top-row">
        <Col xs={12}>
          <Form inline>
            <Input
              defaultValue={selected}
              style={{ width: "90%" }}
              onChange={(e) => {
                console.log(e.target.value);
                if (searchResults.search !== null) {
                  if (searchResults.search.trim().length < 2) {
                    console.log("setting nul");
                    setsearchResults({ ...searchResults, search: null });
                  } else {
                    setsearchResults({
                      ...searchResults,
                      search: e.target.value,
                    });
                  }
                } else {
                  setsearchResults({
                    ...searchResults,
                    search: e.target.value,
                  });
                }
              }}
              className="text-center"
              placeholder="Search a pokemon!"
            />
            <Button
              onClick={async () => {
                setsearchResults({
                  ...searchResults,
                  search: null,
                });
                let data = await getSearchResult(selected.toLowerCase()); //enters search result must be lowercase to find anything
                setSelectedDetails({
                  ...selectedDetails,
                  ...data,
                });
                setCurrentPage("STATS");
              }}
              color="danger"
              style={{
                width: "10%",
                padding: "1.5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i style={{ fontSize: "2rem" }} className="fa fa-search"></i>
            </Button>
          </Form>
          {/* handles all search results based off user input and displays their text underneath input field */}
          {searchResults.search !== null &&
          searchResults.displayResults === true
            ? pokemonNames.map((result, i) => {
                if (result.toLowerCase().includes(searchResults.search)) {
                  numberOfResult += 1;
                  return (
                    <SearchResult
                      setSelected={setselected}
                      name={result}
                      number={numberOfResult}
                    />
                  );
                }
              })
            : null}
        </Col>
      </Row>
      <Row className="home-mid-row">
        <Col
          className="left-panel"
          xs={12}
          md={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          {/* side left panel for navigating pokemon options passes the setcurrentPage state */}
          {currentPage !== null ? (
            <PokemonDetailsSide
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <PokemonDetailsSide
              setCurrentPage={setCurrentPage}
              currentPage="none"
            />
          )}
        </Col>
        <Col className="right-panel" xs={12} md={8}>
          {selectedDetails !== null ? (
            <PokemonDetails
              currentPage={currentPage}
              name={selected}
              image={selectedDetails.data.sprites.front_default}
              images={selectedDetails.data.images}
              stats={selectedDetails.data.stats}
              height={selectedDetails.data.height}
              weight={selectedDetails.data.weight}
            />
          ) : null}
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Home;
/* */
