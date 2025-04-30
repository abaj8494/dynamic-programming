/*
m = target.length
n = wordBank.length
Time Complexity: O(m^2*n) m loop with n loop with m slice
Space Complexity: O(m) m table.
*/
const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for ( let i = 0; i <= target.length; i++) {
        if( table[i] === true) {
            for (let word of wordBank) {
                if (target.indexOf(word, i) === i) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"]));
console.log(canConstruct("enterapotentpot", ["a","p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee","eeee","eeeee","eeeeee"]));

