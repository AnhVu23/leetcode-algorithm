/**
 * Solution for two sum with sorted array problem
 */
const twoSum = function(numbers, target) {
    for (i = 0; i < numbers.length; i++) {

    }
    let leftPoint = 0
    let rightPoint = numbers.length - 1
    while (leftPoint <= rightPoint) {
        if (numbers[leftPoint] + numbers[rightPoint] === target) break
        else if (numbers[leftPoint] + numbers[rightPoint] < target) leftPoint++
        else rightPoint--
    }
    return [leftPoint + 1, rightPoint + 1]
}
