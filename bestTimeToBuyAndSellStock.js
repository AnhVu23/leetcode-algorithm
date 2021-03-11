/**
 * Solve the solution by using Kandane's algorithm.
 * Inspired by this article: https://www.codingninjas.com/blog/2020/09/17/a-quick-look-at-kadanes-algorithm
 */

const maxProfit = function(prices) {
    let currentMax = 0
    let currentMaxEnd = 0
    for (let i = 1; i < prices.length; i++) {
        currentMaxEnd = currentMaxEnd + prices[i] - prices[i - 1]
        if (currentMaxEnd < 0) {
            currentMaxEnd = 0
        }
        if (currentMax < currentMaxEnd) {
            currentMax = currentMaxEnd
        }
    }
    return currentMax
}
