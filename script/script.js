
const startBtn = document.querySelector("button#start-game")
// ? const resetBtn?

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

        bombList.forEach(bombNum => {
            if(bombNum===parseInt(textContent.innerHTML, 10)){
                newSquare.classList.add("square-bomb")
            }
        })




        let gameOver;

        function isBomb(square){ 
            if(square.classList.contains("square-bomb")){
                square.classList.add("bg-bomb")
                gameOver = true
                console.log(gameOver)
            }else {
                square.classList.add("bg-light-blue")
            }
        
        }
        
        newSquare.addEventListener('click', function(){
            
            isBomb(newSquare)

            if(gameOver===true){
                //prendi tutti gli square che hanno la classe square-bomb
                //aggiungi anche bg-bomb e disabilita l'addeventlistener
                //! il query selector all restituisce una NODELIST
                const allBombs = document.querySelectorAll(".square-bomb")
                allBombs.forEach(bomb => {
                bomb.classList.add("bg-bomb")
                });
                
                const allSquares = document.querySelectorAll(".square")
                allSquares.forEach(square =>{
                    square.removeEventListener('click', function(){
                        isBomb(newSquare)
                    })
                })
                
            } else{
                score++
                scoreNumEl.innerHTML = score
            }
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
};



startBtn.addEventListener('click', gameStart)