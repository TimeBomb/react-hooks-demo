import React, { useState } from 'react';

// Renders same fields that Class Component does. Stateless
export default function HookComponent() {
    const firstName = 'Jack';
    const lastName = 'Daniels';

    document.title = `${firstName} ${lastName}`;

    return (
        <div>
            <div className="field">
                <label>First Name</label>
                <input value={firstName}/>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input value={lastName}/>
            </div>
        </div>
    );
}