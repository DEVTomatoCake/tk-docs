---
title: Spiele
description: Der Bot hat viele Spiele für Einzel- und Mehrspieler, z. B. Snake, Uno! und Vier gewinnt.
image: /img/game_snake.webp
---

### Schere Stein Papier {#rock-paper-scissors}

Spielt Schere Stein Papier gegen den Bot oder andere Spieler.

<Command name="game" slash="scheresteinpapier [user:Gegner]" message="ssp [<Gegner>]"></Command>

### TicTacToe {#tic-tac-toe}

Spiele TicTacToe gegen den angegebenen Nutzer oder gegen einen Algorithmus von TomatenKuchen.

<Command name="game" slash="tictactoe [user:Gegner]" message="ttt [<Gegner>]"></Command>

### Hangman {#hangman}

Lasse andere Nutzer den angegebenen Text erraten, bevor das Galgenmännchen vollständig ist.

Beachte, dass es nur mögliche 25 Buchstaben gibt ("A" bis "X" sowie "Z"). "Y" sowie Zahlen und Sonderzeichen werden aus der Eingabe entfernt.

<Command name="game hangman" slash="text:Text" message="<Text>"></Command>

### Vier gewinnt {#connect-four}

Spiele Vier gewinnt gegen einen anderen Spieler.

<Command name="game" slash="connectfour user:Gegner [fieldsize:Feldgröße]" message="c4 <Gegner> [<Feldgröße>]"></Command>

### Snake {#snake}

<Command name="game snake"></Command>

![Aktives Snake-Spiel auf Discord, mit Buttons zur Steuerung der Schlange](/img/game_snake.webp)

### Uno {#uno}

Spiele das ziemlich bekannte Kartenspiel mit anderen Nutzern.

<Command name="game uno" message="[-punish-cards=<Strafkarten bei vergessenem Uno>]"></Command>

### Chemiegleichungen {#chemistry}

Gibt dir eine zufällige Chemiegleichung, die mithilfe von Faktoren ausgeglichen werden muss.

<Command name="game chemistry" slash="[difficulty:leicht|mittel|schwer]" message="[leicht|mittel|schwer]"></Command>

![Der Chemie-Befehl mit einer zufälligen Gleichung](/img/game_chemistry.webp)

### Wordsearch {#wordsearch}

Zeigt ein Raster an Buchstaben an, in dem Wörter versteckt sind. Die Wörter können senkrecht, waagerecht und diagonal in allen Richtungen verteilt sein.

Das Ziel ist es, alle versteckten Wörter aufzudecken.

<Command name="game wordsearch"></Command>
