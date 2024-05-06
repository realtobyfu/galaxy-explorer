import React from 'react';

function GalaxyDetails({ galaxy, onBack }) {
    return (
        <div>
            <h2>{galaxy.name}</h2>
            <p>Description: {galaxy.description}</p>
            <button onClick={onBack}>Back to List</button>
        </div>
    );
}

export default GalaxyDetails;
