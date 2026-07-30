class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let countMap = {};

        for(let num of nums){
            if(countMap[num]) return true;

            countMap[num] = 1;
        }

        return false;
    }
}
