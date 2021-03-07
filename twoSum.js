/**
 * Solution for two sum unsorted array
 * @param nums
 * @param target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const numDict = nums.map((num, i) => ({
        value: num,
        index: i
    }))
    numDict.sort((a, b) => a.value - b.value)
    let leftPoint = 0
    let rightPoint = nums.length - 1
    while (leftPoint <= rightPoint) {
        const sum = numDict[leftPoint].value + numDict[rightPoint].value
        if (sum === target) break
        else if (sum < target) leftPoint++
        else rightPoint--
    }
    return [numDict[leftPoint].index, numDict[rightPoint].index]
}
