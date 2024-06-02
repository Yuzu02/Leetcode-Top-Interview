//? Source: https://leetcode.com/problems/reverse-string/

// Solution 1 - Using two pointers => Less memory but more runtime
/**
 Do not return anything, modify s in-place instead.
*/
function reverseString1(s: string[]) {
  let left = 0;

  let right = s.length - 1;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[left++], s[right--]] = [s[right], s[left]];
  }
}

//* Time complexity: O(n)
//* Space complexity: O(1)

// Solution 2 - Using two pointers => Less runtime but more memory
/**
 Do not return anything, modify s in-place instead.
*/
function reverseString2(s: string[]): void {
    let start = 0;
    let end = s.length - 1;
    
    while(start < end){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
}; 

//* Time complexity: O(n)
//* Space complexity: O(n)

export { reverseString1, reverseString2 };
