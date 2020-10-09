import React, { useEffect, useState } from "react";
import { Col, Button } from "reactstrap";
import "./pokemonDetails.scss";

function GamesDetails({ games }) {
  useEffect(() => {
    const gameContainer = document.getElementById("game-container"); //TODO add swipe controls
  });

  return (
    <React.Fragment>
      <div
        id="game-container"
        style={{
          height: "7rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflowX: "scroll",
        }}
      >
        {games.map((game) => {
          return (
            <Col xs={4}>
              <p style={{ textTransform: "uppercase" }} className="text-center">
                {game.version.name}
              </p>
            </Col>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default GamesDetails;
