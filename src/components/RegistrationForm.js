import React, { useState } from 'react';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';
import './style.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    dob: '',
    ssn: '',
    occupation: '',
    employment: '',
    emergencyContact: '',
    emergencyPhone: '',
    insurance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
    
      // Optionally reset form fields or show a success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="First Name"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        icon="fas fa-user"
      />
      <FormInput
        label="Last Name"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        icon="fas fa-user"
      />
      <FormInput
        label="Address"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        icon="fas fa-map-marker-alt"
      />
      <FormInput
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        icon="fas fa-phone-alt"
      />
      <FormInput
        label="Date of Birth"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        icon="fas fa-calendar-alt"
      />
      <FormInput
        label="Social Security Number"
        type="text"
        name="ssn"
        value={formData.ssn}
        onChange={handleChange}
        icon="fas fa-id-card"
      />
      <FormInput
        label="Occupation"
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        icon="fas fa-briefcase"
      />
      <FormInput
        label="Place of Employment"
        type="text"
        name="employment"
        value={formData.employment}
        onChange={handleChange}
        icon="fas fa-building"
      />
      <FormInput
        label="Emergency Contact Name"
        type="text"
        name="emergencyContact"
        value={formData.emergencyContact}
        onChange={handleChange}
        icon="fas fa-user-friends"
      />
      <FormInput
        label="Emergency Contact Phone"
        type="tel"
        name="emergencyPhone"
        value={formData.emergencyPhone}
        onChange={handleChange}
        icon="fas fa-phone-alt"
      />
      <FormInput
        label="Health Insurance Info"
        type="text"
        name="insurance"
        value={formData.insurance}
        onChange={handleChange}
        icon="fas fa-notes-medical"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
