# Matching-Game

<div  align="center">
<!-- <video width="320" height="240" controls>
  <source src="https://youtu.be/r5YOzWxcbng" type="video/mp4">
</video> -->
<img src="./demo.jpg" width = "400" height = "400" alt="图片名称" align=center />
</div>



## Table of Contents

* [Description](#description)
* [Project Instructions](#project-instructions)
* [Project Demo](#Project-Demo)
* [How The Game Works](#how-the-game-works)
* [Game Functionality](#Game-Functionality)
## Description

- Browser-based Memory game
- Project created as part of the Udacity Front-End Developer Nanodegree.

## Project Instructions

- Convert the static, non-interactive Starter Code given to an interactive one. 
- Modify the HTML and CSS files, but mostly the JavaScript file.

## Project Demo

**Project Demo:** https://moonfallmaple.github.io/matching-game/

## How The Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol faced down.

- Each turn:

- The player flips one card over to reveal its underlying symbol.
- The player then turns over a second card, trying to find the corresponding card with the same symbol.
- If the cards match, both cards stay flipped over.
- If the cards do not match, both cards are flipped face down.
- The game ends once all cards have been correctly matched.

## Game Functionality
The real-life game, players flip over cards to locate the pairs that match The goal is to recreate this effect in your project. There are a couple of interactions that you'll need to handle:

Flipping cards
What happens when cards match
What happens when cards do not match
When the game finishes
Below are some examples of how we implemented these interactions.
