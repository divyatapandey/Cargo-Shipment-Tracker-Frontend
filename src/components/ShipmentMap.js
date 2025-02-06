import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ShipmentMap = ({ lat, lng, location }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup>Current Location: {location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ShipmentMap;
