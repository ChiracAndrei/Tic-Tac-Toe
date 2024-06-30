window.addEventListener("DOMContentLoaded", () => {

    let container = document.getElementById("container");

    let turn = true
    let player1 = document.getElementById("Player1")
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

    let count_player1_wins = 0;
    let count_player1_loses = 0;
    let count_player2_wins = 0;
    let count_player2_loses = 0;
    let count_egal = 0;




    container.addEventListener("click", hide)


    function hide(el) {

        if (el.target.textContent !== "") {
            window.alert("nu poti apasa de doua ori pe aceeasi casuta")
        } else {
            if (turn == true) {
                el.target.textContent = "X"
                turn = false
            } else {
                el.target.textContent = "O"
                turn = true
            }
        }
        if ((box1.textContent == "X") && (box2.textContent == "X") && (box3.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box4.textContent == "X") && (box5.textContent == "X") && (box6.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box7.textContent == "X") && (box8.textContent == "X") && (box9.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box1.textContent == "X") && (box4.textContent == "X") && (box7.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box2.textContent == "X") && (box5.textContent == "X") && (box8.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box3.textContent == "X") && (box6.textContent == "X") && (box9.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box1.textContent == "X") && (box5.textContent == "X") && (box9.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box3.textContent == "X") && (box5.textContent == "X") && (box7.textContent == "X")) {
            player1_wins.innerHTML = `${count_player1_wins + 1}`
            player2_loses.innerHTML = `${count_player2_loses + 1}`
            return
        } else if ((box1.textContent == "O") && (box2.textContent == "O") && (box3.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else if ((box4.textContent == "O") && (box5.textContent == "O") && (box6.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else if ((box7.textContent == "O") && (box8.textContent == "O") && (box9.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else if ((box1.textContent == "O") && (box4.textContent == "O") && (box7.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else if ((box2.textContent == "O") && (box5.textContent == "O") && (box8.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else if ((box3.textContent == "O") && (box6.textContent == "O") && (box9.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else if ((box1.textContent == "O") && (box5.textContent == "O") && (box9.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else if ((box3.textContent == "O") && (box5.textContent == "O") && (box7.textContent == "O")) {
            player2_wins.innerHTML = `${count_player2_wins + 1}`
            player1_loses.innerHTML = `${count_player1_loses + 1}`
            return
        } else {
            egal.innerHTML = `${count_egal + 1}`
        }




    }
})

