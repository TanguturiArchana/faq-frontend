// import HomePage from './HomePage';
// import './App.css';


// function App() {
//   return (
//     <div>
//       <HomePage/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define the Routes for different components */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
