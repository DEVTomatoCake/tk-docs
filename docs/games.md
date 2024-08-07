---
title: Games
description: The bot has many games available for both single and multi player to play, e.g. snake, Uno! and Connect Four.
image: /img/game_snake.webp
---

### Rock paper scissors {#rock-paper-scissors}

Play rock paper scissors against a user or the bot.

<Command name="game" slash="scheresteinpapier [user:Opponent]" message="rps [<Opponent>]"></Command>

### TicTacToe {#tic-tac-toe}

Play tic tac toe with another user or an algorithm of TomatenKuchen.

<Command name="game" slash="tictactoe [user:Opponent]" message="ttt [<Opponent>]"></Command>

### Hangman {#hangman}

Let other members guess your text before the stickman is dead.

Note that only 25 characters are possible ("A" to "X" and "Z"). Y as well as numbers and other special characters are removed from the input.

<Command name="game hangman" slash="text:Text" message="<Text>"></Command>

### Connect Four {#connect-four}

Play Connect Four against a user.

<Command name="game" slash="connectfour user:Opponent [fieldsize:Field size]" message="c4 <Opponent> [<Field size>]"></Command>

### Snake {#snake}

<Command name="game snake"></Command>

![Currently running snake game on Discord, with buttons to control the snake](/img/game_snake.webp)

### Uno {#uno}

Play the quite popular card game with other users.

<Command name="game uno" message="[-punish-cards=<Punishment cards on forgotten Uno>]"></Command>

### Chemical equations {#chemistry}

Gives you a random chemistry equation that must be balanced using factors.

<Command name="game chemistry" slash="[difficulty:easy|normal|hard]" message="[easy|normal|hard]"></Command>

![Chemistry command with a random equation](/img/game_chemistry.webp)

### Wordsearch {#wordsearch}

Displays a grid of letters in which words are hidden. The words can be distributed vertically, horizontally and diagonally in all directions.

The goal is to uncover all hidden words.

<Command name="game wordsearch"></Command>
