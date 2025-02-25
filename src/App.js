import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import RegistrationForm from './components/RegistrationForm';
import Patientlist from './components/Patientlist';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/patients" element={<Patientlist/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
