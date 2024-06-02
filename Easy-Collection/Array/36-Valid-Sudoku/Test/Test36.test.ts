import test from "ava";
import { isValidSudoku1, isValidSudoku2 } from "../Solution/solution36";

// Test case 1
test("Valid Sudoku", (t) => {
  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  t.assert(isValidSudoku1(board));
  t.assert(isValidSudoku2(board));
});

// Test case 2
test("Invalid Sudoku #1 ", (t) => {
  const board = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  t.assert(!isValidSudoku1(board));
  t.assert(!isValidSudoku2(board));
});

// Test case 3
test("Invalid Sudoku #2", (t) => {
  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "8"],
  ];
  t.assert(!isValidSudoku1(board));
  t.assert(!isValidSudoku2(board));
});

// Test case 4
test("Invalid Sudoku #3", (t) => {
  const board = [
    ["3", "5", ".", ".", "5", ".", "4", "1", "."],
    ["9,", "3", "2", ".", ".", ".", "4", ".", "."],
    [".", ".", "1", ".", ".", ".", "9", ".", "5"],
    [".", ".", ".", "1", ".", "5", "6", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "7", "3", ".", "7", "2", ".", "."],
    [".", ".", "3", ".", ".", ".", "1", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
  ];
  t.assert(!isValidSudoku1(board));
  t.assert(!isValidSudoku2(board));
});
