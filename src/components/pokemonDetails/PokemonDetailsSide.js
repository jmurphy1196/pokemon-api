import React from "react";
import { Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";

import "./pokemonDetails.scss";

function PokemonDetailsSide({ currentPage, setCurrentPage, history }) {
  const location = useLocation();
  const addQuery = (key, value) => {
    let pathname = location.pathname;
    // returns path: '/app/books'
    let searchParams = new URLSearchParams(location.search);
    // returns the existing query string: '?type=fiction&author=fahid'
    searchParams.set(key, value);
    history.push({
      pathname: pathname,
      search: searchParams.toString(),
    });
  };
  return (
    <React.Fragment>
      <Row className="stat-row">
        <Col
          onClick={() => {
            addQuery("page", "stats");
            setCurrentPage("STATS");
          }}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currentPage === "STATS" ? (
            <p className="side-para text-center active ">STATS</p>
          ) : (
            <p className="side-para text-center ">STATS</p>
          )}
        </Col>
      </Row>
      <Row className="stat-row">
        <Col
          onClick={() => {
            addQuery("page", "types");
            setCurrentPage("TYPES");
          }}
          xs={12}
        >
          {currentPage === "TYPES" ? (
            <p className="side-para text-center active ">TYPES</p>
          ) : (
            <p className="side-para text-center ">TYPES</p>
          )}
        </Col>
      </Row>
      <Row className="stat-row">
        <Col
          onClick={() => {
            addQuery("page", "abilities");
            setCurrentPage("ABILITIES");
          }}
          xs={12}
        >
          {currentPage === "ABILITIES" ? (
            <p className="side-para text-center active ">ABILITIES</p>
          ) : (
            <p className="side-para text-center ">ABILITIES</p>
          )}
        </Col>
      </Row>
      <Row className="stat-row">
        <Col
          onClick={() => {
            addQuery("page", "items");
            setCurrentPage("ITEMS");
          }}
          xs={12}
        >
          {currentPage === "ITEMS" ? (
            <p className="side-para text-center active ">ITEMS</p>
          ) : (
            <p className="side-para text-center ">ITEMS</p>
          )}
        </Col>
      </Row>
      <Row className="stat-row">
        <Col
          onClick={() => {
            addQuery("page", "games");
            setCurrentPage("GAMES");
          }}
          xs={12}
        >
          {currentPage === "GAMES" ? (
            <p className="side-para text-center active ">GAMES</p>
          ) : (
            <p className="side-para text-center ">GAMES</p>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default PokemonDetailsSide;
