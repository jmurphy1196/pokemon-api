import React, { useState } from "react";
import { Col } from "reactstrap";
import "./addFavorites.scss";
//redux
import { connect } from "react-redux";
import { addFavorite } from "../../redux/actions/dataActions";

function AddFavorite({
  authenticated,
  favorites,
  addFavorite,
  name,
  type,
  number,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleAddFavorite = () => {
    addFavorite({
      pokemonName: name || "ditto", //if no name default to ditto
      pokeNumber: number,
      type: type.type.name,
    });
  };

  let favoriteText = isFavorite ? "ADDED TO FAVORITES" : "ADD TO MY FAVORITES";
  return (
    <React.Fragment>
      <Col xs={12} className="mt-5">
        <div
          onClick={() => {
            if (authenticated) {
              handleAddFavorite();
              setIsFavorite(true);
            } else {
              window.location.href = "/login";
            }
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="text-center" className="fav">
            {favoriteText}{" "}
            <i
              style={{ position: "relative", bottom: "2px" }}
              className="fa fa-star"
            ></i>{" "}
          </p>
        </div>
      </Col>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.data.favorites,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { addFavorite })(AddFavorite);
