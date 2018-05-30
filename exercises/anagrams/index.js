// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* 
    Can be implemented with 'sort' as well. Straightforward and simple. 'sort' is an array method
*/
function anagrams(stringA, stringB) {
    return _cleanString(stringA) === _cleanString(stringB);
}

function _cleanString(str) {
    return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}
// function anagrams(stringA, stringB) {
//     let stringANew = stringA.replace(/\W/g, '').toLowerCase();
//     let stringBNew = stringB.replace(/\W/g, '').toLowerCase();

//     if(stringANew.length !== stringBNew.length) return false;
    
//     let mapA = _buildCharMap(stringANew);
//     let mapB = _buildCharMap(stringBNew);    

//     for(let key in mapA) {
//         if(mapA[key] !== mapB[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// function _buildCharMap(str) {
//     const charMap = {};
//     for(let char of str) {
//         if(!charMap.hasOwnProperty(char)) charMap[char] = 1;
//         else charMap[char]++
//     }
//     return charMap;
// }
module.exports = anagrams;
