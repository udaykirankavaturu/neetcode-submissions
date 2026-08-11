class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = Infinity;
        let max = 0;

        for(let p of prices){
            min = Math.min(min, p);
            max = Math.max(max, p-min);
        }

        return max;

    }
}