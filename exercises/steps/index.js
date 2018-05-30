// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j <= i; j++) {
            str += '#';
        }
        for(let k = i+1; k < n; k++) {
            str += ' ';
        }        
        console.log(str);
    }
    // Instructor's soln
    // for(let row = 0; row < n; row++) {
    //     let stair = '';
    //     for(let column = 0; column < n; column++) {
    //         if(column <= row) {
    //             stair += '#';
    //         } else {
    //             stair += ' ';
    //         }
    //     }
    //     console.log(stair);
    // }
}

module.exports = steps;
