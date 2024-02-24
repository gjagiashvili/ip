import React, { useState } from "react";
import axios from "axios";
import InfoContainer from "./components/InfoContainer";
import MapContainer from "./components/MapContainer";
import "./App.scss";
import img from "./assets/icon-arrow.svg";

const App = () => {
  const [ipInput, setIpInput] = useState("");
  const [ipDetails, setIpDetails] = useState(null);
  const [error, setError] = useState("");

  const fetchIpDetails = async () => {
    const response = await axios.get(`https://ipapi.co/${ipInput}/json/`);
    setIpDetails(response.data);
    setError("");
  };

  const handleInputChange = (e) => {
    setIpInput(e.target.value);
  };

  const handleButtonClick = () => {
    fetchIpDetails();
  };

  return (
    <div className="app">
      <div className="bg-image"></div>
      <h1>IP Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter IP Adress..."
          value={ipInput}
          className="input"
          onChange={handleInputChange}
          maxLength="20"
        />
        <button className="button" onClick={handleButtonClick}>
          <img src={img} />
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {ipDetails && (
        <>
          <div className="info-container">
            <InfoContainer
              ipAddress={ipDetails.ip}
              location={`${ipDetails.city}, ${ipDetails.region}, ${ipDetails.country_name}`}
              timezone={ipDetails.timezone}
              isp={ipDetails.org}
            />
          </div>
          <div className="map-container">
            <MapContainer
              location={{ lat: ipDetails.latitude, lon: ipDetails.longitude }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
