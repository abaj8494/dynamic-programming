const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);

    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const candidate = [ ...table[i], num];
                if (!table[i + num] || candidate.length < table[i + num].length) {
                    table[i + num] = candidate;
                } // null and undefined are falsy values in js.
            }
        }
    }

    return table[targetSum];

}

console.log(bestSum(7, [2,3])) // [3,2,2]
console.log(bestSum(7, [5,3,4,7])) // [4,3]
console.log(bestSum(7, [2,2])) // null
console.log(bestSum(8, [2,3,5])) // [3,2,2]
console.log(bestSum(8, [1,2,4,5])) // [3,2,2]
console.log(bestSum(300, [7,14])) // null
console.log(bestSum(300, [7,11,23,60])) // [60,60,60,60,60]
console.log(bestSum(100, [1,2,25,5])) // [25,25,25,25]
