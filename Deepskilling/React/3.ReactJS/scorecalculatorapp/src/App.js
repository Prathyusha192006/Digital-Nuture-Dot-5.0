import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="John Doe" 
        School="Greenwood High School" 
        Total={450} 
        Goal={500} 
      />
    </div>
  );
}

export default App;
