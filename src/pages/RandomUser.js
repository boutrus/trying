import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css files/RandomUser.css";

function RandomUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUser(data.results[0]); // Random user is in results array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRandomUser();
  }, []);

  return (
    <div>
      <Header />
      <h1>Random User:</h1>
      <div className="main">
        {user && (
          <div>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-img"
            />
            <p>Name: {`${user.name.first} ${user.name.last}`}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
          </div>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default RandomUser;
