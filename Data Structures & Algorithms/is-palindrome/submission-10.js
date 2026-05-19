class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g,"")
        const reversed = s.split("").reverse().join("")
        return s === reversed
    }
}
