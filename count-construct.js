const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target.length === 0) return 1;

    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            totalCount += countConstruct(suffix, wordBank, memo);
        }
    }
    memo[target] = totalCount;
    return totalCount;
}


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"])); //0
console.log(countConstruct("enterapotentpot", ["a","p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee","eeee","eeeee","eeeeee"])); // 0


/*
m = target.length
n = wordbank.length
Naive:
    - Time: O(n^m * m) n^m nodes with O(m) operation each
    - Space: O(m^2): m depth with m slicing
Memoised:
    - Time: O(n*m^2) each case is cached, n*m nodes with O(m) slicing each
    - Space O(m^2): m depth with m slicing m^2 + m^2 memoisation = O(m^2)
*/
