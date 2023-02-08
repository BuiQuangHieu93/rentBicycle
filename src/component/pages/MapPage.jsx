import React, { Fragment } from "react";
import HomeMap from "../Map";
import CurrentWeather from "../CurrentWeather";

const MapPage = () => {
  return (
    <Fragment>
      <div className="Heading">
        <div className="Heading-container">
        </div>
        <div className="Mappage-container">
          <HomeMap />
          <div className="Weather-api">
          <CurrentWeather/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MapPage;
