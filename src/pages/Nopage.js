import React from "react";
import error404Image from "../imgs/404 error image.png"; // Import the image file
import Footer from "../components/Footer";

const Nopage = () => {
  return (
    <div>
      <header
        style={{
          fontFamily: "sans-serif",
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
        }}
      >
        Error 404 : not found
      </header>
      <img
        src={error404Image} // Use the imported image variable here
        alt="404 Error"
        style={{
          width: "60%",
          height: "50%",
          display: "block",
          margin: "0 auto",
        }}
      />

      <br></br>
      <br></br>
      <br></br>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Nopage;
