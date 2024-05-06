import React, { useState } from 'react';
import galaxies from '../data/galaxies'; // Assume you have a file with galaxy data
import GalaxyDetails from './GalaxyDetails';

function GalaxyList() {
    const [selectedGalaxy, setSelectedGalaxy] = useState(null);

    const handleGalaxyClick = galaxy => {
        setSelectedGalaxy(galaxy);
    };

    return (
        <div>
            {selectedGalaxy ? (
                <GalaxyDetails galaxy={selectedGalaxy} onBack={() => setSelectedGalaxy(null)} />
            ) : (
                <ul>
                    {galaxies.map(galaxy => (
                        <li key={galaxy.id} onClick={() => handleGalaxyClick(galaxy)}>
                            {galaxy.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GalaxyList;
