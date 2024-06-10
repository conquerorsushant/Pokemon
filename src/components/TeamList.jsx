import React from 'react';
import TeamManager from './TeamManager';
import TeamCreationForm from './TeamCreationForm';

const TeamList = () => {
    return (
        <div>
            {/* Component for creating a new team */}
            <TeamCreationForm />
            {/* Component for managing existing teams */}
            <TeamManager />
        </div>
    );
};

export default TeamList;
