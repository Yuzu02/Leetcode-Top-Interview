import test from "ava";
import { isPalindrome1, isPalindrome2 } from "../Solution/solution125";

//* Test Cases

// Test case 1
test("isPalindrome1 returns true for a palindrome string", (t) => {
  const result = isPalindrome1("racecar");
  t.true(result);
});

// Test case 2
test("isPalindrome1 returns false for a non-palindrome string", (t) => {
  const result = isPalindrome1("hello");
  t.false(result);
});

// Test case 3
test("isPalindrome2 returns true for a palindrome string", (t) => {
  const result = isPalindrome2("noon");
  t.true(result);
});

// Test case 4
test("isPalindrome2 returns false for a non-palindrome string", (t) => {
  const result = isPalindrome2("world");
  t.false(result);
});

// Test case 5
test("test both functions with an empty string", (t) => {
  const result1 = isPalindrome1("");
  const result2 = isPalindrome2("");
  t.true(result1);
  t.true(result2);
});
