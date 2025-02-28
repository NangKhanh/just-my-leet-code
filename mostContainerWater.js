/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let value = 0
    let left = 0, right = height.length - 1

    while (right > left) {
        // console.log(height[left], height[right]);
        const temp = Math.min(height[left], height[right]) * (right - left)
        value = Math.max(temp, value)

        if (height[left] < height[right]) {
            left++
        } else {
            right --
        }
    }

    return value

};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
