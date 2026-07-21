import React, { useState } from 'react';
import './App.css';

// Mock flight data
const flights = [
  { id: 'FL101', destination: 'New York', departure: '10:00 AM', price: '$250' },
  { id: 'FL202', destination: 'London', departure: '02:30 PM', price: '$500' },
  { id: 'FL303', destination: 'Tokyo', departure: '11:45 PM', price: '$850' },
];

// Flight Details Component (Shared between Guest and User)
const FlightList = ({ isLoggedIn }) => (
  <div>
    <h2>Available Flights</h2>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {flights.map((flight) => (
        <li key={flight.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
          <p><strong>Flight:</strong> {flight.id}</p>
          <p><strong>Destination:</strong> {flight.destination}</p>
          <p><strong>Departure:</strong> {flight.departure}</p>
          <p><strong>Price:</strong> {flight.price}</p>
          {isLoggedIn && (
            <button 
              onClick={() => alert(`Successfully booked ticket for ${flight.id} to ${flight.destination}!`)}
              style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Book Ticket
            </button>
          )}
        </li>
      ))}
    </ul>
  </div>
);

// Guest Page Component
const GuestPage = ({ onLogin }) => (
  <div>
    <h3>Welcome, Guest User!</h3>
    <p>You can view flight details below. Please login to book tickets.</p>
    <button 
      onClick={onLogin} 
      style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}
    >
      Login
    </button>
    <FlightList isLoggedIn={false} />
  </div>
);

// User Page Component
const UserPage = ({ onLogout }) => (
  <div>
    <h3>Welcome back, Logged-in User!</h3>
    <p>You can now book your tickets.</p>
    <button 
      onClick={onLogout} 
      style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}
    >
      Logout
    </button>
    <FlightList isLoggedIn={true} />
  </div>
);

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App" style={{ margin: '30px', fontFamily: 'sans-serif' }}>
      <h1>Ticket Booking App</h1>
      <hr />
      
      {/* Conditional Rendering based on isLoggedIn state */}
      {isLoggedIn ? (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
