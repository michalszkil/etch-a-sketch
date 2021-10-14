function addSquare(main) {
    square = document.createElement("div");
    square.id = "square"
    main.appendChild(square);
}

const main = document.getElementById("main");

for (let i = 0; i < 16; i++) {
    addSquare(main);
}