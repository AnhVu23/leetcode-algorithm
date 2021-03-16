/**
 * Solution using binary search
 **/

const isPerfectSquare = function(num) {
    if (num === 0) {
        return false
    } else if (num === 1) {
        return true
    }
    let left = 1
    let right = num
    while (left <= right) {
        const mid = left + Math.round((right - left) / 2)
        if (mid > num / mid) {
            right = mid - 1
        } else if (mid < num / mid) {
            left = mid + 1
        } else {
            return true
        }
    }
    return false
}
