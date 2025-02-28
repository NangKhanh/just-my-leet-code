/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let i = 0, j = 1, k = nums.length - 1;
    const sortedNums = nums.sort((a, b) => a - b);
    let sum = sortedNums[i] + sortedNums[j] + sortedNums[k]

    for (i; i < sortedNums.length; i++) {
        j = i + 1;
        k = nums.length - 1
        while (j < k) {
            const currentsum = sortedNums[i] + sortedNums[j] + sortedNums[k]
            if (currentsum === target) {
                return currentsum
            } else if (currentsum > target) {
                k--
            } else {
                j++
            }

            if (Math.abs(target - sum) > Math.abs(target - currentsum)) {
                sum = currentsum
            }
        }

    };
    return sum
}
console.log(threeSumClosest([1, 1, 1, 0], -100)); // 300