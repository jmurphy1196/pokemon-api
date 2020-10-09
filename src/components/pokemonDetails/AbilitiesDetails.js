import React from "react";
import { Col } from "reactstrap";

function AbilitiesDetails({ abilities }) {
  return (
    <React.Fragment>
      {abilities.map((ability, i) => {
        return (
          <Col key={i} xs={12} md={6}>
            <p className="text-center">{ability.ability.name}</p>
          </Col>
        );
      })}
    </React.Fragment>
  );
}

export default AbilitiesDetails;
