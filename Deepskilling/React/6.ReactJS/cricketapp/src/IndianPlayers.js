import React from 'react';

const IndianPlayers = () => {
    // Array of Indian players for destructuring
    const players = ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Rohit Sharma", "Yuvraj Singh", "Suresh Raina"];
    const [oddPlayer, ...evenPlayers] = players; // Demonstrating Destructuring (First player vs rest, or mapping to Odd vs Even concept)

    // Merging arrays
    const T20Players = ["Hardik Pandya", "Suryakumar Yadav", "Rishabh Pant"];
    const RanjiTrophyPlayers = ["Sarfaraz Khan", "Rajat Patidar", "Dhruv Jurel"];
    const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

    return (
        <div>
            <h2>Indian Players Destructuring</h2>
            <p><strong>Odd Team Player:</strong> {oddPlayer}</p>
            <p><strong>Even Team Players:</strong> {evenPlayers.join(", ")}</p>

            <h2>Merged Team Arrays (T20 + Ranji Trophy)</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndianPlayers;
