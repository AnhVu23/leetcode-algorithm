/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Solution: Using Kandane's algorithm
 */

const maxSubArray = function(nums) {
    let sum = 0
    let maxSum = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i])
        if (sum > maxSum) {
            maxSum = sum
        }
    }
    return maxSum
};
