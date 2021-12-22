"use strict";

/* The input is object, which `keys` are student's names and `values` are `array` of their scores.
   Find the student with the best average score. */

function getBestStudent(obj) {
  if(typeof obj !== "object" || obj === null) {
    return "The argument of function must be an object!";
  }

  let bestAverageScore = 0;

  for(let key in obj) {
    if(!Array.isArray(obj[key])) {
      return `The value of ${key} is not an array!`;
    }

    for(let i = 0; i < obj[key].length; i++) {
      const averageScore = Math.floor(obj[key].reduce((aggr, val) => aggr + val) / obj[key].length);
      if(averageScore > bestAverageScore) {
        bestAverageScore = averageScore;
      }
    }
  }

  return  bestAverageScore;
}

console.log(getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
})); // 90

console.log(getBestStudent({
  Joe: [10, 60, 100],
  Kate : 100,
})); // The value of Kate is not an array!