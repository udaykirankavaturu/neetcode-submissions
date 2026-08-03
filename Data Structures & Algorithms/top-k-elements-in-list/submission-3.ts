class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = {};
        for(const num of nums){
            if(countMap[num]){
                countMap[num] = countMap[num] + 1;
            } else {
                countMap[num] = 1;
            }
        }

        let arr = [];
        for(const key of Object.keys(countMap)){
            const pair = [countMap[key], parseInt(key)];
            arr.push(pair);
        }

        arr.sort((a,b) => b[0] - a[0]);
        console.log(arr);
        let result = [];
        for(let i=0;i<k;i++){
            result.push(arr[i][1]);
        }

        return result;

    }
}
