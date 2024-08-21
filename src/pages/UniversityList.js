import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UniversityList = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUniversityData = () => {
    if (query.trim()) {
      fetch(`http://universities.hipolabs.com/search?country=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setErrorMessage(""); // Clear error message on successful fetch
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setErrorMessage("Failed to fetch data. Please try again."); // Set error message on fetch error
        });
    } else {
      setErrorMessage("Please enter a valid country");
    }
  };

  console.log(data);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="mains">
        <div>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Enter country"
          />
          <button onClick={fetchUniversityData}>Search</button>
        </div>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        {data && (
          <div>
            <h2>Schools in {query}:</h2>
            <ul>
              {data.map((school, index) => (
                <li key={index}>
                  {school.name}, {school.web_pages}
                  <br></br>
                  <br></br>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default UniversityList;
