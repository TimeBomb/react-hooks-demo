import React, { useState } from 'react';

// Same functionality as class component aside from setting document.title
export default function HookComponent() {
    const [firstName, setFirstName] = useState('Jack');
    const [lastName, setLastName] = useState('Daniels');

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