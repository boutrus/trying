import React, { useState } from "react";
import "../css files/Binance.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BinanceApi() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const fetchTickerData = () => {
    // Fetch user data from API
    fetch(
      `https://api4.binance.com/api/v3/ticker/24hr?symbol=${query.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching quote:", error));
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Header />
      <h1>Binance 24hr Ticker Data</h1>

      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter Symbol"
        />
        <button onClick={fetchTickerData}>Get Ticker Data</button>
      </div>
      {data && (
        <div>
          <h2 className="header">Ticker Data:</h2>
          <p className="binance">Symbol: {data.symbol}</p>
          <p className="binance">Price Change: {data.priceChange}</p>
          <p className="binance">
            Price Change Percent: {data.priceChangePercent}
          </p>
          <p className="binance">
            Weighted Average Price: {data.weightedAvgPrice}
          </p>
          <p className="binance">Previous Close Price: {data.prevClosePrice}</p>
          <p className="binance">Last Price: {data.lastPrice}</p>
          <p className="binance">Last Quantity: {data.lastQty}</p>
          <p className="binance">Bid Price: {data.bidPrice}</p>
          <p className="binance">Bid Quantity: {data.bidQty}</p>
          <p className="binance">Ask Price: {data.askPrice}</p>
          <p className="binance">Ask Quantity: {data.askQty}</p>
          <p className="binance">Open Price: {data.openPrice}</p>
          <p className="binance">High Price: {data.highPrice}</p>
          <p className="binance">Low Price: {data.lowPrice}</p>
          <p className="binance">Volume: {data.volume}</p>
          <p className="binance">Quote Volume: {data.quoteVolume}</p>
          <p className="binance">Open Time: {data.openTime}</p>
          <p className="binance">Close Time: {data.closeTime}</p>
          <p className="binance">First ID: {data.firstId}</p>
          <p className="binance">Last ID: {data.lastId}</p>
          <p className="binance">Count: {data.count}</p>
        </div>
      )}

      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default BinanceApi;
