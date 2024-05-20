
const startBtn = document.querySelector("button#start-game")
startBtn.addEventListener('click', gameStart)
// // ? const resetBtn?

function gameStart(){
    const mainEl = document.querySelector("main");
    const gridEl = document.createElement("div");
    gridEl.id = "grid";
    mainEl.innerHTML = ""
    mainEl.appendChild(gridEl);

    const scoreTextEl = document.createElement("p");
    const scoreNumEl = document.createElement("span")
    scoreTextEl.append("Your total score is: ");
    let score=0
    scoreNumEl.append(score)
    scoreTextEl.appendChild(scoreNumEl);
    mainEl.appendChild(scoreTextEl);

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

        function isBomb(square){ 
            let gameOver= false;
            if(square.classList.contains("square-bomb")){
                square.classList.add("bg-bomb")
                gameOver = true
            }else {
                square.classList.add("bg-light-blue")
            }

            if(gameOver){
                const allBombs = document.querySelectorAll(".square-bomb")
                allBombs.forEach(bomb => {
                bomb.classList.add("bg-bomb")
                });
                
                const allSquares = document.querySelectorAll(".square");
                allSquares.forEach(square => {
                square.removeEventListener('click', onClick);
                })
                
            } else{
                score++
                scoreNumEl.innerHTML = score
                square.removeEventListener('click', onClick);
            }
        }
        
        function onClick(event){
            isBomb(event.currentTarget)
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
        const textContent = document.createElement("span");
        textContent.append(index + 1);
        newSquare.appendChild(textContent);

        if (bombList.includes(index + 1)) {
            newSquare.classList.add("square-bomb");
        }
        
        newSquare.appendChild(textContent)
        newSquare.addEventListener('click', onClick)
        gridEl.appendChild(newSquare)
    }
    console.log(bombList)
}



/**returns a random number between a min and a max value
 * 
 * @param {*} min the min number   
 * @param {*} max the max number
 * @returns random integer between min and max
 */
function makeRandomInt(min, max){
    return Math.floor(Math.random() * ((max - min) +1) + min)
};

