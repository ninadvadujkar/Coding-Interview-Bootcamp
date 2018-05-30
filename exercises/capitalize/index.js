// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let temp = str.split(/\s+/);
    let finalArr = [];
    for(let word of temp) {
        let newWord = word[0].toUpperCase() + word.slice(1);
        finalArr.push(newWord);
    }
    return finalArr.join(' ');
}

module.exports = capitalize;
