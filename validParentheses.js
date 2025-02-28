/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (defineChar[s[i]]) {
            stack.push(defineChar[s[i]])
        } else if (stack[stack.length - 1] === s[i]) {
            stack.pop()
        } else {
            return false
        }
    }

    return !stack.length
};
const defineChar = { '(': ')', '{': '}', '[': ']' }

console.log(isValid("[][]"));
