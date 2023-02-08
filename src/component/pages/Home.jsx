import React, { Fragment } from "react";
import Subscription from "../Subscription";
import Footer from "../Footer";

const Home = () => {
  return (
    <Fragment>
      <div className="Heading">
        <div className="Heading-container">
          <Subscription />
        </div>
      </div>
      <div className="Tutorial">
        <div className="Tutorial-item">
          <div className="Item-title title-blue">HOW IT WORKS ?</div>
          <div className="Item-detail">
            Everything you need to know about Vélib' in 5 minutes.
          </div>
          <div className="Item-btn">See the tutorials</div>
        </div>
        <div className="Tutorial-item">
          <div className="Item-title title-green">MAP OF STATIONS</div>
          <div className="Item-detail">
            Find a Vélib' in 1400 nearby stations.
          </div>
          <div className="Item-btn">See stations</div>
        </div>
      </div>
      <div className="possibilities">
        <div className="possibilities-title">2 TIMES THE POSSIBILITIES</div>
        <div className="possibilities-container">
        <div className="possi-item">
          <div className="possi-image1"></div>
          <div className="possi-title">MECHANICAL</div>
          <div className="possi-details">
            You need to rediscover the pleasure of pedaling. All in the thighs!
          </div>
        </div>
        <div className="possi-item">
          <div className="possi-image"></div>
        </div>
        <div className="possi-item">
          <div className="possi-image2"></div>
          <div className="possi-title">ELECTRIC</div>
          <div className="possi-details">
            Drive up to 25 km/h in just a few pedal strokes and face the reliefs
            effortlessly.
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
