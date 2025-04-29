/*
Problem: 
    - Form a targetString from the prefixes in WordBank
Return:
    - True if possible, false otherwise

Note that I am now using an arrow function as opposed to the older
`function myFunc() {}` syntax.

This older syntax creates it's own `this` object, whilst arrow funcs 
inherit them from their contexts.
*/

const canConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;
    
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) { // js way to check prefix
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }

        }
    }
    memo[target] = false;
    return false;
}


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"]));
console.log(canConstruct("enterapotentpot", ["a","p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee","eeee","eeeee","eeeeee"]));

/*
Analyis:
    Let n = wordbank.length (i.e. width of recursion tree)
        m = target.length (i.e. depth of tree)
    Naive:
        Time Complexity = O(n^m * m) for each recursion call, O(m) worst-case slicing
        Space Complexity = O(m^2) m depth, slicing in m. 
    Memoised:
        Time Complexity = O(n*m^2) every combination is cached, O(m) slicing
        Space Complexity = O(m^2) our memo object creates m values of m worst-case lengths
*/
