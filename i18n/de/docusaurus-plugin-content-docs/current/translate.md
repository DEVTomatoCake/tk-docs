---
title: Textübersetzung
description: TomatenKuchen kann Texte in über 100 Sprachen übersetzen, auch automatisch!
---

TomatenKuchen hat die Möglichkeit, mithilfe von Google Translate Texte in über 100 verschiedene Sprachen zu übersetzen.

## Befehl {#commands}

Mit dem Befehl `translate` hast du die Möglichkeit, ein Wort, einen Satz oder einen ganzen Text in die angegebene Zielsprache zu übersetzen.

:::tip Übersetzungsqualität

Je länger ein Satz ist, desto besser wird die Übersetzung dessen.

:::

## Integration: Automatische Übersetzung {#autotranslate}

Mithilfe der Integration [`autotranslate`](https://tomatenkuchen.com/dashboard/integrations?info=autotranslate) können Nachrichten in einem festgelegten Kanal automatisch übersetzt werden.

1. [Füge die Integration deinem Server hinzu](https://tomatenkuchen.com/dashboard/integrations?use=autotranslate)
	1. Öffne den obrigen Link
	2. Wähle deinen Server aus
	3. Klicke auf "Integration verwenden"
2. Scrolle etwas nach unten, bis du zum Feld "Channel ID" kommst. Dort trägst du die Kanal-ID des Kanals ein, in dem die Nachrichten automatisch übersetzt werden sollen. Die Kanal-ID erhältst du z. B. mit dem Befehl `channelinfo`.
3. Trage die gewünschte Zielsprache ein.
	- Die Zielsprache ist ein eindeutiger, zwei Zeichen langer Code für eine Sprache.
	- z. B. `en` für Englisch oder `de` für Deutsch
	- Den Sprachcode findest du auch bei `/translate`-Slashcommand
4. Klicke auf "Integration erstellen" - fertig!

:::tip Zwei-Wege-Übersetzung

Es ist auch möglich, die Sprache eines Textes zu erkennen und anhand dessen den Text in eine andere Sprache zu übersetzen.

Dies kann verwendet werden, um z. B. einen englischen und einen deutschen Kanal zu kombinieren, indem der Bot deutsche Nachrichten auf Englisch und englische Nachrichten auf Deutsch übersetzt.

:::

## Integration: Übersetzung durch Reaktion mit Flagge {#flag-reaction-translate}

Mithilfe der Integration [`flag-reaction-translate`](https://tomatenkuchen.com/dashboard/integrations?info=flag-reaction-translate) können Nachrichten übersetzt werden, indem man mit der Flagge der gewünschten Zielsprache auf eine Nachricht reagiert.

1. [Füge die Integration deinem Server hinzu](https://tomatenkuchen.com/dashboard/integrations?use=flag-reaction-translate)
2. Stelle sicher, dass der Bot ausreichend Berechtigungen in dem Kanal hat, indem du ihn verwenden möchtest.
3. Klicke auf "Integration erstellen" - fertig!
