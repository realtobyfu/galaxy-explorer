import React, { useState, useEffect, useCallback } from 'react';
import galaxies from '../data/galaxies'; // Your galaxies data
import GalaxyDetails from './GalaxyDetails';

function GalaxyList() {
    const [selectedGalaxy, setSelectedGalaxy] = useState(null);
    const [visibleGalaxies, setVisibleGalaxies] = useState([]);
    const [hoveredGalaxyId, setHoveredGalaxyId] = useState(null);

    const shuffleGalaxies = useCallback(() => {
        const shuffled = galaxies.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        setVisibleGalaxies(distributeGalaxies(selected));
    }, []); // dependencies array is empty, shuffleGalaxies does not depend on external state or props

    useEffect(() => {
        shuffleGalaxies(); // Initial shuffle on mount
    }, [shuffleGalaxies]);

    const handleGalaxyClick = galaxy => {
        setSelectedGalaxy(galaxy);
    };

    const handleMouseEnter = galaxyId => {
        setHoveredGalaxyId(galaxyId);
    };

    const handleMouseLeave = () => {
        setHoveredGalaxyId(null);
    };

    const distributeGalaxies = (galaxies) => {
        const galaxyPositions = [];
        galaxies.forEach(galaxy => {
            let position;
            do {
                position = {
                    top: Math.random() * 80,
                    left: Math.random() * 80
                };
            } while (isOverlap(position, galaxyPositions));
            galaxyPositions.push({...position, id: galaxy.id});
        });
        return galaxies.map(galaxy => ({
            ...galaxy,
            position: galaxyPositions.find(pos => pos.id === galaxy.id)
        }));
    };

    const isOverlap = (newPos, positions) => {
        return positions.some(pos => {
            const distance = Math.sqrt(Math.pow(pos.top - newPos.top, 2) + Math.pow(pos.left - newPos.left, 2));
            return distance < 10; // Adjust this threshold value as needed
        });
    };

    return (
        <div className="universe">
            {visibleGalaxies.map(galaxy => (
                <div key={galaxy.id}
                     className="galaxy"
                     style={{
                         top: `${galaxy.position.top}%`,
                         left: `${galaxy.position.left}%`,
                         zIndex: galaxy.id === hoveredGalaxyId ? 1000 : 1
                     }}
                     onClick={() => handleGalaxyClick(galaxy)}
                     onMouseEnter={() => handleMouseEnter(galaxy.id)}
                     onMouseLeave={handleMouseLeave}>
                    <img src={galaxy.image} alt={galaxy.name} title={galaxy.name} />
                </div>
            ))}

            {selectedGalaxy && (
                <GalaxyDetails galaxy={selectedGalaxy} onClose={() => setSelectedGalaxy(null)} />
            )}
            <button onClick={shuffleGalaxies} style={{ position: 'fixed', top: '20px', right: '20px' }}>Shuffle</button>
        </div>
    );
}

export default GalaxyList;
