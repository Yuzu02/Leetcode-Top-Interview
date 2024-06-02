//? Source : [189. Rotate Array] (https://leetcode.com/problems/rotate-array/) 

// Solution 1 - Using extra array => More memory but less runtime
function rotate1(nums: number[], k: number): void {
  /**

 Do not return anything, modify nums in-place instead.

 */
  const n = nums.length;
  const newArr = new Array(n);

  for (let i = 0; i < n; i++) {
    newArr[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = newArr[i];
  }
}

//* Time complexity: O(n)
//* Space complexity: O(n)

// Solution 2 - Using Splice and Unshift => Less memory but more runtime
/**

 Do not return anything, modify nums in-place instead.

 */
function rotate2(nums: number[], k: number): void {
  k = k % nums.length;
  let temp = nums.slice(nums.length - k, nums.length);
  nums.splice(nums.length - k, k);
  nums.unshift(...temp);
}

//* Time complexity: O(n)
//* Space complexity: O(k)

export { rotate1, rotate2 };
