class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
       let prefix = [];
       for(let i=0;i<nums.length;i++){
        prefix[i] = (prefix[i-1] === undefined ? 1 : prefix[i-1]) * nums[i];
       }

       let suffix = [];
       for(let i=nums.length-1; i>=0; i--){
        suffix[i] = (suffix[i+1] === undefined ? 1 : suffix[i+1]) * nums[i];
       }

       let result = [];
       for(let i=0; i< nums.length; i++){
        result[i] = (prefix[i-1] === undefined ? 1 : prefix[i-1]) * (suffix[i+1] === undefined ? 1 : suffix[i+1]);
       }

       return result;
    }
}
