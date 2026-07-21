import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ title, startedOn, status, coach, trainer }) => {
    // Determine title color based on status
    const titleColor = status.toLowerCase() === 'ongoing' ? 'green' : 'blue';

    return (
        <div className={styles.box}>
            <h3 style={{ color: titleColor }}>{title}</h3>
            <dl>
                <dt>Started On</dt>
                <dd>{startedOn}</dd>
                
                <dt>Current Status</dt>
                <dd>{status}</dd>
                
                <dt>Coach</dt>
                <dd>{coach}</dd>
                
                <dt>Trainer</dt>
                <dd>{trainer}</dd>
            </dl>
        </div>
    );
};

export default CohortDetails;
