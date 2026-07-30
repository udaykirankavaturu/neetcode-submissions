class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sorted_s = s.split('').sort().join();
        const sorted_t = t.split('').sort().join();

        return sorted_s === sorted_t;
    }
}
