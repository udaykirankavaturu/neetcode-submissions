class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let lls = 0;
        let i = 0;
        let j = 0;
        let tempSet = new Set<string>();

        while (j < s.length) {
            // If character at j is a duplicate, shrink from left (i)
            while (tempSet.has(s[j])) {
                tempSet.delete(s[i]);
                i++;
            }

            // Safe to add character at j and advance right pointer
            tempSet.add(s[j]);
            lls = Math.max(lls, tempSet.size);
            j++;
        }

        return lls;
    }
}