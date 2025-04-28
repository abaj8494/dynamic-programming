/*
n = array length (number of items in the numbers array -> width of tree)
m = target sum (you could have a -1 for the target sum)
Time Complexity: O(n^m)
Space Complexity: O(m) (m will be the depth of tree)
*/
function canSum(targetSum, numbers) {
    if (targetSum === 0) return true;
    // could also add another basecase here instead of `if (newTarget < 0) break;`
    // if (targetSum < 0) return false;

    // you could have also used `let num of numbers`
    for (let i = 0; i < numbers.length; i++) {
        const newTarget = targetSum - numbers[i];
        if (newTarget < 0) break;
        if (canSum(newTarget, numbers)) return true;
    }
    return false;

}

console.log(canSum(7, [2,4])) // false
console.log(canSum(7, [5,3,4,7])) // true
console.log(canSum(7, [2,3])) // true
console.log(canSum(8, [2,3,5])) // true
console.log(canSum(300, [7, 14])) // false


/*
Time Complexity: O(m*n)
Space Complexity: O(m)
*/
function memoCanSum(targetSum, numbers, memo={}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;

    for (let i = 0; i < numbers.length; i++) {
        const newTarget = targetSum - numbers[i];
        if (newTarget < 0) break;
        if (memoCanSum(newTarget, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;

}
console.log(memoCanSum(7, [2,4])) // false
console.log(memoCanSum(7, [5,3,4,7])) // true
console.log(memoCanSum(7, [2,3])) // true
console.log(memoCanSum(8, [2,3,5])) // true
console.log(memoCanSum(300, [7, 14])) // false
