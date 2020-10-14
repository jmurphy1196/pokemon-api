import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "reactstrap";
import MyFavorite from "../components/favorites/MyFavorite";
//redux
import { connect } from "react-redux";
import { getFavorites } from "../redux/actions/dataActions";
import "./favorite.scss";
function Favorites({ history, authenticated, getFavorites, favorites }) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <React.Fragment>
      <Row
        className="mt-5"
        style={{
          backgroundColor: "white",
          minHeight: "80vh",
          height: "fit-content",
          position: "absolute",
          width: "100%",
        }}
      >
        <Col
          style={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          xs={12}
        >
          {" "}
          <h1 style={{ textTransform: "uppercase" }} className="text-center">
            Favorites
          </h1>{" "}
        </Col>
        {favorites.map((favorite, i) => {
          return (
            <Col xs={12} md={4}>
              <div
                style={{
                  width: "100 %",
                  marginBottom: "25%",
                }}
              >
                <MyFavorite
                  history={history}
                  type={favorite.type}
                  number={favorite.number}
                  name={favorite.name}
                  key={i}
                />
              </div>
            </Col>
          );
        })}

        <div
          className="pagination-btns-container"
          style={{
            display: "inline-grid",
            gridTemplateColumns: "1fr ",
            position: "absolute",

            width: "100%",
            top: "90%",
            bottom: 0,
            left: 0,
            height: "10%",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {page > 1 ? (
            <Button
              onClick={() => {
                getFavorites(page - 1);
                setPage(page - 1);
              }}
              style={{ width: "5rem" }}
            >
              <i className="fa fa-arrow-left"></i>
            </Button>
          ) : null}

          {favorites.length === 3 ? (
            <Button
              onClick={() => {
                getFavorites(page + 1);
                setPage(page + 1);
              }}
              style={{ width: "5rem" }}
            >
              <i className="fa fa-arrow-right"></i>
            </Button>
          ) : null}
        </div>
      </Row>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  favorites: state.data.pageFavorites,
});

export default connect(mapStateToProps, { getFavorites })(Favorites);
