---
title: Autoupdate
description: Erklärt sich automatisch aktualisierende Nachrichten und listet mögliche Parameter auf.
image: /img/autoupdate.webp
---

Autoupdate ("automatisch updatende Nachrichten") steht für Nachrichten, die sich **alle 10 Minuten** automatisch aktualisieren. Damit können z. B. Statistiken als Nachricht oder ein Geburtstagskalender realisiert werden.

![Autoupdate-Beispielnachricht, welche das Serverleaderboard, abwesende Nutzer und Geburtstage anzeigt](/img/autoupdate.webp)

## Mögliche Parameter {#vars}

Alle Variablen ignorieren die Groß- und Kleinschreibung.

- `{members}`: Zeigt die Mitgliederanzahl
- `{members.humans}`: Nicht-Botanzahl
- `{members.bots}`: Botanzahl
- `{emojis}`: Emojianzahl
- `{stickers}`: Stickeranzahl
- `{roles}`: Rollenanzahl
- `{boosts}`: Anzahl der Serverboosts
- `{channels}`: Kanalanzahl
- `{voiceChannels}`: Anzahl der Sprachkanäle
- `{textChannels}`: Anzahl der textbasierten Kanäle
- `{categories}`: Anzahl der Kategorien
- `{leaderboard}`: Zeigt die ersten 15 Leaderboard-Plätze des Servers
- `{boosters}`: Zeigt alle Booster des Servers
- `{afk}`: Liste von als AFK markierten Nutzern auf dem Server
- `{birthday}`: Liste aller Nutzer mit einem öffentlichen Geburtstag sowie alle fiktiven Geburtstage des Servers
- `{events}`: Liste von maximal 15 der anstehenden Serverevents
