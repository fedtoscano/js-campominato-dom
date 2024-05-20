
const startBtn = document.querySelector("button#start-game")

function gameStart(){

    const mainEl = document.querySelector("main");
    const gridEl = document.createElement("div");
    gridEl.id = "grid";

    mainEl.appendChild(gridEl);

    const selectDifficultyEl = document.querySelector("#select-difficulty");

    let numberOfSquares;
    if(selectDifficultyEl.value==="easy"){
        numberOfSquares = 49
    }else if(selectDifficultyEl.value ==="medium"){
        numberOfSquares = 81
    }else{
        numberOfSquares = 100
    }

    for (let index = 0; index < numberOfSquares; index++) {
        const newSquare = document.createElement("article");
        newSquare.classList.add("square")

            if(selectDifficultyEl.value==="easy"){
                newSquare.classList.add("square-easy")
            }else if(selectDifficultyEl.value==="medium"){
                newSquare.classList.add("square-medium")
            }else{
                newSquare.classList.add("square-hard")
            }

        newSquare.addEventListener('click', function(){
            this.classList.add("bg-light-blue")
            console.log(this.innerText)
        })
    
        const textContent = document.createElement("span")
        textContent.append(index+1)
    
        newSquare.appendChild(textContent)
        gridEl.appendChild(newSquare)
    }
    // button.disabled = true
}

startBtn.addEventListener('click', gameStart)