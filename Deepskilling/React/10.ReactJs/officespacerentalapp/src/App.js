import React from 'react';
import './App.css';

function App() {
  // 3. Create a list of Objects to display the details like Name, Rent and Address
  const officeSpaces = [
    { id: 1, name: "Premium IT Park", rent: 75000, address: "123 Tech Boulevard, Silicon City" },
    { id: 2, name: "Startup Hub", rent: 45000, address: "45 Innovation Drive, Downtown" },
    { id: 3, name: "Corporate Plaza", rent: 90000, address: "100 Business Avenue, Metro Center" },
    { id: 4, name: "Co-Working Space", rent: 30000, address: "22 Collaboration Lane, Uptown" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* 1. Create an element to display the heading of the page */}
      <h1>Office Space Rental App</h1>
      
      {/* 2. Attribute to display the image of the office space */}
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
        alt="Modern Office Space" 
        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginBottom: '20px' }} 
      />

      <h2>Available Office Spaces</h2>
      
      {/* 4. Loop through the office space item to display more data */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {officeSpaces.map((office) => {
          // 5. Display the color of the Rent in Red if it's below 60000 and in Green if it's above 60000
          const rentColor = office.rent < 60000 ? 'red' : 'green';

          return (
            <div key={office.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{office.name}</h3>
              <p style={{ margin: '5px 0' }}><strong>Address:</strong> {office.address}</p>
              <p style={{ margin: '5px 0' }}>
                <strong>Rent:</strong> <span style={{ color: rentColor, fontWeight: 'bold' }}>${office.rent.toLocaleString()}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
