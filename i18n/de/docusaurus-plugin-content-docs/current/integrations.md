---
title: Integrationen
description: Diese Seite erklärt die Verwendung von Integrationen, die nächste Version von Customcommands.
image: /img/integration_weather.webp
---

:::info Funktionsliste

Eine Liste aller Funktionen findest du auf der [Funktionen-Seite](/category/action-functions).

:::

Integrationen sind im Prinzip Customcommands 2.0 - du kannst immer noch einfach auf Message- und Slashcommands antworten, aber du hast zusätzlich die Möglichkeit, viele weitere Auslöser für Aktionen zu nutzen.
Außerdem ist es möglich, erstellte Integrationen auf anderen Servern zu verwenden.

Integrationen können im [Dashboard](https://tomatenkuchen.com/dashboard/integrations) verwaltet werden.

:::tip Einfacher Modus

Wenn dir das Dashboard zu kompliziert erscheint, probiere unseren [einfachen Modus](https://tomatenkuchen.com/dashboard/integrations?cc=1) welcher nicht zwingend notwendige Inhalte versteckt, jedoch auch die Funktionalität begrenzt.

:::

## Mögliche Auslöser {#trigger}

- Nachrichten- und/oder Slashcommand
	- Argument: Slashcommand-Beschreibung. Wenn leer wird kein Slashcommand von dieser Aktion registriert.
	- Maximal 100 Slashcommands pro Server.
- Nachrichten-Kontextmenü
	- Argument: Text für das Kontextmenü, maximal 25 Zeichen.
	- Maximal fünf pro Server.
- Nutzer-Kontextmenü
	- Argument: Text für das Kontextmenü, maximal 25 Zeichen.
	- Maximal fünf pro Server.
- Nachrichteninhalt enthält
	- Argument: Nachrichteninhalt, nach dem gesucht werden soll
- Nachrichteninhalt ist gleich
	- Argument: Exakter Nachrichteninhalt mit gleicher Groß- und Kleinschreibung
- Nachrichteninhalt beginnt mit
	- Argument: Nachrichteninhalt, nach dem gesucht werden soll
- Nachrichteninhalt endet mit
	- Argument: Nachrichteninhalt, nach dem gesucht werden soll
- Nachrichteninhalt matcht RegEx
	- Argument: RegEx, mit dem geprüft werden soll, siehe [RegEx-Cheatsheet](#regex-cheatsheet)
- Nachrichtenanhang enthält
	- Argument: Dateinendungen oder Gruppen dieser, getrennt mit Kommas
- Button gedrückt
	- Argument: Button-Custom-ID
- Selectmenü ausgewählt
	- Argument: Selectmenü-Custom-ID
- Modal abgesendet
	- Argument: Modal-Custom-ID
- Discord-AutoMod ausgelöst (z. B. für eigene Bestrafungen, wenn eine bestimmte Regel ausgelöst wird)
	- Argument (optional): ID einer Regel
- Slashcommand eines anderen Bots verwendet (z. B. für `/bump`-Erinnerungen)
	- Argument: Slashcommand-Name des anderen Bots
- Mitglied beigetreten/verlassen
	- Argument: `join`, `leave` oder leer, um bei beiden auszulösen
- Reaktion hinzugefügt/entfernt
	- Argument: `add`, `remove` oder leer, um bei beiden auszulösen
- Rolle erstellt/gelöscht
	- Argument: `create`, `delete` oder leer, um bei beiden auszulösen
- Kanal erstellt/gelöscht
	- Argument: `create`, `delete` oder leer, um bei beiden auszulösen
- Webhook erstellt/gelöscht
	- Argument: `create`, `delete` oder leer, um bei beiden auszulösen
- Thread (oder Forumpost) erstellt/gelöscht
	- Argument: `create`, `delete` oder leer, um bei beiden auszulösen
- Levelup
	- Argument: Ein Level oder eine Range von Leveln, bei denen ausgelöst werden soll, z. B. `8`, um nur beim Erreichen von Level acht auszulösen, oder `8..10` um bei den Leveln 8, 9 und 10 auszulösen.
- Nickname geändert
- Server geboosted/Boosts entfernt
	- Argument: `boost`, `boostend` oder leer, um bei beiden auszulösen
- Intervall
	- Argument: Intervall-Zeit wie z. B. `45m`, mindestens fünf Minuten, maximal zwei Tage
	- Hinweis: Da diese Zeiten relativ zu Botstarts gemessen kann es vorkommen, dass eine Aktion öfters oder seltener als gewollt ausgeführt wird, wenn der Timer zurückgesetzt wurde. Verwende stattdessen Cronjobs, wenn dir das wichtig ist.
- Cronjob
	- Argument: Der Cronjob, z. B. von https://crontab.guru, darf nicht mehr als zwölf mal pro Stunde auslösen
- Nutzer betritt/verlässt Sprachkanal
	- Argument: `join`, `leave` oder leer, um bei beiden auszulösen
- Nutzer ge- oder enttimeouted
	- Argument: `timeout`, `timeoutend` oder leer, um bei beiden auszulösen
- Discord-Systemnachricht
	- Argument: Interne Discord-System-Nachrichten-Typ-ID: https://discord.com/developers/docs/resources/channel#message-object-message-types

## Synchronisations-Modi {#sync-modes}

Es gibt verschiedene Sync-Modi, die beim Importieren einer Integration auf einen anderen Server ausgewählt werden können:

### Keine Synchronisation {#sync-none}

Deaktiviert jegliche Synchronisation und entfernt den Hinweis, von welcher Integration die aktuelle ursprünglich stammt.

### Manuelle Synchronisation {#sync-manual}

Änderungen können manuell mit einem Button im Dashboard synchronisiert werden. Die Inhalte können normal bearbeitet werden, werden beim Synchronisieren aber überschrieben.

### Automatische Synchronisation {#sync-auto}

Synchronisiert alle Änderungen am Original automatisch, sobald dieses bearbeitet wird. Wird empfohlen, wenn du dem Besitzer bzw. Server der Integration vertraust. Inhalte können nicht bearbeitet werden.

### Sichere Synchronisation {#sync-safe}

Eine Mischung zwischen manueller und automatischer Synchronisation. Die Inhalte können nicht bearbeitet werden. Bei einer Änderung muss entweder - wie bei der manuellen Synchronisation - ein Teammitglied der Servers die Änderung annehmen, oder ein TomatenKuchen-Teamler. Durch diese Kombination können Änderungen schneller zugelassen werden.

## Beispiele {#example}

Diese Integrationen wurden von unserem Team erstellt oder von diesem verifiziert.

- [FiveM-Server-Info anzeigen](https://tomatenkuchen.com/dashboard/integrations?info=fivem), zeigt die Verwendung von `{jsonAPI}`
- [Wetterinfo eines Ortes anzeigen](https://tomatenkuchen.com/dashboard/integrations?info=weather), zeigt die Verwendung von `{jsonAPI}` und Argumenten
- [Vote-Reminder für TomatenKuchen](https://tomatenkuchen.com/dashboard/integrations?info=vote-reminder)
- [Zufälligen Comic von xkcd.com anzeigen](https://tomatenkuchen.com/dashboard/integrations?info=xkcd)
- [Automatische Übersetzung von Nachrichten in einem Kanal](https://tomatenkuchen.com/dashboard/integrations?info=autotranslate), zeigt die Verwendung verschiedener [Funktionen zur Aktionseinschränkung](/action-functions/control)
- [Übersetzung von Nachrichten bei Reaktion](https://tomatenkuchen.com/dashboard/integrations?info=flag-reaction-translate)

![Wetter-Integration-Beispiel](/img/integration_weather.webp)

![xkcd-Integrations-Beispiel](/img/integration_xkcd.webp)

Du findest eine Liste aller öffentlichen Integrationen im [Dashboard](https://tomatenkuchen.com/dashboard/integrations).

## RegEx-Cheatsheet {#regex-cheatsheet}

| Zeichen   | Beschreibung                   | Beispiel                        |
|-----------|--------------------------------|---------------------------------|
| `.`       | Alle Zeichen außer neue Zeilen | `a.b` matcht "axb"              |
| `\d`      | Ziffer (0-9)                   | `\d{2}` matcht "42"             |
| `\w`      | Wortzeichen (a-z, A-Z, 0-9, _) | `\w+` matcht "Bot_1"            |
| `\s`      | Whitespace-Zeichen             | `a\sb` matcht "a b" oder "a\nb" |
| `[abc]`   | Irgendeines dieser Zeichen     | `[aeiou]` matcht "i"            |
| `[^abc]`  | Alle Zeichen außer diese       | `[^aeiou]` matcht "b"           |
| `a*`      | 0 oder mehr Vorkommnisse von a | `a*` matcht "aaa"               |
| `a+`      | 1 oder mehr Vorkommnisse von a | `a+` matcht "aa"                |
| `a?`      | 0 oder 1 Vorkommnisse von a    | `a?` matcht "a"                 |
| `a{3}`    | Genau 3 Vorkommnisse von a     | `a{3}` matcht "aaa"             |
| `a{3,}`   | 3 oder mehr Vorkommnisse von a | `a{3,}` matcht "aaaa"           |
| `a{3,5}`  | 3 bis 5 Vorkommnisse von a     | `a{3,5}` matcht "aaa"           |
| `^`       | Anfang der Zeichenkette        | `^abc` matcht "abcxyz"          |
| `$`       | Ende der Zeichenkette          | `xyz$` matcht "abcxyz"          |
| `\b`      | Wortbegrenzung                 | `\bword\b` matcht "word"        |
| `|`       | Oder                           | `a|b` matcht "a" oder "b"       |
| `\n`      | Neue Zeile                     | `\n` matcht einen Zeilenumbruch |
| `(...)`   | Match-Gruppe                   | `(abc)` matcht "abc"            |

Match-Gruppen können im Aktions-Code mithilfe von `{argsObj;match.<Gruppen-Nummer gezählt ab 1>}` ausgelesen werden.
`{argsObj;match.0}` entspricht dem gesamten Match.

Am einfachsten ist das Erstellen von RegEx mit einem Onlineeditor, z. B. mit [regexr.com](https://regexr.com).
