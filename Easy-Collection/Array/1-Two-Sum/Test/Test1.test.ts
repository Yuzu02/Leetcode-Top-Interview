import test from 'ava';
import { twoSum } from '../Solution/solution1';

test('Two Sum - Example 1', (t) => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    t.deepEqual(result, [0, 1]);
});

test('Two Sum - Example 2', (t) => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    t.deepEqual(result, [1, 2]);
});

test('Two Sum - Example 3', (t) => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    t.deepEqual(result, [0, 1]);
});

test('Two Sum - No Solution', (t) => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const result = twoSum(nums, target);
    t.deepEqual(result, []);
});

test('Two Sum - Negative Numbers', (t) => {
    const nums = [-1, -2, -3, -4];
    const target = -7;
    const result = twoSum(nums, target);
    t.deepEqual(result, [2, 3]);
});
