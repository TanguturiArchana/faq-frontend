import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create your account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Log in</Link> {/* Use Link component */}
        </p>
        <hr />
        <p>OR</p>
        {/* <div className="oauth-buttons">
  <button className="oauth-btn google-btn">
    <img src="google-icon.png" alt="Google Icon" /> 
  </button>
  <button className="oauth-btn microsoft-btn">
    <img src="microsoft-icon.png" alt="Microsoft Icon" /> 
    Continue with Microsoft Account
  </button>
  <button className="oauth-btn apple-btn">
    <img src="apple-icon.png" alt="Apple Icon" /> 
    Continue with Apple
  </button>
</div> */}
     {/* for awesome icons */}
     <div className="oauth-buttons">
      <button className="oauth-btn google-btn">
        <FontAwesomeIcon icon={faGoogle} size="lg" /> Continue with Google
      </button>
      <button className="oauth-btn microsoft-btn">
        <FontAwesomeIcon icon={faMicrosoft} size="lg" /> Continue with Microsoft Account
      </button>
      <button className="oauth-btn apple-btn">
        <FontAwesomeIcon icon={faApple} size="lg" /> Continue with Apple
      </button>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;
