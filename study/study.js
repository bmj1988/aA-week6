function printAndPause(nums) {
    if (nums.length === 0) return;
    console.log(nums[0])
    setTimeout(printAndPause, nums[0], nums.slice(1))
}

const eliminateType = arr => (data) => arr.filter(el => typeof el !== data)

function eliminateType(arr) {
    return function (type) {
        let ans = []
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i]
            if (typeof el !== type) {
                ans.push(el)
            }
        }
        return ans
    }
}

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const mostFrequentVowel = function (words, counter = {}) {
    if (words.length === 0) return ''
    let most = 0
    let letter = ''
    let lastWord = words.pop()
    let counterSweep = mostFrequentVowel(words, counter)
    let split = lastWord.split('')
    split.forEach(el => {
        if (VOWELS.includes(el)) {
            if (counter[el]) {
                counter[el] += 1
            }
            else {
                counter[el] = 1
            }
        }
    });
    for (let key in counter) {
        if (counter[key] > most) {
            most = counter[key]
            letter = key
        }
    }
    return letter

}

const mostFV = function (words, counter = {}) {
    if (Array.isArray(words)) words = words.join('')

    if (words.length === 0) {
        const keys = Object.keys(counter)
        if (keys.length === 0) return ''

        let highestCount = 0;
        let highestLetter;

        keys.forEach(key => {
            const val = counter[key]
            if (val > highestCount) {
                highestCount = val
                highestLetter = key;

            }
        });
        return highestLetter
    }

    const letter = words[0]

    if (VOWELS.includes(letter)) {
        if (letter in counter) {
            counter[letter]++
        } else {
            counter[letter] = 1
        }
    }
    return mostFV(words.slice(1), counter)
}
function printOuterNumsFirst(nums) {
    if (nums.length === 1) return console.log(nums[0]);
    let num;
    if (nums.length % 2 === 0) {
        num = nums.shift();
    } else {
        num = nums.pop();
    }
    console.log(num);
    printOuterNumsFirst(nums);
}

function sort(nums, sorted=[]) {
    if (nums.length === 0) return []
    min = nums.reduce((acc, el) => Math.min(acc, el), Infinity)
    let i = nums.indexOf(min)
    nums.splice(i, 1)
    sorted = [min]
    return sorted.concat(sort(nums, sorted=[]))
}
