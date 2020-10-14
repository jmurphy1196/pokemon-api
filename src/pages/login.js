import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Form, Button, Label } from "reactstrap";
import { loginUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
//scss
import "./login.scss";
function Login({ history, loginUser, errors }) {
  let isError = false;
  if (errors) {
    isError = true;
  }

  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  const [images, setImages] = useState({
    random1,
    random2,
    random3,
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    let imagesTimer;
    imagesTimer = setInterval(() => {
      setImages({
        ...setImages,
        random1: Math.floor(Math.random() * 255),
        random2: Math.floor(Math.random() * 255),
        random3: Math.floor(Math.random() * 255),
      });
    }, 6300);
    return () => {
      clearInterval(imagesTimer);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData, history);
    } catch (err) {
      console.log(err);
    }
  };

  const pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`;
  return (
    <React.Fragment>
      <div className="form-container mt-5">
        <Row>
          <Col xs={12}>
            <h1 className="text-center">LOGIN</h1>
          </Col>
        </Row>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Row className="mt-5">
            <Col xs={12}>
              <Label>Email:</Label>
              {isError === false ? (
                <Input
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="text"
                />
              ) : (
                <Input
                  invalid={errors.email ? true : false}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="text"
                />
              )}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <Label>Password:</Label>
              {isError === false ? (
                <Input
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type="password"
                />
              ) : (
                <Input
                  invalid={errors.password ? true : false}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type="password"
                />
              )}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button type="submit" className="text-center">
                LOGIN
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <p className="text-center">
                Don't have an account? <Link to="/signup">Sign up.</Link>
              </p>
            </Col>
          </Row>
        </Form>
        <Row
          style={{
            position: "absolute",
            top: "80%",

            width: "100%",
          }}
        >
          <Col
            xs={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt="pokemon"
              className="loading-img"
              src={`${pokeImgUrl}/${images.random1}.png`}
            />
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={4}
          >
            <img
              alt="pokemon"
              className="loading-img"
              src={`${pokeImgUrl}/${images.random2}.png`}
            />
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={4}
          >
            <img
              alt="pokemon"
              className="loading-img"
              src={`${pokeImgUrl}/${images.random3}.png`}
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  errors: state.UI.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
