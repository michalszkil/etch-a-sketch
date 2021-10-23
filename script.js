function addSquare(main, i, size) {
    let square = document.createElement("div");
    square.id = "square" + i;
    square.className = "square";
    square.style.width = String(500/size) + "px";
    square.style.height = String(500/size) + "px";
    main.appendChild(square);
}

function drawBoard(main, size) {

    for (let i = 0; i < size*size; i++) {
        addSquare(main, i, size);
    }
}

function clearBoard() {
    document.getElementById("main").innerHTML = '';
}

let size = 25;

let main = document.getElementById("main");

drawBoard(main, size);

const squares = document.querySelectorAll('.square');

for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover",function() {
        // this.classList.add("square-colored");
        this.style.backgroundColor = "black";
        if (document.getElementById("rainbow_checkbox").checked == true) {
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        }
    })
}

const slider = document.getElementById("sizeRange");
const slider_value = document.getElementById("sizeRangeValue");
slider_value.innerHTML = slider.value;

slider.oninput = function() {
    slider_value.innerHTML = this.value;
}

button_clear = document.getElementById("btn-clear");

button_clear.addEventListener("click", function() {
    let squares = document.querySelectorAll('.square');

    for (let i = 0; i < squares.length; i++) {
        // squares[i].classList.remove("square-colored");
        squares[i].style.backgroundColor = "white";
    }
})

button_resize = document.getElementById("btn-resize");

button_resize.addEventListener("click", function() {
    let size = document.getElementById("sizeRangeValue").innerHTML;
    console.log(size);
    let squares1 = document.querySelectorAll('.square');

    for (let i = 0; i < squares1.length; i++) {
        squares1[i].classList.remove("square-colored");
    }

    let game = document.getElementById("game");

    game.innerHTML = "";

    let new_main = document.createElement("div");
    new_main.id = "main";

    game.appendChild(new_main);
    
    document.getElementById("main").style.color ="green";
    // document.getElementById("main").style.height = String(size*10) + "px";
    // document.getElementById("main").style.width = String(size*10) + "px";
    document.getElementById("main").style.height = "500px";
    document.getElementById("main").style.width = "500px";

    drawBoard(new_main, size);

    const squares = document.querySelectorAll('.square');

    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover",function() {
            // this.classList.add("square-colored");
            this.style.backgroundColor = "black";
            if (document.getElementById("rainbow_checkbox").checked == true) {
                this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
        })
    }

})