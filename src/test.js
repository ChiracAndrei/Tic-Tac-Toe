import React, { useState, useEffect } from 'react';

const InputForm = () => {
    const [inputValue, setInputValue] = useState('');

    // Retrieve the value from local storage when the component mounts
    useEffect(() => {
        const storedValue = localStorage.getItem('inputValue');
        if (storedValue) {
            setInputValue(storedValue);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Save the input value to local storage
        localStorage.setItem('inputValue', inputValue);

        // Optionally, clear the input field
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Input:
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;
