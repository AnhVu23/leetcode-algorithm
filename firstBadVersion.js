/**
 * Solution for first bad version using binary search. Result: Runtime: 68 ms, faster than 97.6% of JavaScript online submissions for First Bad Version.
 Memory Usage: 38.3 MB, less than 79.91% of JavaScript online submissions for First Bad Version.
 * Link: https://leetcode.com/problems/first-bad-version/
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (isBadVersion(1)) {
            return 1
        }
        let cur = n
        let lastPos = n
        while (cur >= 1) {
            if (isBadVersion(cur)) {
                lastPos = cur
                cur = Math.floor(cur / 2)
            } else {
                if (lastPos === cur + 1) {
                    return lastPos
                }
                cur += Math.floor((lastPos - cur) / 2)
            }
        }
    };
};
