import React from "react";

import { Row, Col } from "reactstrap";

function StatsDetails() {
  return (
    <React.Fragment>
      <Col xs={6} md={4}>
        <p className="text-center">HP:100</p>
      </Col>
      <Col xs={6} md={4}>
        <p className="text-center">ATK:100</p>
      </Col>
      <Col xs={6} md={4}>
        <p className="text-center">DEF:200 </p>
      </Col>
    </React.Fragment>
  );
}

export default StatsDetails;
