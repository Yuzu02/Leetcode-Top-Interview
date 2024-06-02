//? Source: https://leetcode.com/problems/contains-duplicate/

// Solution 1 - Using a Set => Less runtime but more memory
function containsDuplicate1(nums: number[]): boolean {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

//* Time complexity: O(n)
//* Space complexity: O(n)

// Solution 2  - Using sorting => More runtime but less memory
function containsDuplicate2(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
}

//* Time complexity: O(nlogn)
//* Space complexity: O(1)

export { containsDuplicate1, containsDuplicate2 };