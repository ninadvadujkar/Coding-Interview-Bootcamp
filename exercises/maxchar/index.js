// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    str.split('').map((char) => {
        if(!charMap.hasOwnProperty(char)) charMap[char] = 1;
        else charMap[char]++;
    });
    let highestKey = str.charAt(0);
    Object.keys(charMap).map((k) => {
        if(charMap[k] > charMap[highestKey]) {
            highestKey = k;
        }
    });
    return highestKey;
}

module.exports = maxChar;
