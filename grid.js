
/*
Time Complexity: O(2^(n+m))
Space Complexity: O(n+m)
*/

function expGridTraveler(m, n) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;
    return expGridTraveler(m-1, n) + expGridTraveler(m, n-1);
}

function memoGridTraveler(m,n, memo={}) {
    const key = m + ',' + n;
    const revKey = n + ',' + m; // doesn't appear to affect the empirical runtime much
    if (key in memo) return memo[key];
    if (revKey in memo) return memo[revKey];
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;
    memo[key] = memoGridTraveler(m-1, n, memo) + memoGridTraveler(m, n-1, memo);
    return memo[key]


}

console.log(memoGridTraveler(2,2));
console.log(memoGridTraveler(2,3));
console.log(memoGridTraveler(3,3));
console.log(memoGridTraveler(4,4));
console.log(memoGridTraveler(18,18));


