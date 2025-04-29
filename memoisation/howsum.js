/*
n = array length
m = targetSum (i.e. the max tree depth)
Time Complexity = O(2^(n+m) * m) (copying elementwise with spread operator)
Space Complexity = O(m)
*/

function howSum(targetSum, numbers) {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const newTarget = targetSum - num;
        const result = howSum(newTarget, numbers);
        if (result !== null) {
            // spread operator. copies thingns into a new array.
            return [...result, num]; //could I just push? -> no that would mutate
            // and fk things up across recursive calls. note, this copy is O(m)
        }
    }
    return null;
}

//console.log(howSum(7, [2,3])) // [3,2,2]
//console.log(howSum(7, [5,3,4,7])) // [4,3]
//console.log(howSum(7, [2,2])) // null
//console.log(howSum(8, [2,3,5])) // [3,2,2]
//console.log(howSum(300, [7,14])) // null
//console.log(howSum(300, [7,11,23,60])) // [60,60,60,60,60]

/* runs in 0.03s vs. 7.00 seconds of above^
Time Complexity = O(m^2 * n)
Space Complexity = O(m*m) (m keys with m length arrays)
*/
function memoHowSum(targetSum, numbers, memo={}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const newTarget = targetSum - num;
        const result = memoHowSum(newTarget, numbers, memo);
        if (result !== null) {
            memo[targetSum] = [ ...result, num ];
            return memo[targetSum]; 
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(memoHowSum(7, [2,3])) // [3,2,2]
console.log(memoHowSum(7, [5,3,4,7])) // [4,3]
console.log(memoHowSum(7, [2,2])) // null
console.log(memoHowSum(8, [2,3,5])) // [3,2,2]
console.log(memoHowSum(300, [7,14])) // null
console.log(memoHowSum(300, [7,11,23,60])) // [60,60,60,60,60]
