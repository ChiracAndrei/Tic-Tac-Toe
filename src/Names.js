import React, { useState, useEffect } from 'react'
import "./names.css"

export default function Names() {

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [elements, setElements] = useState([]);

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



            let newValue1 = inputValue1;
            let newValue2 = inputValue2;

            setElements([...elements, newValue1, newValue2])

            setInputValue1('');
            setInputValue2('');
        }
    };

    function handleReset() {
        setSavedValue1('')
        setSavedValue2('')

    }


    //    functioe care creaza un li pentru nume 
    // functie click care duce valoare din lista in numele jucatorului


    return (
        <>
            <div id='namesContainer'>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        id='input1'
                        name='username1'
                        placeholder='Player 1'
                        value={inputValue1}
                        onChange={handleInputChange1} />
                    <input type="text"
                        id='input2'
                        name='username2'
                        placeholder='Player 2'
                        value={inputValue2}
                        onChange={handleInputChange2} />
                    <br />
                    <button id='submitBtn' type='submit'>Submit Names</button>
                </form>
                <button id='resetNamesBtn' onClick={handleReset}>Reset Names</button>

                <h1 id='player1'>{savedValue1}</h1>
                <h1 id='player2'>{savedValue2}</h1>


                <ul id='listNames'>
                    {elements.map((elements, index) => (
                        <button key={index}>{elements}</button>
                    ))}
                </ul>

            </div>

        </>

    )
}
