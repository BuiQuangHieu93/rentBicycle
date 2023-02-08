import { useMemo, useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
// import { formatRelative } from "date-fns";

const libraries = ["places"];
const options = {
  disableDefaultUI: true,
};

export default function HomeMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
    libraries,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const [selected, setSelected] = useState(null);

  const [record, setRecord] = useState("");
  const url = "http://localhost:5000/stations";

  async function pullJson() {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    setRecord(responseData);
  }

  useEffect(() => {
    pullJson();
  }, []);

  const center = useMemo(
    () => ({
      lat: 10.776,
      lng: 106.7,
    }),
    []
  );

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      options={options}
    >
      <MarkerF position={center} />
      {console.log({ record })}
      {record.recordsets
        ? record.recordsets[0].map((marker, index) => (
            <MarkerF
              position={{ lat: marker.Station_lat, lng: marker.Station_lng }}
              key={marker.Station_id}
              icon={{
                url: `https://previews.123rf.com/images/fokaspokas/fokaspokas1901/fokaspokas190100331/115137649-simple-bicycle-linear-outline-icon-of-bike-black-symbol-on-transparent-background.jpg`,
                // origin: new window.google.maps.Point(0, 0),
                // anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
              onClick={() => {
                setSelected(marker);
                console.log(marker);
              }}
            />
          ))
        : null}

      {selected ? (
        <InfoWindow
          position={{ lat: selected.Station_lat, lng: selected.Station_lng }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <h2>
              <span role="img" aria-label="bear">
                🐻
              </span>
              {""}
              Alert
              <br></br>
              <span>Available bike: {selected.Station_available}</span>
            </h2>
          </div>
        </InfoWindow>
      ) : (
        <span>hello</span>
      )}
    </GoogleMap>
  );
}
