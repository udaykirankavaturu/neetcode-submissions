class Solution {
    maxSlidingWindow(nums, k) {
        const q = [];
        let head = 0;
        const res = [];

        for (let r = 0; r < nums.length; r++) {
            while (
                q.length > head &&
                nums[q[q.length - 1]] < nums[r]
            ) {
                q.pop();
            }

            q.push(r);

            if (q[head] <= r - k) {
                head++;
            }

            if (r >= k - 1) {
                res.push(nums[q[head]]);
            }
        }

        return res;
    }
}
