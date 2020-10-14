import React from "react";

import { Col } from "reactstrap";

function StatsDetails({ stats }) {
  return (
    <React.Fragment>
      <Col style={{ paddingBottom: "10px" }} xs={6} md={4}>
        <p className="text-center">HP:{stats[0].base_stat}</p>
      </Col>
      <Col style={{ paddingBottom: "10px" }} xs={6} md={4}>
        <p className="text-center">ATK:{stats[1].base_stat}</p>
      </Col>
      <Col style={{ paddingBottom: "10px" }} xs={6} md={4}>
        <p className="text-center">DEF:{stats[2].base_stat} </p>
      </Col>
      <Col style={{ paddingBottom: "10px" }} xs={6} md={4}>
        <p className="text-center">SPA:{stats[3].base_stat} </p>
      </Col>
      <Col style={{ paddingBottom: "10px" }} xs={6} md={4}>
        <p className="text-center">SPDEF:{stats[4].base_stat} </p>
      </Col>
      <Col style={{ paddingBottom: "10px" }} xs={6} md={4}>
        <p className="text-center">SPD:{stats[5].base_stat} </p>
      </Col>
    </React.Fragment>
  );
}

export default StatsDetails;
