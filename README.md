# Kata Mine Sweeper

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any bombs) you win. Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. If you guess a square contains a bomb mark it with a flag. A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.

The first square you open could be a bomb.

You don't have to mark all the bombs to win; you just need to open all non-bomb squares

### Kata Objective

The game runs in BOT mode to print on the screen all the moves until we got a victory or game over. The test
suite can simulate the game without having an executable. In that case the test suite will print on console
the scenario; or in a log file with a clean test report [red/green style].

### Scoring system

1. The kata must be stored in GitHub. (IBM or public)
2. The first push must be an empty directory and it will start the graduation
3. The graduation MUST BE DONE in a 2 hours timebox (4 pomodori)
4. The code must be done in Solo mode (no pair, no mob)
5. The code must be written during the graduation test (no copy & paste from past attempt)
6. The repo must contain a NOTES.md: pair programming notes for every pomodoro
7. The code must be 100% test covered
8. Simple design & emerging architecture approach is a must
9. Refactoring pillars [white & yellow belts]:
   - test suite as a book (DDD vocabulary)
   - code and test wording with a DDD vocabulary
   - code as a book (hidden complexity)
   - code and test complexity under 4 cyclomatic
   - no linter or check style errors
   - no code smells
10. The code must have a continuous build pipeline (CB) [TravisCI, Jenkins, CircleCI, etc.]
11. The CB on the last commit must be green (the test must be all green)
12. The code must be analyzed from the following tools:
    - Linter (git quality gate)
    - Check style (git quality gate)
    - SonarQube/SonarCloud.io
    - [Optional] CodeScene.io
13. The commit in GitHub must following a “Conventional Commits” approach blocking you to push on GitHub otherwise.

### KATA - Setup phase

The kata can be done with all the automation you believe could be a helper to remove manual setup. For this
reason, you’re authorized to have initialization script/s that let you start code on a “boilerplate” in one click.
The boiler plate can initialize your development environment and project. The boilerplate CAN’T inject code
snippets relevant to solve your kata. The unique snippet you can inject into the boilerplate is to create a
src/dummy that expose a dummy and a test/dummy that has the unit test framework initialized to fail the
test with the dummy.

---

## 🚀 Execute the Application

### 💻 Installing the dependencies

Before you install the project dependencies you need to ensure that you have the [NodeJs](https://nodejs.org/en/) installed on your machine.

Once the Node is already on your machine, you just need to run the command below to install the dependencies.

```bash
npm install
```

### :running: Run the appliation tests

After all dependencies has been installed, you just need to run the command below to run the tests.

```bash
npm test
```

---

## 🧠 Plan and Execution

- 🔖 **[BACKLOG](BACKLOG.md)**: Is the file responsible to translate the problems to a business language that represents the user needs as user stories and user acceptance testing.
- 📓 **[NOTES](NOTES.md)**: This file contains more technical description about the problems and some development details
- 👨‍💻 **[TECHNICAL DEBITS](TECH_DEBTS.md)**: The files contains all technical points that needs some extra work (Non Functional Requirements)

---

## Examples

### Example 1:

```text
Game has started
+---+---+---+
|      +     +      |
+---+---+---+
|      +     +      |
+---+---+---+
|      +     +      |
+---+---+---+
```

### Example 2:

```text
User lost the game, step on mine at (1,1):
+---+---+---+
|      +     +      |
+---+---+---+
|      +  x  +      |
+---+---+---+
|      +     +      |
+---+---+---+
BOOM! - Game Over.
```

### Example 3:

```text
Clear square (2,0), gets 3 bombs around it
+---+---+---+
|      +     +      |
+---+---+---+
|      +     +      |
+---+---+---+
|   3  +     +      |
+---+---+---+
```

### Example 4:

```text
Flags 3 squares as bombs
[(1,0), (1,1), (2,1)]
+---+---+---+
|      +     +       |
+---+---+---+
|   *  +  *  +      |
+---+---+---+
|   3  +  *  +      |
+---+---+---+
```

### Example 4:

```text
Clear the remaining squares
+---+---+---+
|   2  + 2 +  1  |
+---+---+---+
|   *  +  *  + 2  |
+---+---+---+
|   3  +  *  + 2  |
+---+---+---+
The land is cleared ! GOOD JOB!
```

### Example 5:

```text
Worst case scenario: all the squares are bombs
+---+---+---+
|   X  + X +  X  |
+---+---+---+
|   X  + X  + X  |
+---+---+---+
|   X  + X + X  |
+---+---+---+
```

### Example 6:

```text
Bombs in all the neighbors squares
+---+---+---+
|   *  + *  +  *  |
+---+---+---+
|   *  + 8  + *  |
+---+---+---+
|   *  + *  + *  |
+---+---+---+
```

### Example 7:

```text
Massive clearing and winning by choosing (0,0) to be cleared
+---+---+---+
|   _  + 1 +      |
+---+---+---+
|   _  + 1  + 1  |
+---+---+---+
|   _  + _ + _  |
+---+---+---+
The land is cleared ! GOOD JOB!
```
