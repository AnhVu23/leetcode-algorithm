const reversePositive = function(x) {
    let palindrome = 0
    let copied = x
    while (copied) {
        palindrome = palindrome * 10 + copied % 10
        copied = Math.floor(copied / 10)
        if ((palindrome > (Math.pow(2, 31) - 1) / 10 || palindrome < Math.pow(-2, 31) / 10) && copied > 0) {
            return 0
        }
    }
    return palindrome
}

const reverse = function (x) {
    if (x < 0) {
        return -reversePositive(Math.abs(x))
    } else if (x === 0 || x < 10) {
        return x
    } else {
        return reversePositive(x)
    }
}
