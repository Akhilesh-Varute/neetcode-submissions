class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Step 1: frequncy map
        const freq = new Map();
        for (const n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1);
        }

        // Step 2: 
        return [...freq.keys()].sort((a,b)=> freq.get(b) - freq.get(a)).slice(0,k)
    }
}
