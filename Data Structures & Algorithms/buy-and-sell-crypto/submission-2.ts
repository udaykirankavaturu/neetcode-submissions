class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = Infinity;
        let maxProfit = 0;

        for(let p of prices){
            min = Math.min(min, p);
            maxProfit = Math.max(maxProfit, p-min);
        }

        return maxProfit;

    }
}