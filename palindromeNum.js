/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let arr = (x + '').split("")
    let left = 0, right = arr.length - 1
    while (left < right) {
        if (arr[left] !== arr[right])
            return false
        left++
        right--
    }
    return true
};

console.log(isPalindrome(34543));
