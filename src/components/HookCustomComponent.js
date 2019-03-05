import React, { useState, useEffect } from 'react';

// Same functionality as HookEffectComponent and class component
//  except we have a reusable custom useFormField hook
export default function HookCustomComponent(props) {
    const firstName = useFormField('Jack');
    const lastName = useFormField('Daniels');

    useEffect(() => {
        document.title = `${firstName.value} ${lastName.value}`;
    });

    return (
        <div>
            <div className="field">
                <label>First Name</label>
                <input
                    value={firstName.value}
                    onChange={firstName.onChange} />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input
                    value={lastName.value}
                    onChange={lastName.onChange} />
            </div>
        </div>
    );
}

function useFormField(initialValue) {
    const [value, setValue] = useState(initialValue);
    
    function handleChange(event) {
        setValue(event.target.value);
    }

    return {
        value,
        onChange: handleChange,
    };
}