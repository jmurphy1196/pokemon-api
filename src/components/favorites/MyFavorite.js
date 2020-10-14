import React from "react";
import { Col } from "reactstrap";
import "./myFavorite.scss";

//redux
import { connect } from "react-redux";

function MyFavorite({ authenticated, type, name, number, history }) {
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
            alt="pokemon "
            className={`poke-image-${type}`}
            onClick={() => {
              let lowerCaseName = name.toLowerCase();
              history.push(`/${lowerCaseName}`);
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
