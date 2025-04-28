
/*
Time Complexity: O(2^n)
Space Complexity: O(n)
*/
function expFib(n) {
    if (n <= 2) return 1;
    return expFib(n-1) + expFib(n-2);
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
function dynamicFib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = dynamicFib(n-1, memo) + dynamicFib(n-2, memo);
    return memo[n]
}

console.log(expFib(5));
console.log(expFib(6));
console.log(expFib(7));
console.log(dynamicFib(50));
