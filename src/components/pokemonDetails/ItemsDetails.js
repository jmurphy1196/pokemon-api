import React from "react";
import { Col } from "reactstrap";

function ItemsDetails({ items }) {
  return (
    <React.Fragment>
      {items.length === 0 ? (
        <Col xs={12}>
          <p className="text-center">NO ITEMS</p>
        </Col>
      ) : null}
      {items.length > 0 &&
        items.map((item) => {
          return (
            <Col xs={12}>
              <p className="text-center">{item.item.name}</p>
            </Col>
          );
        })}
    </React.Fragment>
  );
}

export default ItemsDetails;
