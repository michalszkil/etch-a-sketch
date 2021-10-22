function addSquare(main, i) {
    square = document.createElement("div");
    square.id = "square" + i;
    square.className = "square";
    main.appendChild(square);
}

function drawBoard(main, size) {

    for (let i = 0; i < size*size; i++) {
        addSquare(main, i);
    }
}

function clearBoard() {
    document.getElementById("main").innerHTML = '';
}

let size = 40;


let main = document.getElementById("main");

drawBoard(main, size);


const squares = document.querySelectorAll('.square');

for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover",function() {
        // this.style.backgroundColor = "black";
        this.classList.add("square-colored");
    })
}

button_clear = document.getElementById("btn-clear");

button_clear.addEventListener("click", function() {
    let squares = document.querySelectorAll('.square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("square-colored");
    }
})

button_resize = document.getElementById("btn-resize");

button_resize.addEventListener("click", function() {
    size = document.getElementById('textbox').value
    let squares1 = document.querySelectorAll('.square');

    for (let i = 0; i < squares1.length; i++) {
        squares1[i].classList.remove("square-colored");
    }

    let game = document.getElementById("game");

    game.innerHTML = "";

    let new_main = document.createElement("div");
    new_main.id = "main";
    // main1.style.width = 500;
    // main1.style.height = 500;

    
    game.appendChild(new_main);
    
    document.getElementById("main").style.color ="green";
    document.getElementById("main").style.height = String(size*10) + "px";
    document.getElementById("main").style.width = String(size*10) + "px";


    main.innerHTML = "";

    drawBoard(new_main, size);

    const squares = document.querySelectorAll('.square');

    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover",function() {
            // this.style.backgroundColor = "black";
            this.classList.add("square-colored");
        })
    }

})