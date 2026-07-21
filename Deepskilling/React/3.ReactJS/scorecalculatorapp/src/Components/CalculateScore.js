import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name, School, Total, Goal }) => {
    // Assuming Average is calculated as (Total / Goal) * 100 or just (Total / Goal) depending on standard calculation.
    // I will use (Total / Goal) * 100 for percentage score
    let average = (Total / Goal) * 100;

    return (
        <div className="score-container">
            <h1>Student Score Calculator</h1>
            <p><strong>Name:</strong> {Name}</p>
            <p><strong>School:</strong> {School}</p>
            <p><strong>Total Marks:</strong> {Total}</p>
            <p><strong>Goal Marks:</strong> {Goal}</p>
            <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
        </div>
    );
};

export default CalculateScore;
