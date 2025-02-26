let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2, 5, 5, 0],
    [0, 3, 6, -5, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [2, 4, 6, 5, 15, 135],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
  ];

  const restGame = () => {
    turnO = true
    enableBoxes();
    msgContainer.classList.add("hide")
    // document.querySelector(".line").Style.width = "60vmin" ;
  };

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO){
            //playerO
            box.innerText ="O";
            turnO = false;
        } else {
           //playerX
           box.innerText ="X";
           turnO = true;
        }
        box.disabled= true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => { 
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disabledBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes [pattern[0]].innerText;
        let pos2val = boxes [pattern[1]].innerText;
        let pos3val = boxes [pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if ( pos1val === pos2val && pos2val === pos3val) { 
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
    //  document.querySelector(".line").Style.width = "60vmin" ;
    // document.querySelector(".line").Style.transform = `translate( ${pos1val} vw, ${pos2val}vw,) rotate(${pos3val}deg)`
}

newGameBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);
