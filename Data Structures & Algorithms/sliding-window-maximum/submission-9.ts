class SegmentTree {
    private n: number;
    private tree: number[];

    constructor(N: number, A: number[]) {
        this.n = 1;

        while (this.n < N) {
            this.n <<= 1;
        }

        this.build(N, A);
    }

    build(N: number, A: number[]): void {
        this.tree = new Array(2 * this.n).fill(-Infinity);

        for (let i = 0; i < N; i++) {
            this.tree[this.n + i] = A[i];
        }

        for (let i = this.n - 1; i > 0; i--) {
            this.tree[i] = Math.max(
                this.tree[i << 1],
                this.tree[(i << 1) | 1]
            );
        }
    }

    query(l: number, r: number): number {
        let res = -Infinity;

        l += this.n;
        r += this.n + 1;

        while (l < r) {
            if (l & 1) res = Math.max(res, this.tree[l++]);
            if (r & 1) res = Math.max(res, this.tree[--r]);

            l >>= 1;
            r >>= 1;
        }

        return res;
    }
}

class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        const n = nums.length;
        const segTree = new SegmentTree(n, nums);
        const output: number[] = [];

        for (let i = 0; i <= n - k; i++) {
            output.push(segTree.query(i, i + k - 1));
        }

        return output;
    }
}