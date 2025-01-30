//? Source : [1-Two-Sum] (https://leetcode.com/problems/two-sum/)

export function twoSum(nums: number[], target: number): number[] {
    // Hash table to store number->index mapping
    const ht = new Map<number, number>();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        // Check if complement exists in hash table
        if (ht.has(target - num)) {
            // If found, return indices of both numbers
            return [ht.get(target - num), i];
        }
        
        // Store current number and its index in hash table
        ht.set(num, i);
    }
    
    // Return empty array if no solution found
    return [];
}