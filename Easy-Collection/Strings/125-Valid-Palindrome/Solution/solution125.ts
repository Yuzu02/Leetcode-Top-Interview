//? Source [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

// Solution 1 - Using replace method => Good runtime and space complexity
function isPalindrome1(s: string): boolean {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }

  return true;
}

//* Time Complexity: O(n)
//* Space Complexity: O(1)

// Solution 2 - Using split method => Less runtime possible
const isPalindrome2 = (s: string): boolean => {
  const cleanStr: string = s
    .split(" ")
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  const reversed: string = cleanStr.split("").reverse().join("").toLowerCase();
  return cleanStr === reversed;
};

//* Time Complexity: O(n)
//* Space Complexity: O(n)



export { isPalindrome1, isPalindrome2 };
