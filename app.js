import React, { useState } from 'react';
import './App.css';

function App() {
  const [operationCode, setOperationCode] = useState('');
  const [userId, setUserId] = useState('');
  const [collegeEmailId, setCollegeEmailId] = useState('');
  const [collegeRollNumber, setCollegeRollNumber] = useState('');
  const [response, setResponse] = useState(null);

  const handleGetRequest = async () => {
    const response = await fetch('http://localhost:5000/endpoint');
    const data = await response.json();
    setOperationCode(data.operation_code);
  };

  const handlePostRequest = async () => {
    const response = await fetch('http://localhost:5000/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        college_email_id: collegeEmailId,
        college_roll_number: collegeRollNumber,
      }),
    });
    const data = await response.json();
    setResponse(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flask-React Integration</h1>
        <button onClick={handleGetRequest}>Get Operation Code</button>
        {operationCode && <p>Operation Code: {operationCode}</p>}
        
        <div>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="text"
            placeholder="College Email ID"
            value={collegeEmailId}
            onChange={(e) => setCollegeEmailId(e.target.value)}
          />
          <input
            type="text"
            placeholder="College Roll Number"
            value={collegeRollNumber}
            onChange={(e) => setCollegeRollNumber(e.target.value)}
          />
          <button onClick={handlePostRequest}>Submit</button>
        </div>
        
        {response && (
          <div>
            <p>Status: {response.status}</p>
            <p>User ID: {response.user_id}</p>
            <p>College Email ID: {response.college_email_id}</p>
            <p>College Roll Number: {response.college_roll_number}</p>
            <p>Array for Numbers: {response.array_for_numbers.join(', ')}</p>
            <p>Array for Alphabets: {response.array_for_alphabets.join(', ')}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
