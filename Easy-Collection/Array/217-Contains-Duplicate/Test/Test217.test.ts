import test from "ava";
import { containsDuplicate1, containsDuplicate2 } from "../Solution/solution217";

//* Tests

// Test case 1
test("default test case", (t: {
  is: (arg0: boolean, arg1: boolean) => void;
  DoneCallback?: () => void;
}) => {
  const input = [1, 2, 3, 1];
  t.is(containsDuplicate1(input) || containsDuplicate2(input), true);
});

// Test case 2
test("empty array", (t: {
  false(arg0: boolean): unknown;
  is: (arg0: boolean, arg1: boolean) => void;
  DoneCallback?: () => void;
}) => {
  const input = [];
  t.false(containsDuplicate1(input));
  t.false(containsDuplicate2(input));
});

// Test case 3
test("no duplicates", (t: {
  false(arg0: boolean): unknown;
  is: (arg0: boolean, arg1: boolean) => void;
  DoneCallback?: () => void;
}) => {
  const input = [1, 2, 3, 4];
  t.false(containsDuplicate1(input));
  t.false(containsDuplicate2(input));
});

// Test case 4
test("duplicates in the middle", (t: {
  is: (arg0: boolean, arg1: boolean) => void;
  DoneCallback?: () => void;
}) => {
  const input = [1, 2, 2, 4];
  t.is(containsDuplicate1(input) || containsDuplicate2(input), true);
});

export default test;
