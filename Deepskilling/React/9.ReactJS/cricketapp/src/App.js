import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // Flag variable to toggle between components
  // Set to true to display ListofPlayers, false to display IndianPlayers
  const flag = true;

  return (
    <div className="App" style={{ margin: '20px', fontFamily: 'sans-serif' }}>
      <h1>Cricket App</h1>
      <hr />
      
      {flag ? (
        <ListofPlayers />
      ) : (
        <IndianPlayers />
      )}
      
    </div>
  );
}

export default App;
