import React from "react";
import { Col } from "reactstrap";
import "./pokemonDetails.scss";

function GamesDetails({ games }) {
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
        {games.map((game, i) => {
          return (
            <Col key={i} xs={4}>
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
