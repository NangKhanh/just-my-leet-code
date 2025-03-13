/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let tempNumber = x
    let below0 = false
    if (x < 0) {
        tempNumber = - x
        below0 = true
    }
    let str = (tempNumber + "").split("").reverse()
    // let left = 0
    // let right = str.length - 1

    // while (right > left) {
    //     const temp = str[left]
    //     str[left] = str[right]
    //     str[right] = temp
    //     right--
    //     left++
    // }

    const result = parseInt(str.join(""))
    if (result > Math.pow(2, 31)) {
        return 0;
    }
    return below0 ? - result : result
};