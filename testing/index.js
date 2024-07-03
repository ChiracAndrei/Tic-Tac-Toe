window.addEventListener("DOMContentLoaded", () => {

    let container = document.getElementById("container");

    let turn = true
    let player1 = document.getElementById("player1")
    let player2 = document.getElementById("player2")

    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");

    let player1_wins = document.getElementById("player1_wins")
    let player1_loses = document.getElementById("player1_loses")
    let player2_wins = document.getElementById("player2_wins")
    let player2_loses = document.getElementById("player2_loses")
    let egal = document.getElementsByClassName("egal")
    let reset = document.getElementById("reset")
    let baner = document.getElementById("winer_baner")

    let count_player1_wins = 0;
    let count_player1_loses = 0;
    let count_player2_wins = 0;
    let count_player2_loses = 0;
    let count_egal = 0;



    container.addEventListener("click", Hide)
    reset.addEventListener("click", Reset)


    function Hide(el) {

        if (el.target.textContent !== "") {
            window.alert("nu poti apasa de doua ori pe aceeasi casuta")
        } else {
            if (turn == true) {
                ColorPlayer(turn)
                el.target.textContent = "X"
                turn = false
            } else {
                ColorPlayer(turn)
                el.target.textContent = "O"
                turn = true
            }
            GameResult()
        }
    }


    function GameResult() {
        if ((box1.textContent == "X") && (box2.textContent == "X") && (box3.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box4.textContent == "X") && (box5.textContent == "X") && (box6.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box7.textContent == "X") && (box8.textContent == "X") && (box9.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box1.textContent == "X") && (box4.textContent == "X") && (box7.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box2.textContent == "X") && (box5.textContent == "X") && (box8.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box3.textContent == "X") && (box6.textContent == "X") && (box9.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box1.textContent == "X") && (box5.textContent == "X") && (box9.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box3.textContent == "X") && (box5.textContent == "X") && (box7.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            baner.textContent = `${player1.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box1.textContent == "O") && (box2.textContent == "O") && (box3.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box4.textContent == "O") && (box5.textContent == "O") && (box6.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box7.textContent == "O") && (box8.textContent == "O") && (box9.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box1.textContent == "O") && (box4.textContent == "O") && (box7.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box2.textContent == "O") && (box5.textContent == "O") && (box8.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box3.textContent == "O") && (box6.textContent == "O") && (box9.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box1.textContent == "O") && (box5.textContent == "O") && (box9.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else if ((box3.textContent == "O") && (box5.textContent == "O") && (box7.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            baner.textContent = `${player2.textContent} win this round`
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
            return
        } else {
            Tie()
        }

    }
    function Tie() {
        if ((box1.textContent !== "") && (box2.textContent !== "") && (box3.textContent !== "") && (box4.textContent !== "") &&
            (box5.textContent !== "") && (box6.textContent !== "") && (box7.textContent !== "") && (box8.textContent !== "") &&
            (box9.textContent !== "")) {
            egal.innerHTML = `${count_egal + 1}`
            baner.textContent = "This round is tie"
            baner.style.display = "block"
            container.removeEventListener("click", Hide)
        }
    }



    function ColorPlayer(par) {
        if (par == false) {
            player1.style.color = "red"
            player2.style.color = "black"
        }
        else {
            player2.style.color = "red"
            player1.style.color = "black"
        }
    }
    function Reset() {
        box1.textContent = ""
        box2.textContent = ""
        box3.textContent = ""
        box4.textContent = ""
        box5.textContent = ""
        box6.textContent = ""
        box7.textContent = ""
        box8.textContent = ""
        box9.textContent = ""
        player1.style.color = "black"
        player2.style.color = "black"
        container.addEventListener("click", Hide)
        baner.style.display = "none"

    }

})

