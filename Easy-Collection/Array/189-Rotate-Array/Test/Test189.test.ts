import test from "ava";
import { rotate1, rotate2 } from "../Solution/solution189";

// Default test
test("Default test", (t) => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  rotate1(nums, k);
  t.deepEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
});

// Test case 1
test("Rotate array 1 position using rotate1", (t) => {
  const nums = [1, 2, 3, 4, 5, 6];
  const k = 1;
  rotate1(nums, k);
  t.deepEqual(nums, [6, 1, 2, 3, 4, 5]);
});

// Test case 2
test("Rotate array 2 positions using rotate2", (t) => {
  const nums = [1, 2, 3, 4, 5];
  const k = 2;
  rotate2(nums, k);
  t.deepEqual(nums, [4, 5, 1, 2, 3]);
});

// Test case 3
test("Rotate array full circle using rotate1", (t) => {
  const nums = [1, 2, 3];
  const k = 4;
  rotate1(nums, k);
  t.deepEqual(nums, [3, 1, 2]);
});

// Test case 4
test("k is 0", (t) => {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  rotate1(nums, 0);
  rotate2(nums, 0);
  t.deepEqual(nums, [1, 2, 3, 4, 5, 6, 7]);
});

export default test;
