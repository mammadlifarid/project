import React, { useState } from 'react';
import './Cookie.css';

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    
  };

  const handleDecline = () => {
    setIsVisible(false);
   
  };

  if (!isVisible) return;

  return (
    <div className="banner">
      <p className="text">We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
      <button className="button accept" onClick={handleAccept}>Accept</button>
      <button className="button decline" onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default Cookie;
