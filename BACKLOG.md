# Kata - Mine Sweeper

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## 🔖 BACKLOG

### ✅ US 1 - Board creation:

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

### ✅ US 2 - User checks the board squares

- ✅ UAT 2.1:
  GIVEN that the game has started,
  WHEN the user chooses a square to clear
  AND the square is uncleared
  THEN the square should have either a BOMB or be EMPTY

### ✅ US 3 - Defining bombs

- ✅ UAT 3.1:
  GIVEN that the game has started
  AND the board was already created
  THEN the number of bombs should be limited to the board size (which is 9 in this case)

- ✅ UAT 3.2:
  GIVEN that the game has started
  AND the board was already created
  WHEN I have the position of the bombs
  THEN I should have the board updated with the bombs positions

### ✅ US 4: User makes a move to an empty square without neighbor bombs

- ✅ UAT 4.1:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  WHEN I clear a square without a bomb
  AND there are no bombs on the neighboring squares
  THEN that square should now be visible
  AND the number of bombs on neighboring squares should be 0

### ⚠ US 5: User makes a move to an empty square with neighbor bombs

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

- ⚠ UAT 5.4:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  WHEN I clear a square without a bomb
  AND there is 1 bomb on the square at the TOP of one that is being cleared
  AND there is 1 bomb on the square at the LEFT of one that is being cleared
  AND there is 1 bomb on the square at the BOTTOM of one that is being cleared
  AND there is 1 bomb on the square at the RIGHT of one that is being cleared
  THEN that square should now be visible
  AND the number of bombs on neighboring squares should be 4

- ⚠ UAT 5.4:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  WHEN I clear a square without a bomb
  AND there is 1 bomb on the square at the TOP of one that is being cleared
  AND there is 1 bomb on the square at the LEFT of one that is being cleared
  AND there is 1 bomb on the square at the BOTTOM of one that is being cleared
  AND there is 1 bomb on the square at the RIGHT of one that is being cleared
  AND there is 1 bomb on the square at any of the diagonals of one that is being cleared
  THEN that square should now be visible
  AND the number of bombs on neighboring squares should be 5

### ⚠ US 6: Recursively clearing squares after clearing an empty one

- ⚠ UAT 6.1:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  WHEN the user clears an EMPTY square
  AND this square has no neighbor bombs
  THEN the game should recursively clear the neighbor squares until it finds a square with at least a neighbor bomb

### ⚠ US 7: Player win/lose conditions

- ⚠ UAT 7.1:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  WHEN the user clears an square WITH a BOMB
  THEN the player has LOST
  AND the game should give the message “BOOM! – Game Over.”

- ⚠ UAT 7.2:
  GIVEN that the game has started
  AND the board has all the bombs positions
  WHEN there are no uncleared positions without bombs left
  THEN the player has WON
  AND the game should give the message “The land is cleared! GOOD JOB!”

### ⚠ US 8: User is able to flag squares for bombs

- ⚠ UAT 8.1:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  WHEN the player clicks on square to flag it
  THEN the game should mark that square as a bomb flagged square

### ⚠ US 9: Bot plays the game

- ⚠ UAT 9.1:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  THEN the player should be a bot that chooses the next move

- ⚠ UAT 9.2:
  GIVEN that the game has started
  AND the board has all the bombs positions
  AND there still are uncleared squares on the board
  WHEN the bot makes a play
  THEN the game should print the board state after the play
