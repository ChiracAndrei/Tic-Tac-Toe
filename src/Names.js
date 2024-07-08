import React, { useState, useEffect } from 'react'
import "./names.css"

export default function Names() {

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const [namesList, setNamesList] = useState(() => {
        const savedNames = localStorage.getItem('namesList');
        return savedNames ? JSON.parse(savedNames) : [];
    });
    useEffect(() => {
        localStorage.setItem('namesList', JSON.stringify(namesList));
    }, [namesList]);



    const [savedValue1, setSavedValue1] = useState(() => {
        return localStorage.getItem('Name1') || '';
    });

    const [savedValue2, setSavedValue2] = useState(() => {
        return localStorage.getItem('Name2') || '';
    });

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);

    };
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);

    };



    const handleSubmit = (event) => {
        event.preventDefault();

        if ((inputValue1 === '') || (inputValue2 === '')) {
            alert('Nu ai completat numele')
        } else {
            setSavedValue1(inputValue1);
            setSavedValue2(inputValue2);

            localStorage.setItem("Name1", inputValue1)
            localStorage.setItem("Name2", inputValue2)

            const newNames = [{ name: inputValue1 }, { name: inputValue2 }];

            const filteredNames = newNames.filter(
                newName => !namesList.some(existingName => existingName.name === newName.name)
            );
            setNamesList([...namesList, ...filteredNames]);

            setInputValue1('');
            setInputValue2('');

        }
    };



    function handleResetNames() {
        setSavedValue1('')
        setSavedValue2('')
        localStorage.removeItem('Name1');
        localStorage.removeItem('Name2');

    }
    const items = [savedValue1, savedValue2]
    const handleClickListItem = (item) => {
        if (savedValue1 === '') {
            setSavedValue1(item.name);
        } else if (savedValue2 === '') {
            setSavedValue2(item.name);
        } else {
            alert('Both names are already set. Reset one to update.');
        }

    }

    return (
        <>
            <div id='namesContainer'>

                <input
                    type="text"
                    id='input1'
                    name='username1'
                    placeholder='Player 1'
                    value={inputValue1}
                    onChange={handleInputChange1}
                />

                <input
                    type="text"
                    id='input2'
                    name='username2'
                    placeholder='Player 2'
                    value={inputValue2}
                    onChange={handleInputChange2}
                />
                <br />
                <button
                    id='submitBtn'
                    onClick={handleSubmit}
                >
                    Submit Names
                </button>

                <button
                    id='resetNamesBtn'
                    onClick={handleResetNames}
                >
                    Reset Names
                </button>

                <h1 id='player1'>{savedValue1}</h1>
                <h1 id='player2'>{savedValue2}</h1>


                <ul id='listNames'>

                    {namesList.map((item, index) => (

                        <li
                            key={index}
                            onClick={() => handleClickListItem(item)}>
                            {item.name}
                        </li>
                    ))}

                </ul>


            </div >

        </>

    )
}
