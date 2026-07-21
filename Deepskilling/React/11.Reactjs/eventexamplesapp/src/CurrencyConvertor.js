import React, { useState } from 'react';

const CurrencyConvertor = () => {
    const [rupees, setRupees] = useState('');
    const [euros, setEuros] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming 1 INR = 0.011 Euro for demonstration
        const conversionRate = 0.011;
        if (rupees && !isNaN(rupees)) {
            const result = (parseFloat(rupees) * conversionRate).toFixed(2);
            setEuros(result);
        } else {
            alert('Please enter a valid amount in Rupees.');
        }
    };

    return (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Currency Convertor</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>Amount in Rupees:</label>
                    <input 
                        type="number" 
                        value={rupees} 
                        onChange={(e) => setRupees(e.target.value)} 
                        placeholder="Enter INR" 
                    />
                </div>
                <button type="submit" style={{ cursor: 'pointer' }}>Convert to Euro</button>
            </form>

            {euros !== null && (
                <h3 style={{ color: 'green' }}>Equivalent in Euros: €{euros}</h3>
            )}
        </div>
    );
};

export default CurrencyConvertor;
