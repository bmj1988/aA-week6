// Iterative solution - DO NOT MODIFY
function iterativeSolution(data) {
    const byCompletion = { //creates an object with two keys, arrays as their values
        complete: [],
        incomplete: []
    };

    for (const person of data) { //for in loop
        if (person.isComplete) { // if a key isComplete has a truthy value, the name is pushed into the complete array
            byCompletion.complete.push(person.name);
        } else {
            byCompletion.incomplete.push(person.name);
        }
    }

    return byCompletion; // returns obj with arrays of complete and not complete
}

function recursiveSolution(data) {
    const byCompletion = {
        complete: [],
        incomplete: []
    };
    if (data.length === 0) return byCompletion

    let obj = data[0]
    if (obj.isComplete) byCompletion.complete.push(obj.name)
    else {
        byCompletion.incomplete.push(obj.name)
    }
    let compData = recursiveSolution(data.slice(1)) // this returns an object
     byCompletion['complete'] = [byCompletion['complete'], ...compData['complete']].flat()
     byCompletion['incomplete'] = [byCompletion['incomplete'], ...compData['incomplete']].flat()
    return byCompletion
}
////// YAKE SOLUTION - should be noted that this solution does not return in the correct order while mine does
function recursiveSolution(data) {
    const byCompletion = {
        complete: [],
        incomplete: []
    };
    if (data.length === 0) return byCompletion


    let compData = recursiveSolution(data.slice(1)) // this returns an object
     let obj = data[0]
     if (obj.isComplete) compData.complete.push(obj.name)
     else {
        compData.incomplete.push(obj.name)
    }
    return compData
}


const data1 = [
    { name: "Johann", score: 0, isComplete: true},
    { name: "Vanessa", score: 50, isComplete: false},
    { name: "Ryder", score: 90, isComplete: true},
    { name: "Dwayne", score: 100, isComplete: true},
    { name: "Bekah", score: 0, isComplete: true}
];

console.log(iterativeSolution(data1));
