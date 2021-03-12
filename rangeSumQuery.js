/**
 * Solving the problem by using caching strategy
 */
const NumArray = function(nums) {
    this.preSum = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        this.preSum[i] = this.preSum[i - 1] + nums[i]
    }
    console.log(this.preSum)
};

NumArray.prototype.sumRange = function(i, j) {
    if (i === 0) {
        return this.preSum[j]
    }
    return this.preSum[j] - this.preSum[i - 1]
}
