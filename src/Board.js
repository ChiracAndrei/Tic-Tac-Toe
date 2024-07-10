import { useEffect, useState } from 'react';
import './App.css';


function Board({ player1, player2 }) {

    const [box, setBox] = useState(() => {
        return (JSON.parse(localStorage.getItem('box'))) || Array(9).fill(null);
    });

    let [turn, setTurn] = useState(() => {
        return (JSON.parse(localStorage.getItem("turn")));
    });

    const [winner, setWinner] = useState(() => {
        return (JSON.parse(localStorage.getItem("winner"))) || null;
    })


    useEffect(() => {
        localStorage.setItem("box", JSON.stringify(box))
        localStorage.setItem("turn", JSON.stringify(turn))
        localStorage.setItem("winner", JSON.stringify(winner))

    }, [box, turn, winner]);



    function Box({ value, onBoxClick }) {

        return <button className="box" onClick={onBoxClick}>{value}</button>;
    }



    function calculateWinner(box) {
        const options = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < options.length; i++) {
            const [a, b, c] = options[i];
            if (box[a] && box[a] === box[b] && box[a] === box[c]) {
                console.log(box[a]);
                return box[a];

            }
        }
        return null;
    }
    if (!player1 || !player2) {
        return <div id="startGame">Pentru a incepe jocul selecteza 2 jucatorii</div>;
    }



    let status;
    let winnerResult = calculateWinner(box)
    if (winnerResult) {
        status = "Castigatorul este " + (winnerResult === 'X' ? player1 : player2);

    } else {
        status = "Este randul lui: " + (turn ? player1 : player2);
    }


    function handleClick(i) {

        if (box[i] || winner) return;
        const nextMove = box.slice();
        if (turn) {
            nextMove[i] = "X"
        } else {
            nextMove[i] = "O"
        }

        setBox(nextMove);
        setTurn(!turn)
        setWinner(calculateWinner(nextMove))
    }




    function handleReset() {
        setBox(Array(9).fill(null));
        setTurn(true)
        setWinner(null)
    }


    return (
        <>
            <div id="status">{status}</div>
            <div id="container">

                <Box value={box[0]} onBoxClick={() => handleClick(0)} />
                <Box value={box[1]} onBoxClick={() => handleClick(1)} />
                <Box value={box[2]} onBoxClick={() => handleClick(2)} />

                <Box value={box[3]} onBoxClick={() => handleClick(3)} />
                <Box value={box[4]} onBoxClick={() => handleClick(4)} />
                <Box value={box[5]} onBoxClick={() => handleClick(5)} />

                <Box value={box[6]} onBoxClick={() => handleClick(6)} />
                <Box value={box[7]} onBoxClick={() => handleClick(7)} />
                <Box value={box[8]} onBoxClick={() => handleClick(8)} />

            </div >
            <button id="resetGame" onClick={handleReset}>RESET GAME</button>

        </>
    );





} export default Board