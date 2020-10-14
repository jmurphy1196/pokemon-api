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
//react router location
import { useLocation } from "react-router-dom";
//add query
import addQuery from "../util/addQuery";
import "./home.scss";
//redux
import { connect } from "react-redux";
import { setFavorites } from "../redux/actions/dataActions";

function Home(props) {
  const location = useLocation();
  const { history, authenticated, setFavorites } = props;

  let searchParams = new URLSearchParams(location.search);
  let page = searchParams.get("page");
  let pokemon = props.match.params.pokemon;
  let data;
  console.log(`this is the pokemon ${pokemon}`);
  const [searchResults, setsearchResults] = useState({
    search: null,
    displayResults: true,
  });
  const [error_poke, setError_poke] = useState(false);
  const [selected, setselected] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  let numberOfResult = -1;
  useEffect(() => {
    const getPokemon = async () => {
      try {
        if (authenticated) {
          console.log("getting user favorites...");
          setFavorites();
        }
        if (pokemon) {
          data = await getSearchResult(pokemon);

          if (!selectedDetails && data.data.id) {
            setSelectedDetails({ ...selectedDetails, ...data });
            setselected(pokemon);
            if (!page) {
              //if no page is selected from query ?page=stats
              setCurrentPage("STATS");
              addQuery("page", "stats", location, history);
            } else {
              setCurrentPage(page.toUpperCase());
            }
          } else {
            setError_poke(true);
          }
        } else {
          data = await getSearchResult("ditto"); //defaults to ditto if no pokemon has been chosen

          setSelectedDetails({ ...selectedDetails, ...data });
          setCurrentPage("STATS");

          history.push(`/ditto`);
          if (!page) {
            addQuery("page", "stats", location, history);
          } else {
            addQuery("page", page, location, history);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPokemon();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchBtn = document.getElementById("search-btn");
    setsearchResults({
      ...searchResults,
      search: null,
    });
    data = await getSearchResult(searchBtn.value.toLowerCase()); //enters search result must be lowercase to find anything
    console.log(data);
    if (data) {
      if (error_poke) {
        setError_poke(false); //set to false if found pokemon
      }
      setSelectedDetails({
        ...selectedDetails,
        ...data,
      });
      pokemon = searchBtn.value.toLowerCase();

      setCurrentPage("STATS");
      pokemon = searchBtn.value.toLowerCase();
      history.push(`/${pokemon}`);
    } else {
      //found no pokemon
      setError_poke(true);
    }
  };
  return (
    <React.Fragment>
      <Row className="home-top-row">
        <Col xs={12}>
          <Form inline onSubmit={(e) => handleSubmit(e)}>
            <Input
              id="search-btn"
              defaultValue={selected}
              style={{ width: "90%" }}
              onChange={(e) => {
                console.log(e.target.value);
                if (searchResults.search !== null) {
                  if (searchResults.search.trim().length < 2) {
                    setsearchResults({ ...searchResults, search: null });
                  } else {
                    setsearchResults({
                      ...searchResults,
                      search: e.target.value,
                      displayResults: true,
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
              type="submit"
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
                if (
                  result.toLowerCase().includes(searchResults.search.trim())
                ) {
                  numberOfResult += 1;
                  return (
                    <SearchResult
                      key={i}
                      setSearchResults={setsearchResults}
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
              history={history}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <PokemonDetailsSide
              history={history}
              setCurrentPage={setCurrentPage}
              currentPage="none"
            />
          )}
        </Col>
        <Col className="right-panel" xs={12} md={8}>
          {selectedDetails !== null && error_poke === false ? (
            <PokemonDetails
              number={selectedDetails.data.id}
              games={selectedDetails.data.game_indices}
              held_items={selectedDetails.data.held_items}
              abilities={selectedDetails.data.abilities}
              types={selectedDetails.data.types}
              currentPage={currentPage}
              name={selectedDetails.data.species.name}
              image={selectedDetails.data.sprites.front_default}
              images={selectedDetails.data.images}
              stats={selectedDetails.data.stats}
              height={selectedDetails.data.height}
              weight={selectedDetails.data.weight}
            />
          ) : (
            <h1>NO SEARCH RESULT FOUND</h1>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { setFavorites })(Home);
/* */
