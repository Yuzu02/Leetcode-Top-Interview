//? Source Link: [36. Valid Sudoku] (https://leetcode.com/problems/valid-sudoku/)

//Solution 1 - Using 3 arrays => Good runtime and space complexity
function isValidSudoku1(board: string[][]): boolean {
  // Initialize arrays to track seen digits in rows, columns, and grids
  const rowSeen: boolean[][] = Array.from({ length: 9 }, () =>
    Array(9).fill(false)
  );
  const colSeen: boolean[][] = Array.from({ length: 9 }, () =>
    Array(9).fill(false)
  );
  const gridSeen: boolean[][] = Array.from({ length: 9 }, () =>
    Array(9).fill(false)
  );

  // Iterate through each cell in the Sudoku board
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c: string = board[i][j];
      if (c !== ".") {
        // Convert char to digit (0-8)
        const digit: number = parseInt(c) - 1;

        // Calculate grid index
        const gridIndex: number = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        // Check if digit has been seen in row, column, or grid
        if (
          rowSeen[i][digit] ||
          colSeen[j][digit] ||
          gridSeen[gridIndex][digit]
        ) {
          return false; // Invalid Sudoku
        }

        // Mark digit as seen
        rowSeen[i][digit] = true;
        colSeen[j][digit] = true;
        gridSeen[gridIndex][digit] = true;
      }
    }
  }
  return true; // Valid Sudoku
}

//* Time complexity: O(n^2)
//* Space complexity: O(n^2)

//Solution 2 - Using Set => Good runtime and space complexity
function isValidSudoku2(board: string[][]): boolean {
  const blockSize = 3;

  const cells = new Set();

  for (let r = 0; r < board.length; r++) {
    const row = board[r];

    for (let c = 0; c < row.length; c++) {
      if (row[c] === ".") continue;

      const rowCoordinates = `r${r}-${row[c]}`;
      const colCoordinates = `c${c}-${row[c]}`;
      const blockCoordinates = `${Math.floor(r / blockSize)},${Math.floor(
        c / blockSize
      )}-${row[c]}`;

      if (
        cells.has(rowCoordinates) ||
        cells.has(colCoordinates) ||
        cells.has(blockCoordinates)
      )
        return false;

      cells.add(rowCoordinates);
      cells.add(colCoordinates);
      cells.add(blockCoordinates);
    }
  }

  return true;
}

//* Time complexity: O(n^2)
//* Space complexity: O(n^2)

export { isValidSudoku1, isValidSudoku2 };
