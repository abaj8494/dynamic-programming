/*
Time Complexity: O(m^2*n)
Space Complexity: O(m^2) m length table, but max m length subarrays at each index.
*/

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [ ...table[i], num];
            }
        }

    }
    return table[targetSum];
}

console.log(howSum(7, [2,3])) // [3,2,2]
console.log(howSum(7, [5,3,4,7])) // [4,3]
console.log(howSum(7, [2,2])) // null
console.log(howSum(8, [2,3,5])) // [3,2,2]
console.log(howSum(300, [7,14])) // null
console.log(howSum(300, [7,11,23,60])) // [60,60,60,60,60]

