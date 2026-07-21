import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // 1. Increase button invokes multiple methods
  const handleIncrement = () => {
    // a. To increment the value
    setCounter(prev => prev + 1);
    // b. Say Hello followed by a static message
    alert("Hello! You have successfully incremented the counter.");
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  // 2. Say Welcome which invokes a function taking "welcome" as an argument
  const handleSayWelcome = (message) => {
    alert(message);
  };

  return (
    <div className="App" style={{ margin: '30px', fontFamily: 'sans-serif' }}>
      <h1>React Event Handling Examples</h1>
      <hr />

      {/* 1. Counter section */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement} style={{ marginRight: '10px' }}>Increment (Increase)</button>
        <button onClick={handleDecrement}>Decrement</button>
      </section>

      {/* 2. Say Welcome section */}
      <section style={{ marginBottom: '20px' }}>
        <button onClick={() => handleSayWelcome("Welcome to our React Application!")}>
          Say Welcome
        </button>
      </section>

      {/* 3. OnPress synthetic event section */}
      <section style={{ marginBottom: '20px' }}>
        <button onClick={(e) => alert("I was clicked! Event Type: " + e.type)}>
          OnPress Event Button
        </button>
      </section>

      <hr />
      
      {/* 4. Currency Convertor component */}
      <CurrencyConvertor />

    </div>
  );
}

export default App;
