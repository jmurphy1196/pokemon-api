import React from "react";
import { Col } from "reactstrap";

function TypesDetails({ types }) {
  return (
    <React.Fragment>
      <Col xs={12}>
        <p style={{ textTransform: "capitalize" }} className="text-center">
          {types[0].type.name}
        </p>
      </Col>
    </React.Fragment>
  );
}

export default TypesDetails;
