import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { useState } from "react";

const MapContainer = (props) => {
  const { google } = props;

  const pickLocation = [
    {
      id: 1,
      name: "Kuldeep E-waste Disposal",
      location: { lat: 18.449282, lng: 73.877243 },
    },
    {
      id: 2,
      name: "SwaCH E-Waste Collection Center",
      location: { lat: 18.464478, lng: 73.855713 },
    },
    {
      id: 2,
      name: "Raj Scrap and E-Waste",
      location: { lat: 18.458149, lng: 73.881256 },
    },
  ];

  const [activeMarker, setActiveMarker] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setShowInfoWindow(true);
  };

  const onMapClick = () => {
    if (showInfoWindow) {
      setActiveMarker(null);
      setShowInfoWindow(false);
    }
  };

  return (
    <div className="">
      <Map
        style={{
          width: "800px",
          height: "500px",
          margin: "auto",
          "border-radius": "0.2rem",
          "box-shadow": "10px 10px 40px rgb(0, 150,0) ",
        }}
        google={google}
        zoom={12}
        initialCenter={{ lat: 18.445089, lng: 73.86898 }}
        className="bg-green-400 rounded"
        onClick={onMapClick}
      >
        <Marker position={{ lat: 18.445089, lng: 73.86898 }} />
        {pickLocation.map((gym) => (
          <Marker
            key={gym.id}
            position={gym.location}
            title={gym.name}
            name={gym.name}
            onClick={onMarkerClick}
          />
        ))}
        {activeMarker && (
          <InfoWindow
            marker={activeMarker}
            visible={showInfoWindow}
            onClose={() => setShowInfoWindow(false)}
          >
            <div>
              <h3>{activeMarker.name}</h3>
            </div>
          </InfoWindow>
        )}
      </Map>

      {/* <div className="max-w-[1280px] mx-auto">
        <div className="px-6">
          <h2>Places</h2>
          <div>
            {pickLocation.map((gym) => (
              <h1 key={gym.id} className="text-blue-600">
                {gym.name}
              </h1>
              
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDl1PGaKcmi3eho6Rl9lZuC4wp0mecdT5k", // Replace with your actual API key
})(MapContainer);
