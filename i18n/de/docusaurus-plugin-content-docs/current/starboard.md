---
title: Starboard
description: Das Starboard erlaubt deinen Mitgliedern, Nachrichten durch eine Reaktion mit einem einstellbaren Emoji in einen einzigartigen Kanal für immer aufheben zu lassen.
image: /img/starboard.webp
---

Mit dem Starboard können lustige oder anderweitig interessante Nachrichten für die Ewigkeit gespeichert werden: Jeder Nutzer auf dem Server kann auf eine Nachricht mit dem festgelegten Emoji reagieren.

Sobald die festgelegte Mindestanzahl an "Sternen" überschritten wurde, wird die Nachricht in den Starboard-Kanal gesendet.

![Starboard-Nachricht](/img/starboard.webp)

Nachrichten auf dem Starboard zeigen auch Bilder und Antworten an.
Bilder werden abseits von Discord gespeichert, um diese auch nach dem Löschen von einer externen Quelle noch darstellen zu können.

## Einstellungen {#settings}

### Starboard-Kanal {#channel}

Legt den Kanal fest, in dem Starboard-Nachrichten gesendet und aktualisiert werden.

### Self-Star {#self-star}

Ob Nutzer mit dem festgelegten Emoji auf ihre eigenen Nachrichten reagieren können.

### Benötigte Reaktionsanzahl {#required-reactions}

Wie viele Reaktionen benötigt werden, bis die Nachricht in den Starboard-Kanal gesendet wird.

### Emoji {#reaction-emoji}

Welches Emoji für das Starboard verwendet wird. Es wird für das Zählen von Reaktionen verwendet und im Nachrichtenfooter angezeigt.

Standardwert: `⭐`

### Ausgeschlossene Kanäle {#excluded-channels}

In welchen Kanälen Nachricht nicht auf das Starboard gesendet werden können. Kann verwendet werden, um z. B. Teamkanäle oder Tickets geheim zu halten.

Nachrichten in NSFW-Kanälen werden nur in den Starboard-Kanal gesendet, wenn dieser auch als NSFW markiert ist.
