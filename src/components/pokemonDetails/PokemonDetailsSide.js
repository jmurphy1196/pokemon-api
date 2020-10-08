import React from "react";
import { Row, Col } from "reactstrap";
import "./pokemonDetails.scss";

function PokemonDetailsSide({ currentPage, setCurrentPage }) {
  return (
    <React.Fragment>
      <Row className="stat-row">
        <Col
          onClick={() => setCurrentPage("STATS")}
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
        <Col onClick={() => setCurrentPage("TYPES")} xs={12}>
          {currentPage === "TYPES" ? (
            <p className="side-para text-center active ">TYPES</p>
          ) : (
            <p className="side-para text-center ">TYPES</p>
          )}
        </Col>
      </Row>
      <Row className="stat-row">
        <Col onClick={() => setCurrentPage("ABILITIES")} xs={12}>
          {currentPage === "ABILITIES" ? (
            <p className="side-para text-center active ">ABILITIES</p>
          ) : (
            <p className="side-para text-center ">ABILITIES</p>
          )}
        </Col>
      </Row>
      <Row className="stat-row">
        <Col onClick={() => setCurrentPage("ITEMS")} xs={12}>
          {currentPage === "ITEMS" ? (
            <p className="side-para text-center active ">ITEMS</p>
          ) : (
            <p className="side-para text-center ">ITEMS</p>
          )}
        </Col>
      </Row>
      <Row className="stat-row">
        <Col onClick={() => setCurrentPage("GAMES")} xs={12}>
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
