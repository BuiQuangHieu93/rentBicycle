import React, { Fragment } from "react";
import Footer from "../Footer";

const Subscribe = () => {
  return (
    <Fragment>
      <div className="Heading-subpage">
        <div className="Heading-container-subpage">
        </div>
      </div>
      <div className="The-Subscription">
        <div className="Sub-container">
          <div className="Sub-heading">
            <div className="Sub-title">THE SUBSCRIPTIONS</div>
            <div className="Sub-detail">With 12 month commitment</div>
          </div>
          <div className="Sub-item-container">
            <div className="Sub-page-item">
              <div className="Sub-item-heading">
                <div className="Item-type">V-FREE</div>
                <div className="Item-price">0 € / month</div>
              </div>
              <div className="Sub-item-body">
                <div className="detail-of-item">
                  <div className="Sub-item-detail">For occasional users</div>
                  <div className="Sub-item-detail">Without subscription</div>
                  <div className="Sub-item-detail">
                    Payment from the 1st minute
                  </div>
                </div>

                <div className="Sub-item-btn">Learn more</div>
              </div>
            </div>
            <div className="Sub-page-item">
              <div className="Sub-item-heading">
                <div className="Item-type">V-PLUS</div>
                <div className="Item-price">€3.10 / month</div>
              </div>
              <div className="Sub-item-body">
                <div className="detail-of-item">
                  <div className="Sub-item-detail">
                    Regular user(more than 4 trips per month)
                  </div>
                  <div className="Sub-item-detail">
                    Included 30 minutes on a mechanical Vélib'
                  </div>
                  <div className="Sub-item-detail">12 month commitment</div>
                  <div className="Sub-item-detail">Bonus Minutes: Enabled</div>
                </div>
                <div className="Sub-item-btn">Learn more</div>
              </div>
            </div>
            <div className="Sub-page-item">
              <div className="Sub-item-heading">
                <div className="Item-type">V-MAX</div>
                <div className="Item-price">€8.30 / month</div>
              </div>
              <div className="Sub-item-body">
                <div className="detail-of-item">
                  <div className="Sub-item-detail">
                    All-inclusive Vélib' (mechanical and electrical)
                  </div>
                  <div className="Sub-item-detail">
                    Included 60 minutes on a mechanical Vélib'
                  </div>
                  <div className="Sub-item-detail">
                    Included 45 minutes by electric Vélib'
                  </div>
                  <div className="Sub-item-detail">12 month commitment</div>
                  <div className="Sub-item-detail">Bonus Minutes: Enabled</div>
                </div>

                <div className="Sub-item-btn">Learn more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Temp-packages">
        <div className="Sub-container">
          <div className="Sub-heading">
            <div className="Sub-title">TEMPORARY PACKAGES</div>
            <div className="Sub-detail">
              Explore the city on a Vélib' for a trip or a few days
            </div>
          </div>
          <div className="Sub-item-container">
            
              <div className="Sub-page-item-below">
                <div className="Sub-item-heading">
                  <div className="Item-type">TICKET-V</div>
                  <div className="Item-price">3 €</div>
                </div>
                <div className="Sub-item-body">
                  <div className="detail-of-item">
                    <div className="Sub-item-detail">
                      A ride on a mechanical or electric Vélib' (your choice)
                    </div>
                    <div className="Sub-item-detail">Included 45 minutes</div>
                  </div>
                  <div className="Sub-item-btn">Learn more</div>
                </div>
              </div>
              <div className="Sub-page-item-below">
                <div className="Sub-item-heading">
                  <div className="Item-type">24H ELECTRIC PASS</div>
                  <div className="Item-price">10 €</div>
                </div>
                <div className="Sub-item-body">
                  <div className="detail-of-item">
                    <div className="Sub-item-detail">
                      24 hours on Vélib' (electric included)
                    </div>
                    <div className="Sub-item-detail">
                      Included 60 minutes on a mechanical Vélib'
                    </div>
                    <div className="Sub-item-detail">
                      Included 45 minutes by electric Vélib'
                    </div>
                    <div className="Sub-item-detail">
                      Rental of up to 5 bikes simultaneously
                    </div>
                  </div>
                  <div className="Sub-item-btn">Learn more</div>
                </div>
              </div>
            
            
              <div className="Sub-page-item-below">
                <div className="Sub-item-heading">
                  <div className="Item-type">CLASSIC 24H PASS</div>
                  <div className="Item-price">5 €</div>
                </div>
                <div className="Sub-item-body">
                  <div className="detail-of-item">
                    <div className="Sub-item-detail">
                      24 hours on Vélib' (electric supplement)
                    </div>
                    <div className="Sub-item-detail">
                      Included 30 minutes on a mechanical Vélib'
                    </div>
                    <div className="Sub-item-detail">
                      Rental of up to 5 bikes simultaneously
                    </div>
                  </div>
                  <div className="Sub-item-btn">Learn more</div>
                </div>
              </div>
              <div className="Sub-page-item-below">
                <div className="Sub-item-heading">
                  <div className="Item-type">3 DAY PASS</div>
                  <div className="Item-price">20 €</div>
                </div>
                <div className="Sub-item-body">
                  <div className="detail-of-item">
                    <div className="Sub-item-detail">
                      72 hours on Vélib' (electric included)
                    </div>
                    <div className="Sub-item-detail">
                      Included 60 minutes on a mechanical Vélib'
                    </div>
                    <div className="Sub-item-detail">
                      Included 45 minutes by electric Vélib'
                    </div>
                    <div className="Sub-item-detail">
                      Rental of up to 5 bikes simultaneously
                    </div>
                  </div>

                  <div className="Sub-item-btn">Learn more</div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Subscribe;
