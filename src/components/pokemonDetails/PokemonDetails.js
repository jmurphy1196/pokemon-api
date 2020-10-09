import React, { useState } from "react";
//stats details
import StatsDetails from "./StatsDetails";
//types details
import TypesDetails from "./TypesDetails";
//ability details
import AbilitiesDetails from "./AbilitiesDetails";
//item details
import ItemsDetails from "./ItemsDetails";
//games details
import GamesDetails from "./GamesDetails";
//add to favorites
import AddFavorite from "../favorites/AddFavorite";
import "./pokemonDetails.scss";

//bootstrap
import { Row, Col, Button } from "reactstrap";

function PokemonDetails({
  name,
  image,
  images,
  stats,
  weight,
  height,
  currentPage,
  types,
  abilities,
  held_items,
  games,
}) {
  const [currentImage, setCurrentImage] = useState(null);
  currentImage === null ? (image = image) : (image = images[currentImage]);
  console.log(stats);

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <p className="text-center">{name}</p>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              let i = 0;
              currentImage === null ? (i = 0) : (i = currentImage - 1);
              if (images[i] === null) {
                i += 1;
              }
              if (i < 0) {
                i = images.length - 1;
              }
              setCurrentImage(i);
            }}
            color="warning"
            style={{ marginRight: "10%" }}
          >
            <i className="fa fa-arrow-left"></i>
          </Button>
          <img src={image} style={{ width: "30%" }} />
          <Button
            onClick={() => {
              let i = 0;
              currentImage === null ? (i = 0) : (i = currentImage + 1);
              if (images[i] === null) {
                i += 1;
              }
              if (i > images.length - 1) {
                i = 0;
              }
              setCurrentImage(i);
            }}
            style={{ marginLeft: "10%" }}
            color="warning"
          >
            <i className="fa fa-arrow-right"></i>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-around",
          }}
        >
          <p>Height: {height}m</p>
          <p>Weight: {weight / 10}kg</p>
        </Col>
      </Row>
      <Row className="mt-5">
        {currentPage === "STATS" && <StatsDetails stats={stats} />}
        {currentPage === "TYPES" && <TypesDetails types={types} />}
        {currentPage === "ABILITIES" && (
          <AbilitiesDetails abilities={abilities} />
        )}
        {currentPage === "ITEMS" && <ItemsDetails items={held_items} />}
        {currentPage === "GAMES" && <GamesDetails games={games} />}
      </Row>
      <Row className="mt-5">
        <AddFavorite />
      </Row>
    </React.Fragment>
  );
}

export default PokemonDetails;
