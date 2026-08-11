class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let dp = [];
        const n = prices.length;

        for(let i=0;i<n;i++){
            dp[i] = 0;
        }

        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                dp[i] = Math.max(dp[i], prices[j] - prices[i]);
                maxProfit = Math.max(maxProfit, dp[i]);
            }
        }

        return maxProfit;

    }
}