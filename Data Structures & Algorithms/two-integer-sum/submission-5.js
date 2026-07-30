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
            indexMap[nums[i]] = i;
        }

        for(let i=0;i<nums.length;i++){
            const remaining = target - nums[i];

            if(indexMap[remaining] && indexMap[remaining] != i){
                result.push(i);
                result.push(indexMap[remaining]);
                return result;
            }
        }

        return result;
    }
}
