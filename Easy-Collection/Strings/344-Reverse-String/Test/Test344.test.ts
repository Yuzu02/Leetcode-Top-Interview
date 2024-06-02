import test from "ava";
import { reverseString1, reverseString2 } from "../Solution/solution344";

//* Tests Cases

// Solution 1
test("default test case 1", (t) => {
  const input = ["h", "e", "l", "l", "o"];
  reverseString1(input);
  t.deepEqual(input, ["o", "l", "l", "e", "h"]);
});

// Solution 2
test("default test case 2", (t) => {
  const input = ["h", "e", "l", "l", "o"];
  reverseString2(input);
  t.deepEqual(input, ["o", "l", "l", "e", "h"]);
});

// Test cases for both solutions
test("empty string", (t) => {
  const input = [];
  reverseString1(input);
  reverseString2(input);
  t.deepEqual(input, []);
});

test("multiple characters #1 ", (t) => {
  const input = ["a", "b", "c", "d"];
  reverseString1(input);
  t.deepEqual(input, ["d", "c", "b", "a"]);
});

test("multiple characters #2 ", (t) => {
  const input = ["a", "b", "c", "d"];
  reverseString2(input);
  t.deepEqual(input, ["d", "c", "b", "a"]);
});

export default test;
