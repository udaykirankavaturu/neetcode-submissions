class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let ub = piles[0];
        let sum = 0;

        for(let p of piles){
            ub = Math.max(ub, p);
            sum += p;
        }

        let mink = Infinity;
        let l = 1;
        let r = ub;
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            let time = this.getTime(mid, piles);

            if(time > h){
                l = mid + 1;
            } else if (time <= h){
                mink = Math.min(mink, mid);
                r = mid -1;
            }
        }

        return mink;
    }

    private getTime(rate: number, piles: number[]){
        let time = 0;
        for(let p of piles){
            time += Math.ceil(p/rate);
        }
        return time;
    }
}
