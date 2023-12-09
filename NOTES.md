# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## 🍅 Pomodoros

### Pomodoro 1 🍅

- ✅ Add Kata description and examples (README.md)
- ✅ Write the User Stories (US) and User Acceptance Tests (UAT)
- ✅ Refactor: Files name and estructure to match project
- 🚧 Implement board creation with 1x1 squares

### Pomodoro 2 🍅

- ✅ Implement board creation with 1x1 squares (US 1 - Board creation)
  - ✅ UAT 1.1:
    GIVEN that the game has started
    THEN I should create a new empty board with size of 1x1
  - ✅ UAT 1.2:
    GIVEN that the game has started
    THEN I should create a new empty board with size of 2x2
  - ✅ UAT 1.3:
    GIVEN that the game has started
    THEN I should create a new empty board with size of 3x3
  - ✅ UAT 1.4:
    GIVEN that the game has started
    THEN I should create a new empty board with size of 4x4

### Pomodoro 3 🍅

- ✅ Implement logic to check the board square (US 2)

  - ✅ UAT 2.1:
    GIVEN that the game has started,
    WHEN the user chooses a square to clear
    AND the square is uncleared
    THEN the square should have either a BOMB or be EMPTY

- ✅ Refactor: use createSquare function to generate the initial board

- 🚧 Implement logic to add bombs to the board (US 3)

  - ✅ UAT 3.1:
    GIVEN that the game has started
    AND the board was already created
    THEN the number of bombs should be limited to the board size (which is 9 in this case)

  - ⚠ UAT 3.2:
    GIVEN that the game has started
    AND the board was already created
    WHEN I have the position of the bombs
    THEN I should have the board updated with the bombs positions

- ⚠ Implement logic for user to clear a square without bombs
  - ⚠ UAT 4.1:
    GIVEN that the game has started
    AND the board has all the bombs positions
    AND there still are uncleared squares on the board
    WHEN I clear a square without a bomb
    AND there are no bombs on the neighboring squares
    THEN that square should now be visible
    AND the number of bombs on neighboring squares should be 0

### Pomodoro 4 🍅

- 🚧 Implement logic to add bombs to the board (US 3)

  - ⚠ UAT 3.2:
    GIVEN that the game has started
    AND the board was already created
    WHEN I have the position of the bombs
    THEN I should have the board updated with the bombs positions

- ⚠ Implement logic for user to clear a square without bombs

  - ⚠ UAT 4.1:
    GIVEN that the game has started
    AND the board has all the bombs positions
    AND there still are uncleared squares on the board
    WHEN I clear a square without a bomb
    AND there are no bombs on the neighboring squares
    THEN that square should now be visible
    AND the number of bombs on neighboring squares should be 0

- ⚠ US 5: User makes a move to an empty square with neighbor bombs

  - ⚠ UAT 5.1:
    GIVEN that the game has started
    AND the board has all the bombs positions
    AND there still are uncleared squares on the board
    WHEN I clear a square without a bomb
    AND there is 1 bomb on the square at the TOP of one that is being cleared
    THEN that square should now be visible
    AND the number of bombs on neighboring squares should be 1

  - ⚠ UAT 5.2:
    GIVEN that the game has started
    AND the board has all the bombs positions
    AND there still are uncleared squares on the board
    WHEN I clear a square without a bomb
    AND there is 1 bomb on the square at the TOP of one that is being cleared
    AND there is 1 bomb on the square at the LEFT of one that is being cleared
    THEN that square should now be visible
    AND the number of bombs on neighboring squares should be 2

  - ⚠ UAT 5.3:
    GIVEN that the game has started
    AND the board has all the bombs positions
    AND there still are uncleared squares on the board
    WHEN I clear a square without a bomb
    AND there is 1 bomb on the square at the TOP of one that is being cleared
    AND there is 1 bomb on the square at the LEFT of one that is being cleared
    AND there is 1 bomb on the square at the BOTTOM of one that is being cleared
    THEN that square should now be visible
    AND the number of bombs on neighboring squares should be 3
