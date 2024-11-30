import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(ageInYears.toFixed(2) + ' years');
  };

  return (
    <div className="text-center">
      <h1>Age Calculator</h1>
      <h2>Enter your date of birth</h2>
      <div className="d-flex justify-content-center">
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="form-control" 
          style={{ width: '50%' }} 
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={calculateAge}>
        Calculate Age
      </button>
      {age && <p className="mt-3">Age: {age}</p>}
    </div>
  );
}

export default AgeCalculator;
