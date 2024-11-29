import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg';

function LandingPage() {
  return (
    <div style={{ backgroundImage: \`url(\${backgroundImage})\`, height: '100vh', backgroundSize: 'cover' }}>
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for houseplants</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
