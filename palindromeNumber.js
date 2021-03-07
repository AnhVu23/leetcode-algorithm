/**
 * Palindrome number solution (without transforming number to string)
 */
const isPalindrome = function(x) {
    if (x < 0) {
        return false
    } else if (x === 0) {
        return true
    } else {
        let palindrome = 0
        let copied = x
        while (copied) {
            palindrome = palindrome * 10 + copied % 10
            copied = Math.floor(copied / 10)
        }
        return palindrome === x
    }
}
