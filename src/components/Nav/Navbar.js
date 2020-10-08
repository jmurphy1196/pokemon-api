import React, { useEffect } from "react";
//router
import { Link } from "react-router-dom";
import logo from "../../images/pokelogo.png";

//styles
import "./navbar.scss";

function Navbar() {
  let loginTimer;
  let delLoginTImer;
  const displayLoginBtn = () => {
    //  transform: translateX(-100px) rotate(360deg);
    let pokeBall = document.getElementById("poke-ball");
    let loginBtn = document.getElementById("login-btn");
    pokeBall.style.transform = "translateX(-100px) rotate(360deg)";
    loginBtn.style.display = "flex";
    loginBtn.style.position = "absolute";
    loginBtn.style.top = "40%";
    loginBtn.style.bottom = 1;
    let text = "login";
    let i = 1;
    function writeText() {
      if (!delLoginTImer) {
        let text = "Login";

        if (i > text.length) {
          console.log("deleted");
          clearInterval(loginTimer);
        }
        loginBtn.innerHTML = text.slice(0, i);
        i++;
      } else {
        clearInterval(delLoginTImer);
        delLoginTImer = null;
      }
    }
    loginTimer = setInterval(writeText, 150);
  };
  const turnOffLoginBtn = () => {
    clearInterval(loginTimer);
    let pokeBall = document.getElementById("poke-ball");
    let loginBtn = document.getElementById("login-btn");
    pokeBall.style.transform = "translateX(0) rotate(0)";
    let text = "Login";
    let i = 0;
    let j = 0;
    function delText() {
      if (!loginTimer) {
        if (i > text.length) {
          console.log("deleted");
          clearInterval(delLoginTImer);
        }
        loginBtn.innerHTML = text.slice(i, text.length);
        i++;
      } else {
        clearInterval(loginTimer);
        loginTimer = null;
      }
    }

    delLoginTImer = setInterval(delText, 125);
    console.log(j);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <Link to="/">
        <img id="brand-img" src={logo} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav center ">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            {" "}
            <li className="nav-item">Pokemon</li>
          </Link>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            {" "}
            <li className="nav-item">My Favorites</li>
          </Link>
        </ul>

        <ul className="navbar-nav ml-auto">
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="nav-item" onMouseLeave={turnOffLoginBtn}>
              <div className="poke-ball-container">
                <img
                  onMouseEnter={displayLoginBtn}
                  id="poke-ball"
                  src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-pokemon-go-game-icon-png-22.png"
                />
              </div>
              <p id="login-btn"></p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
