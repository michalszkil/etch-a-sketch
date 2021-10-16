function addSquare(main, i) {
    square = document.createElement("div");
    square.id = "square" + i;
    square.className = "square";
    main.appendChild(square);
}

const main = document.getElementById("main");

for (let i = 0; i < 16; i++) {
    addSquare(main, i);
}
const squares = document.querySelectorAll('.square');

for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover",function() {
        // this.style.backgroundColor = "black";
        this.classList.add("square-colored");
    })
}

button_clear = document.getElementById("btn-clear");

button_clear.addEventListener("click", function() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("square-colored")
    }
})