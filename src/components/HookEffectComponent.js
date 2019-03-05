import React, { useState, useEffect } from 'react';

// Same functionality as class component
export default function HookEffectComponent(props) {
    const [firstName, setFirstName] = useState('Jack');
    const [lastName, setLastName] = useState('Daniels');

    useEffect(() => {
        document.title = `${firstName} ${lastName}`;
    });
    // Also note: useEffect second argument

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    return (
        <div>
            <div className="field">
                <label>First Name</label>
                <input
                    value={firstName}
                    onChange={handleFirstNameChange} />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input 
                    value={lastName}
                    onChange={handleLastNameChange} />
            </div>
        </div>
    );
}