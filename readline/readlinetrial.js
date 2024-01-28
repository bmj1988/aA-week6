const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's up, doc?", answer => {
    console.log("you responded: " + answer);
    rl.close();
});
