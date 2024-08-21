import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css files/bored.css";

function Bored() {
  const [data, setData] = useState(null);

  const fetchBoredData = () => {
    // Fetch user data from API
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching quote:", error));
  };

  return (
    <div>
      <Header />
      <h1>Bored API response</h1>

      <div>
        <button onClick={fetchBoredData}>Get Activity</button>
      </div>
      <br></br>
      {data && (
        <div className="main">
          <h2 className="header">Suggested Activity:</h2>
          <p className="binance">Activity: {data.activity}</p>
          <p className="binance">Type: {data.type}</p>
          <p className="binance">Participants: {data.participants}</p>
        </div>
      )}

      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Bored;
