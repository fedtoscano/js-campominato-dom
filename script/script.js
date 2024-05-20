
const startBtn = document.querySelector("button#start-game")
// ? const resetBtn?

function gameStart(){

    const mainEl = document.querySelector("main");
    const gridEl = document.createElement("div");
    gridEl.id = "grid";
    mainEl.innerHTML = ""
    mainEl.appendChild(gridEl);

    const selectDifficultyEl = document.querySelector("#select-difficulty");

    let numberOfSquares;
    if(selectDifficultyEl.value==="easy"){
        numberOfSquares = 100
    }else if(selectDifficultyEl.value ==="medium"){
        numberOfSquares = 81
    }else{
        numberOfSquares = 49
    }

    let bombList = [];
    for (let index = 0; index < 16; index++) {
        let randomNum = makeRandomInt(1, numberOfSquares);
        while (bombList.includes(randomNum)) {
            randomNum = makeRandomInt(1, numberOfSquares);
        }
        bombList.push(randomNum);
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

        
        const textContent = document.createElement("span")
        textContent.append(index+1)

        bombList.forEach(num => {
            if(num===Number.parseInt(textContent.innerHTML, 10)){
                console.log("its a bomb", num)
            }
            
        });

        //! questa va riscritta con la funzione "vera" per le bombe
        newSquare.addEventListener('click', function(){
            this.classList.add("bg-light-blue")
            console.log(this.innerText)
        })
    
        newSquare.appendChild(textContent)
        gridEl.appendChild(newSquare)
    }



    console.log(bombList)


    // button.disabled = true
}
/**returns a random number between a min and a max value
 * 
 * @param {*} min the min number   
 * @param {*} max the max number
 * @returns random integer between min and max
 */
function makeRandomInt(min, max){
    return Math.floor(Math.random() * ((max - min) +1) + min)
}

startBtn.addEventListener('click', gameStart)