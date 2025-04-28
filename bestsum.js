function bestSum(targetSum, numbers, memo={}) {
    // memo object keys = num, value = array that satisfies the key
    if (targetSum in memo) return memo[targetSum]; 
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortest = null;
    for (let num of numbers) {
        const nextTarget = targetSum - num;
        const result = bestSum(nextTarget, numbers, memo);
        if (result !== null) {
            const contender = memo[targetSum] = [ ...result, num];
            if (shortest === null || contender.length < shortest.length) {
                shortest = contender;
            }
        }
    }
    memo[targetSum] = shortest;
    return shortest;
}

console.log(bestSum(7, [2,3])) // [3,2,2]
console.log(bestSum(7, [5,3,4,7])) // [4,3]
console.log(bestSum(7, [2,2])) // null
console.log(bestSum(8, [2,3,5])) // [3,2,2]
console.log(bestSum(8, [1,2,4,5])) // [3,2,2]
console.log(bestSum(300, [7,14])) // null
console.log(bestSum(300, [7,11,23,60])) // [60,60,60,60,60]
