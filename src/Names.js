import React, { useState, useEffect } from 'react'
import "./names.css"
import Board from "./Board";


export default function Names() {

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const [namesList, setNamesList] = useState(() => {
        const savedNames = localStorage.getItem('namesList');
        return savedNames ? JSON.parse(savedNames) : [];
    });
    const [savedValue1, setSavedValue1] = useState(() => {
        return localStorage.getItem('Name1') || '';
    });

    const [savedValue2, setSavedValue2] = useState(() => {
        return localStorage.getItem('Name2') || '';
    });
    useEffect(() => {
        localStorage.setItem('namesList', JSON.stringify(namesList));
    }, [namesList]);

    useEffect(() => {
        localStorage.setItem('Name1', savedValue1);
    }, [savedValue1]);

    useEffect(() => {
        localStorage.setItem('Name2', savedValue2);
    }, [savedValue2]);




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
            return;

        } else {
            const nameExists1 = namesList.some(existingName => existingName.name === inputValue1);
            const nameExists2 = namesList.some(existingName => existingName.name === inputValue2);

            if (nameExists1 || nameExists2) {
                alert("Unul sau ambele nume exista deja")
                return;
            }
            setSavedValue1(inputValue1);
            setSavedValue2(inputValue2);

            localStorage.setItem("Name1", inputValue1)
            localStorage.setItem("Name2", inputValue2)

            const newNames = [{ name: inputValue1 }, { name: inputValue2 }];
            setNamesList([...namesList, ...newNames]);

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

    const handleClickListItem = (item) => {

        if (savedValue1 === '') {
            if (savedValue2 !== item.name) { setSavedValue1(item.name); }
            else { alert("Numele este deja folosit") }

        } else if (savedValue2 === '') {
            if (savedValue1 !== item.name) { setSavedValue2(item.name); }
            else { alert("Numele este deja folosit") }

        } else {
            alert('Ambele nume sunt setate. Apasa reset si poti alege altele');
        }
        setInputValue1('');
        setInputValue2('');
    }

    const filteredNames1 = namesList.filter(item => item.name.toLowerCase().includes(inputValue1.toLowerCase()));
    const filteredNames2 = namesList.filter(item => item.name.toLowerCase().includes(inputValue2.toLowerCase()));

    return (

        < div id='namesContainer' >

            <input
                type="text"
                id='input1'
                name='username1'
                placeholder='Player 1(X)'
                value={inputValue1}
                onChange={handleInputChange1}
            />

            <input
                type="text"
                id='input2'
                name='username2'
                placeholder='Player 2(O)'
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

            <h4 id='listHeader'>Lista Jucatori:</h4>
            <ul id='listNames'>

                {namesList.map((item, index) => (

                    <li
                        key={index}
                        className={
                            (inputValue1 && item.name.toLowerCase().includes(inputValue1.toLowerCase())) ||
                                (inputValue2 && item.name.toLowerCase().includes(inputValue2.toLowerCase())) ? 'highlight' : ''}
                        onClick={() => handleClickListItem(item)}>
                        {item.name}
                    </li>
                ))}

            </ul>

            <Board player1={savedValue1} player2={savedValue2} />
        </div >




    )
}
