import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="contact-info">
        <span>
          <i className="fas fa-phone-alt"></i> (+91) 9394117119
        </span>
        <span>
          <i className="fas fa-envelope"></i> svtechsoft@gmail.com
        </span>
        <span>
          GSTIN: 37CAQPA8156F1ZH
        </span>
      </div>
      <div className="social-and-auth">
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-pinterest"></i>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
