class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let tempSet = new Set([...nums]);

        let maxLength = 0;
        for(let num of nums){
            if(!tempSet.has(num-1)){
                let seqLength = 0;
                let curr = num
                while(tempSet.has(curr)){
                    seqLength++;
                    curr++;
                }

                if(seqLength > maxLength){
                    maxLength = seqLength;
                }
            }

        }

        return maxLength;
    }
}
