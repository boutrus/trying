import React from "react";
import "../css files/grid.css";

const Grid = () => {
  const handleClick = (route) => {
    window.location.href = route;
  };

  return (
    <div className="grid-container">
      <div className="grid-item1">
        <p className="fill-text">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>A responsive website adapts seamlessly to various devices and
          screen sizes, ensuring an optimal viewing experience for users across
          smartphones, tablets, and desktops. By employing fluid grids, flexible
          images, and media queries, it dynamically adjusts layout and content
          presentation, maintaining usability and readability regardless of the
          device. This approach enhances accessibility and user engagement, as
          visitors can effortlessly navigate and interact with the site's
          features without encountering frustrating display issues. Embracing
          responsive design empowers businesses to reach broader audiences and
          deliver consistent, high-quality experiences, ultimately fostering
          loyalty and trust among users.
        </p>
      </div>
      <div className="grid-item2">
        <div>
          <p className="fill-text">
            Check out some of our most useful and popular APIs
          </p>
          <ul>
            <li>
              <button className="button" onClick={() => handleClick("/about")}>
                About Us
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/contact")}
              >
                Contact Us
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/binance")}
              >
                Trading Pair API
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/weather")}
              >
                Weather API
              </button>
            </li>
            <br />
            <li>
              <button className="button" onClick={() => handleClick("/bored")}>
                Bored API
              </button>
            </li>
            <br />
            <li>
              <button className="button" onClick={() => handleClick("/ip")}>
                IP API
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/randomuser")}
              >
                Random User API
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/universitylist")}
              >
                University List by Country
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid-item3">
        <div>
          <p className="fill-text">
            Also check out some of our most useful trivia quiz and games
          </p>
          <ul>
            <li>
              <button className="button" onClick={() => handleClick("/about")}>
                About Us
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/contact")}
              >
                Contact Us
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/binance")}
              >
                Trading Pair API
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/weather")}
              >
                Weather API
              </button>
            </li>
            <br />
            <li>
              <button className="button" onClick={() => handleClick("/bored")}>
                Bored API
              </button>
            </li>
            <br />
            <li>
              <button className="button" onClick={() => handleClick("/ip")}>
                IP API
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/randomuser")}
              >
                Random User API
              </button>
            </li>
            <br />
            <li>
              <button
                className="button"
                onClick={() => handleClick("/universitylist")}
              >
                University List by Country
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grid;
