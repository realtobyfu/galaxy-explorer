import React from 'react';

function GalaxyDetails({ galaxy, onClose }) {
    return (
        <div className="galaxy-details">
            <h2>{galaxy.name}</h2>
            <h3>Constellation: {galaxy.constellation}</h3>
            <p>Description: {galaxy.description}</p>
            <p>Diameter / Size: {galaxy.diameter || 'Not specified'}</p>
            <p>Distance from Earth: {galaxy.distance || 'Not specified'}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default GalaxyDetails;
