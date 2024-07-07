import { useEffect, useState } from 'react';
import './App.css';


function Board() {

    const [box, setBox] = useState(() => {
        return (JSON.parse(localStorage.getItem('box')))
    });

    let [turn, setTurn] = useState(() => {
        return (JSON.parse(localStorage.getItem("turn")))
    });

    const [winner, setWinner] = useState(() => {
        return (JSON.parse(localStorage.getItem("winner")))
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
                return box[a];
            }
        }
        return null;
    }




    let status;
    if (calculateWinner(box)) {
        status = "Castigatorul este " + calculateWinner(box);

    } else {
        status = "Este randul lui: " + (turn ? "X" : "O");
    }






    function Click(i) {

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




    function Reset() {
        setBox(Array(9).fill(null));
        turn = true
        setTurn(turn)
        setWinner(null)

    }


    return (
        <>
            <div className="status">{status}</div>
            <div id="container">
                {/* <div className="row"> */}
                <Box value={box[0]} onBoxClick={() => Click(0)} />
                <Box value={box[1]} onBoxClick={() => Click(1)} />
                <Box value={box[2]} onBoxClick={() => Click(2)} />
                {/* </div>
                <div className="row"> */}
                <Box value={box[3]} onBoxClick={() => Click(3)} />
                <Box value={box[4]} onBoxClick={() => Click(4)} />
                <Box value={box[5]} onBoxClick={() => Click(5)} />
                {/* </div>
                <div className="row"> */}
                <Box value={box[6]} onBoxClick={() => Click(6)} />
                <Box value={box[7]} onBoxClick={() => Click(7)} />
                <Box value={box[8]} onBoxClick={() => Click(8)} />
                {/* </div> */}
            </div >
            <button id="reset" onClick={Reset}>RESET</button>

        </>
    );





} export default Board