import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      title: "INTADMDF10 -.NET FSD",
      startedOn: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose"
    },
    {
      title: "ADM21JF014 -Java FSD",
      startedOn: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith"
    },
    {
      title: "CDBJF21025 -Java FSD",
      startedOn: "24-Dec-2021",
      status: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe"
    }
  ];

  return (
    <div style={{ margin: '20px', fontFamily: 'sans-serif' }}>
      <h1>Cohorts Details</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {cohorts.map((cohort, index) => (
          <CohortDetails 
            key={index}
            title={cohort.title}
            startedOn={cohort.startedOn}
            status={cohort.status}
            coach={cohort.coach}
            trainer={cohort.trainer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
