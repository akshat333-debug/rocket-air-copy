import React from 'react';
import './PageContent.css';

const PageContent = () => {
  return (
    <div className="page-content">
      <section className="hero">
        <h2>Welcome to RocketAir</h2>
        <p>Your journey to the skies begins here. Book your next flight with us.</p>
        <button className="cta-button">Book Now</button>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Fast Booking</h3>
          <p>Experience lightning-fast booking and checkout.</p>
        </div>
        <div className="feature">
          <h3>Comfortable Flights</h3>
          <p>Enjoy comfortable seating and top-notch service.</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>We are here to help anytime, anywhere.</p>
        </div>
      </section>
    </div>
  );
};

export default PageContent;
