import React, { useState } from 'react';
import './Style.css'; 
import '@fortawesome/fontawesome-free/css/all.css';
import SidePage from './SidePage';
// import logo from './assests/images/campusconnectbot.png';
function HomePage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='container'>
      <SidePage />
      {/* <div><img src={logo} alt="Logo" className='logoInHomePage'/></div> */}
      <div className='innerContainer'>
        <div><h1>How can I assist you today?</h1></div>
        <div className='inputContainer'>
          <input
            id="myInput"
            type="text"
            placeholder='Ask anything about kmit'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='sendButton'>
            <i className="fas fa-paper-plane"></i> 
          </button>
        </div>
      </div>
      <button className='loginButton'>Login</button>
    </div>
  );
}

export default HomePage;
