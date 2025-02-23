import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName, index) => {
        return <NameCard key={`${suggestedName}-${index}`} suggestedName={suggestedName} />;
    });

    return (
        <div className="results-container">
            {suggestedNamesJsx}
        </div>
    );
};

export default ResultContainer;