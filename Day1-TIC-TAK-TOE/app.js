 let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turno = true;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


 
const resetGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msg.innerText = "";
};


 
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

 
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};


 
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


 
const checkWinner = () => {
    for (let pattern of winpattern) {

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;


        if (val1 !== "" && val2 !== "" && val3 !== "") {

            if (val1 === val2 && val2 === val3) {
                console.log("Winner:", val1);
                showWinner(val1);
            }

        }
    }
};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        console.log("button was clicked");


        if (turno) {
            box.innerText = "O";
            turno = false;
        } 
        else {
            box.innerText = "X";
            turno = true;
        }


        box.disabled = true;

        checkWinner();

    });

});

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);