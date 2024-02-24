import React, { useEffect, useState } from "react";
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../modules/MapContainer.module.scss";

const MapContainer = ({ location }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    const loadMap = async () => {
      const leafletMap = (
        <LeafletMap
          center={[location.lat, location.lon]}
          zoom={13}
          style={{ width: "100%", height: "700px" }}
        >
          <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lon]}>
            <Popup>{`Latitude: ${location.lat}, Longitude: ${location.lon}`}</Popup>
          </Marker>
        </LeafletMap>
      );
      setMap(leafletMap);
    };

    loadMap();
  }, [location]);

  return (
    <>
      <div className={styles["map-container"]}>{map}</div>
    </>
  );
};

export default MapContainer;
