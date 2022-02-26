# 1. The Number
 A numbers guessing game

### Table of Contents
1. [The Number Game](#The Number Game) (You are here)
2. [Description](#Description)
3. [Updates](#Updates)
4. [Building This Project](#Building This Project)
5. [Links](#Links)

## 2. Description
A game in which the player tries to guess the number - which is randomly chosen from 1 - 100 at the start of each game - in the least number of guesses possible.

## 3. Updates
- **12/28/21**: After returning to this project to put it on my [portfolio](https://risclvoer.github,io/The-Number-Game), I had the idea to make it so that players can use their keyboard to play if they want (because as of then, players were only able to play via clicking the Guess and Reset buttons with their mouse). To go ahead with simulating the "Guess" button, the player can press Enter. To simulate pressing the "Reset" button, the player can hit the D key.

- **02/25/2022**: I've once again returned to this project, this time to write a "Project Breakdown" blog post for the [aforementioned portfolio](https://risclvoer.github.io/The-Number-Game). I've changed quite a bit this time, the biggest thing being refactoring my JavaScript code into (mostly) jQuery. I've also added some little odds and ends, including the following, taken directly from my [Project Breakdown post](https://risclover.github.io/official-portfolio/blog/project_breakdown_number_game.html/):
    - The keyboard shortcut for the Reset button. Why is it 'd'? I don't know. I think it should instead be Shift + R.
    - Change the text color for when there is an error (make it red instead of allowing it to stay the same as it was previously)
    - When testing my game just now, I realized that you can get the number 0. So I need to change the text that says "From 1 - 100" or "1 to 100" to say "0 - 100". I also want to add, "(Including 0 and 100)".
    - Throw an error when the player tries to submit an input with text

## 4. Building This Project
For a look into how I built this project, visit my Project Breakdown post on my blog: [Project Breakdown: The Number Game](https://risclover.github.io/official-portfolio/blog/project_breakdown_number_game.html/)

## 5. Links
- [Live URL](https://risclover.github.io/The-Number-Game/)
- [Repository](https://www.github.com/Risclover/The-Number-Game/)
- [Project Breakdown](https://risclover.github.io/official-portfolio/blog/project_breakdown_number_game.html/)