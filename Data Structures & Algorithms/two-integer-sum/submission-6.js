class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];

        let indexMap = {};

        for(let i=0;i<nums.length;i++){
            const remaining = target - nums[i];

            if(indexMap[remaining] !== undefined && indexMap[remaining] != i){
                result.push(indexMap[remaining]);
                result.push(i);
                return result;
            } else {
                indexMap[nums[i]] = i;
            }
        }

        return result;
    }
}
