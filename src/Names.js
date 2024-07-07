import React, { useState, useEffect } from 'react'

export default function Names() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const [savedValue1, setSavedValue1] = useState(() => {
        return (localStorage.getItem('Name1')) || ('');
    });

    const [savedValue2, setSavedValue2] = useState(() => {
        return (localStorage.getItem('Name2')) || ('');
    });

    useEffect(() => {
        localStorage.getItem('Name1')
        localStorage.getItem('Name2')

    }, [])

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);

    };
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);

    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if ((inputValue1 == '') || (inputValue2 == '')) {
            alert('Nu ai completat numele')
        } else {
            setSavedValue1(inputValue1);
            setSavedValue2(inputValue2);

            localStorage.setItem("Name1", inputValue1)
            localStorage.setItem("Name2", inputValue2)

            setInputValue1('');
            setInputValue2('');
        }
    };
    function handleReset() {
        setSavedValue1('')
        setSavedValue2('')

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='username1'
                    placeholder='Player 1'
                    value={inputValue1}
                    onChange={handleInputChange1} />
                <input type="text"
                    name='username2'
                    placeholder='Player 1'
                    value={inputValue2}
                    onChange={handleInputChange2} />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={handleReset}>Reset Names</button>

            <h1 id='player1'>{savedValue1}</h1>
            <h1 id='player2'>{savedValue2}</h1>



        </>

    )
}
