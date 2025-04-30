/*
m = target.length
n = wordBank.length
Time Complexity: O(m^2*n)
Space Complexity: O(m)
*/

const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for ( let i = 0 ; i <= target.length; i ++) {
        for ( let word of wordBank) {
            if (target.slice(i, word.length + i) === word) {
                table[i + word.length] += table[i];
            } 
        }
    }

    return table[target.length];
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"])); //0
console.log(countConstruct("enterapotentpot", ["a","p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee","eee","eeee","eeeee","eeeeee"])); // 0
