class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxAmount = 0;

        let i = 0;
        let j = heights.length - 1;

        while(i<j){

            const dist = j-i;
            const min = Math.min(heights[i], heights[j]);
            const amount = dist * min;

            if(amount > maxAmount){
                maxAmount = amount;
            }

            if(heights[i] < heights[j]){
                i++;
            } else {
                j--;
            }
        }

        return maxAmount;

    }
}
