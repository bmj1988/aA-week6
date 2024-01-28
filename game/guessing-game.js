///////////////////////////
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
///////////////////////
var rangeMin = 0
var rangeMax = 0
///////////////////////
var newGamePlus = false
var diffMode = false

///////////////////////
const askRange = function () {
    rl.question("Enter a max number:", (answer1) => {
        if (Number(answer1) == answer1) {
            rl.question("Enter a min number: ", (answer2) => {
                if (Number(answer2) == answer2) {
                    console.log(`I'm thinking of a number between ${answer2} and ${answer1}...`)
                    rangeMax = answer1
                    rangeMin = answer2
                    secretNumber = randomInRange(Number(answer2), Number(answer1))
                    askGuess()
                } else {
                    console.log("Numbers only please! Try again.")
                    askRange();
                }
            })
        }
        else {
            console.log("Numbers only please! Try again.")
            askRange();
        }
    })
}
////////////////////////
const askDifficulty = function () {
    rl.question('Which difficulty do you choose? ["Easy"/"Hard"]', diff => {
        diffMode = true
        if (diff === 'Easy' || diff === 'easy' || diff === 'ez') {
            numAttempts = 7
        }
        else if (diff === 'Hard' || diff === 'hard') {
            numAttempts = 3
        }
        else {
            console.log('Easy or Hard only please!')
            askDifficulty()
        }

        if (!newGamePlus) {
            askRange()
        }
        else {
            askGuess()
        }

    })
}
////////////////////////
const askLimit = function () {
    rl.question('How many turns would you like?', (num) => {
        if (Number(num) == num) {
            numAttempts = num
            if (!newGamePlus) {
                askRange()
            }
            else {
                askGuess()
            }


        }
        else {
            console.log("Numbers only please! Try again.")
            askLimit()
        }
    })
}
////////////////////////
var numAttempts = 5
////////////////////////

const askGuess = function () {
    rl.question("Enter a guess: ", answer => {
        if (Number(answer) == answer) {
            console.log(checkGuess(Number(answer)))
            if (Number(answer) === secretNumber) {
                console.log('You win!')
                rl.question("Do you want to play another game?", newgameanswer => {
                    if (newgameanswer === "Yes" || newgameanswer === "Y") {
                        secretNumber = randomInRange(Number(rangeMin), Number(rangeMax))
                        console.clear()
                        console.log("New game, same range - Go!")
                        newGamePlus = true;
                        if (diffMode) {
                            askDifficulty()
                        }
                        else {
                            askLimit()
                        }
                    }
                    else {
                        rl.close()
                    }

                })
            }
            numAttempts--
            if (numAttempts === 0) {
                console.log(`You lose! The number was ${secretNumber}`)
                rl.question("Do you want to play another game?", newgameanswer => {
                    if (newgameanswer === "Yes" || newgameanswer === "Y") {
                        secretNumber = randomInRange(Number(rangeMin), Number(rangeMax))
                        console.clear()
                        console.log("New game, same range - Go!")
                        newGamePlus = true;
                        if (diffMode) {
                            askDifficulty()
                        }
                        else {
                            askLimit()
                        }

                    }
                    else {
                        rl.close()
                    }
                });
            }
            if (Number(answer) !== secretNumber && numAttempts > 0) {
                askGuess()
            }
        }
        else {
            console.log("Numbers only please! Guess again.")
            askGuess()
        }
    })
};
///////////////////////////
const randomInRange = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
/////////////////////////
// secretNumber = randomInRange(0,100)
const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high.")
        return false
    }
    if (num < secretNumber) {
        console.log("Too low.")
        return false;
    }
    if (num === secretNumber) {
        console.log("Correct!")
        return true;
    }
}

askLimit()
// askGuess()

// console.log(checkGuess(1))
// console.log(checkGuess(5))
// console.log(checkGuess(6))
