/*
The final progression to the `construct` problems.

Returns all the possible ways the targetString can be formed as a 2d array
of prefix substrings:
*/

const allConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo); 
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result
    return result;
}

/* my attempt rip:
const allConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];
    
    let totalWays = []
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) { // looking for index of a string
            const suffix = target.slice(word.length);
            const newWays = allConstruct(suffix, wordBank, memo);
            if (newWays !== null) {
                memo[target] = [ ...newWays, word];
                return memo[target];
            }
        }
    }
    memo[target] = null;
    return null;
}
*/


console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
/*
[   [ 'ab', 'cd', 'ef'],
    [ 'ab', 'c', 'def'],
    [ 'abc', 'def'],
    [ 'abcd', 'ef']
]
*/

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
/*
[   [ 'purp', 'le'],
    [ 'p', 'ur', 'p', 'le']
]
*/
console.log(allConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"]));
// []

console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee","eeee","eeeee","eeeeee"]));
// []


/*
Time Complexity: O(n^m)
Space Complexity: O(m)
*/
