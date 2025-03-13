/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle || needle === '') return 0
    if (haystack.length < needle.length) return -1
    for (let i = 0; i < haystack.length; i++) {
        const firstLetterNeedle = needle[0]
        if (firstLetterNeedle === haystack[i]) {
            if (haystack.slice(i, i + needle.length) === needle) {
                return i
            }
        }
    }

    return -1
};


console.log(strStr('abc', 'c')) // 2