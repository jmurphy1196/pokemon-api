import React from "react";
import { Col } from "reactstrap";

function GamesDetails({ games }) {
  return (
    <React.Fragment>
      {games.map((game) => {
        return (
          <Col xs={6}>
            <p className="text-center">{game.version.name}</p>
          </Col>
        );
      })}
    </React.Fragment>
  );
}

export default GamesDetails;
