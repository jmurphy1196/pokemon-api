import React from "react";
import { Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
//add query function
import addQuery from "../../util/addQuery";

import "./pokemonDetails.scss";

function PokemonDetailsSide({ currentPage, setCurrentPage, history }) {
  const location = useLocation();

  return (
    <React.Fragment>
      <Row className="stat-row">
        <Col
          onClick={() => {
            addQuery("page", "stats", location, history);
            setCurrentPage("STATS");
          }}
          xs={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          md={12}
        >
          {currentPage === "STATS" ? (
            <p className="side-para text-center active ">STATS</p>
          ) : (
            <p className="side-para text-center ">STATS</p>
          )}
        </Col>

        <Col
          onClick={() => {
            addQuery("page", "types", location, history);
            setCurrentPage("TYPES");
          }}
          xs={4}
          md={12}
        >
          {currentPage === "TYPES" ? (
            <p className="side-para text-center active ">TYPES</p>
          ) : (
            <p className="side-para text-center ">TYPES</p>
          )}
        </Col>

        <Col
          onClick={() => {
            addQuery("page", "abilities", location, history);
            setCurrentPage("ABILITIES");
          }}
          xs={4}
          md={12}
        >
          {currentPage === "ABILITIES" ? (
            <p className="side-para text-center active ">ABILITIES</p>
          ) : (
            <p className="side-para text-center ">ABILITIES</p>
          )}
        </Col>

        <Col
          onClick={() => {
            addQuery("page", "items", location, history);
            setCurrentPage("ITEMS");
          }}
          xs={4}
          md={12}
        >
          {currentPage === "ITEMS" ? (
            <p className="side-para text-center active ">ITEMS</p>
          ) : (
            <p className="side-para text-center ">ITEMS</p>
          )}
        </Col>

        <Col
          onClick={() => {
            addQuery("page", "games", location, history);
            setCurrentPage("GAMES");
          }}
          xs={4}
          md={12}
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
