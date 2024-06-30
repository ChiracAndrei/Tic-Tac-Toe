window.addEventListener("DOMContentLoaded", () => {

    let container = document.getElementById("container");

    let turn = true
    let Player1 = document.getElementById("Player1")
    let box = document.getElementsByClassName("box");

    function hide(el) {

        if (el.target.textContent !== "") {
            window.alert("nu poti apasa de doua ori pe aceeasi casuta")
        } else {
            if (turn == true) {
                el.target.textContent = "X"
                // el.target.focus()
                turn = false
            } else {
                el.target.textContent = "O"
                turn = true
            }
        }
    }

    container.addEventListener("click", hide)

})

