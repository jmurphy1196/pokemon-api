import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./myFavorite.scss";
import poke from "../../images/ditto.png";
import poke2 from "../../images/charmander.png";
import poke3 from "../../images/bulb.png";

//redux
import { connect } from "react-redux";

function MyFavorite({ authenticated, type, name, number }) {
  return (
    <React.Fragment>
      <Col className={`${type}-col`} xs={12} md={12}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          className="favorite-card"
        >
          {" "}
          <p
            style={{ position: "relative", paddingTop: "20px" }}
            className="text-center"
          >
            {`${name}`}
          </p>
          <img
            className={`poke-image-${type}`}
            onClick={() => {
              let lowerCaseName = name.toLowerCase();
              window.location = `/${lowerCaseName}`;
            }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
          />
          <p style={{ paddingBottom: "20px" }}> TYPE: {`${type}`}</p>
        </div>
      </Col>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(MyFavorite);
