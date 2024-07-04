import React, { useState, useEffect } from 'react'

export default function Names() {
    // const [inputValue1, setInputValue1] = useState('');
    // const [inputValue2, setInputValue2] = useState('');


    // let inputChange1 = (event) => {
    //     setInputValue1(event.target.value)
    //     localStorage.setItem(setInputValue1(event.target.value))

    // }

    // let inputChange2 = (event) => {
    //     setInputValue2(event.target.value)
    //     localStorage.setItem(setInputValue2(event.target.value))

    // }
    // let inputRef1 = useRef();
    // let inputRef2 = useRef();

    // function saveName(event) {
    //     // alert('Players names are: ' + inputRef1.current.value + "  " + inputRef2.current.value);
    //     event.preventDefault();
    //     inputChange1 = inputRef1.current.value
    //     inputChange2 = inputRef2.current.value
    //     setInputValue1(inputRef1.current.value)
    //     setInputValue2(inputRef2.current.value)
    //     console.log(inputChange1);
    //     console.log(inputChange2);
    // };
    const [nameInForm1, setNameInForm1] = useState("");
    const [nameInForm2, setNameInForm2] = useState("");

    const [username1, setUserName1] = useState("");
    const [username2, setUserName2] = useState("");


    const inputName1 = (event) => {
        setNameInForm1(event.target.value);
    }
    const inputName2 = (event) => {
        setNameInForm2(event.target.value);
    }

    const handleSubmit = () => {


        setUserName1(nameInForm1);
        setUserName2(nameInForm2);

    }
    useEffect(() => {
        alert("Welcome " + username1 + " " + username2);
    }, [])


    return (
        // <>
        //     <form onSubmit={saveName}>
        //         <label htmlFor="first_player" id='name1'> Numele jucatorului cu X </label>
        //         <input type="text" ref={inputRef1} name='name1' id='first_player' required /><br />

        //         <label htmlFor="second_player" id='name2'> Numele jucatorului cu O </label>
        //         <input type="text" ref={inputRef2} name='name2' id='second_player' required />

        //         <button type='submit' onClick={saveName}>Salveaza Nume</button>
        //     </form>
        //     <h1 id="player1" value={inputRef1.current.value}></h1>
        //     <h1 id="player2">{inputRef2.current.value}</h1>

        // </>
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_player" id='name1'> Numele jucatorului cu X </label>
                <input type="text" value={nameInForm1} onChange={inputName1} name='name1' id='first_player' required /><br />

                <label htmlFor="second_player" id='name2'> Numele jucatorului cu O </label>
                <input type="text" value={nameInForm2} onChange={inputName2} rname='name2' id='second_player' required />

                <button type='submit' >Salveaza Nume</button>
            </form>
            <h1 id="player1">{nameInForm1}</h1>
            <h1 id="player2">{nameInForm2}</h1>

        </>
    )
}
