import "../index.css";
const Subscription = () => {
  return (
    <div className="Subscription-container">
      <div className="Subscription-item">
        <div className="Subscription-title">Short term offer</div>
        <div className="Subscription-time">1 or 3 days</div>
        <div className="Subscription-desp">
          Explore the city on a Vélib' for a trip or a few days
        </div>
        <div className="Subscription-btn">
          <div className="Subscription-btn-name">I choose my package</div>
        </div>
      </div>
      <div className="Subscription-item">
        <div className="Subscription-title">Subscription</div>
        <div className="Subscription-time">over 12 months</div>
        <div className="Subscription-desp">
          Find the Vélib' pass that suits you
        </div>
        <div className="Subscription-btn">
          <div className="Subscription-btn-name">I choose my package</div>
        </div>
      </div>
      <div className="Subscription-item-special">
        <div className="Sub-item">
          <div className="Sub-item-item">
            <div className="Sub-item-title">Already a subscriber?</div>
            <div className="Sub-item-btn">
              <div className="Sub-item-btn-name">I connect</div>
            </div>
          </div>
          <div className="Sub-item-item">
            <div className="Sub-item-title">You are using Vélib' for the first time</div>
            <div className="Sub-item-btn">
              <div className="Sub-item-btn-name">I discover</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
