import React from "react";
import { GoogleMap, Marker } from "react-google-maps";
import markers from "./markersData.json";

export default function Map() {
  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: -34.86814466586775, lng: -61.52956740373243 }}
      >
        {markers?.markers.map((marker, i) => (
          <Marker
            key={i}
            position={{
              lat: marker.coordinates[0],
              lng: marker.coordinates[1],
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
