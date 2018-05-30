// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //let tempIntArr = n.toString().split('').reverse();
    // // Logic #1 to deal with negative nos.
    // let isNegativeNumber = Math.sign(parseInt(tempIntArr.join(''))) === -1 ? true : false;
    // if(isNegativeNumber) {
    //     tempIntArr.shift();
    //     tempIntArr.push('-');
    // }
    // let reversedArr = tempIntArr.reverse();
    // // Logic #2 to deal with negative nos.
    // // // Handle negative numbers
    // // if(tempIntArr[tempIntArr.length - 1] === '-') {
    // //     reversedArr.pop();
    // //     reversedArr.unshift('-');
    // // }
    // return parseInt(reversedArr.join(''));
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// Instructor's suggestions/help
// Math.sign()