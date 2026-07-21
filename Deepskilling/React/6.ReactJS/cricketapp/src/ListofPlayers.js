import React from 'react';

const ListofPlayers = () => {
    const players = [
        { name: "Virat Kohli", score: 105 },
        { name: "Rohit Sharma", score: 85 },
        { name: "MS Dhoni", score: 45 },
        { name: "KL Rahul", score: 65 },
        { name: "Suryakumar Yadav", score: 92 },
        { name: "Hardik Pandya", score: 55 },
        { name: "Rishabh Pant", score: 75 },
        { name: "Ravindra Jadeja", score: 30 },
        { name: "Shikhar Dhawan", score: 80 },
        { name: "Shreyas Iyer", score: 50 },
        { name: "Jasprit Bumrah", score: 12 },
    ];

    const playersBelow70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of All Players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name} - Score: {player.score}</li>
                ))}
            </ul>

            <h2>Players with Scores Below 70</h2>
            <ul>
                {playersBelow70.map((player, index) => (
                    <li key={index}>{player.name} - Score: {player.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListofPlayers;
