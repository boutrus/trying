import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Content } from "./pages/Content";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import BinanceApi from "./pages/BinanceApi";
import WeatherApi from "./pages/WeatherApi";
import Bored from "./pages/Bored";
import IP from "./pages/IP";
import RandomUser from "./pages/RandomUser";
import UniversityList from "./pages/UniversityList";
import Grid from "./pages/Grid";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/binance" element={<BinanceApi />} />
          <Route path="/weather" element={<WeatherApi />} />
          <Route path="/bored" element={<Bored />} />
          <Route path="/ip" element={<IP />} />
          <Route path="/randomuser" element={<RandomUser />} />
          <Route path="/universitylist" element={<UniversityList />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
