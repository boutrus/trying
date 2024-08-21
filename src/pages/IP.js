import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css files/bored.css";

function IP() {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    const fetchIP = async () => {
      // Fetch user data from API
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchIP();
  }, []);

  return (
    <div>
      <Header />
      <div className="main">
        <h1>Your IP Address:</h1>
        <p> {ipAddress}</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default IP;
