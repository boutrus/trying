import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css files/content.css";

export const Content = () => {
  const [showAPIs, setShowAPIs] = useState(false);
  const [showTrivia, setShowTrivia] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleClick = (route) => {
    window.location.href = route;
  };
  return (
    <>
      <Header />
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShowAPIs(!showAPIs)}>
          APIs
        </button>
        {showAPIs && (
          <div className="dropdown-content">
            <button
              className="apibutton"
              onClick={() => handleClick("/binance")}
            >
              Trading Pair API
            </button>
            <br />
            <button
              className="apibutton"
              onClick={() => handleClick("/weather")}
            >
              Weather API
            </button>
            <br />
            <button
              className="apibutton"
              onClick={() => handleClick("/randomuser")}
            >
              Get Random User
            </button>
            <br />
            <button className="apibutton" onClick={() => handleClick("/ip")}>
              IP API
            </button>
            <br />
            <li>
              <button
                className="apibutton"
                onClick={() => handleClick("/universitylist")}
              >
                University List by Country
              </button>
            </li>
          </div>
        )}
        <br />

        <button className="dropbtn" onClick={() => setShowTrivia(!showTrivia)}>
          Trivia
        </button>
        {showTrivia && (
          <div className="dropdown-content">
            <a href="/src/pages">Trivia 1</a>
            <a href="#">Trivia 2</a>
            <a href="#">Trivia 3</a>
          </div>
        )}
        <br />

        <button
          className="dropbtn"
          onClick={() => setShowServices(!showServices)}
        >
          Services
        </button>
        {showServices && (
          <div className="dropdown-content">
            <a href="#">Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
          </div>
        )}
        <br />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};
