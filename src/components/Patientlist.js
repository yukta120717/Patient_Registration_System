// src/components/Patientlist.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Patientlist.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:5000/app/patients');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  return (
    <div className="patient-list-container">
      <h2>Patient List</h2>
      <Link to="/register">
        <button className="add-patient-button">Add Patient</button>
      </Link>
      <ul className="patient-list">
        {patients.map((patient) => (
          <li key={patient.id} className="patient-list-item">
            {patient.firstName} {patient.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
