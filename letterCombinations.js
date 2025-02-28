/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    if (digits.length === 0) {
        return []
    }
    if (digits.length === 1) {
        return keyboard[digits].split('')
    }
    let tempResult = mapperTwoDigits(keyboard[digits[0]], keyboard[digits[1]])
    for (let i = 2; i < digits.length; i++) {54
        tempResult = mapperTwoDigits(tempResult, keyboard[digits[i]])
    }
    return tempResult
};


const mapperTwoDigits = (left, right) => {
    let result = []
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
            result.push(left[i] + right[j])
        }
    }
    return result
}

console.log(letterCombinations('237'));
