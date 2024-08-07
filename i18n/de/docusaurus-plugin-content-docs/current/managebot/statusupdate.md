---
title: Statusupdate
description: Der Manage Bot erlaubt die Kontrolle von Pterodactyl-Servern von Discord aus. Mit der Statusupdate-Funktion lassen sich Serverstatus als Nachricht anzeigen.
---

Der Manage Bot kann mithilfe der Statusupdate-Funktion den Status, die Konfiguration und den aktuellen Verbrauch eines bzw. mehrerer Server oder Nodes anzeigen.

1. `/statusupdate`

	Zuerst führst du den Statusupdate-Befehl aus. Dabei kannst du optional den Kanal auswählen, standardmäßig wird der aktuelle Kanal verwendet. Du kannst auch den Panelalias eines Panels angeben, bei dem **sowohl Client-** (`/setup`) **als auch Application-API-Key** (`/adminsetup`) angegeben worden sind.

2. Nachricht bearbeiten

	Mit den Buttons kannst du die Nachricht so anpassen wie du willst. Genauere Informationen zur Verwendung der Variablen folgen noch, aber zusätzlich zu den Funktionen der [TomatenKuchen-Aktionen](/category/action-functions) existiert `{node;<ID>[;<Wert>]}`, um einen bestimmten Wert einer Node anzuzeigen, und `{nodeConfig;<ID>[;<Wert>]}`, um Informationen über die Konfiguration einer Node anzuzeigen.
	Ebenfalls ist `{nextUpdate}` verfügbar, um den Zeitraum bis zur nächsten Aktualisierung der Nachricht anzugeben. Mit `{nodeStatus;<ID>[;<Online>;<Offline>]}` kann ein Text eingefügt werden, je nachdem, ob die Node online ist oder nicht.

3. Nachricht senden
4. Fertig!

Stelle sicher, dass der Bot alle benötigten Berechtigungen in dem Kanal und im Panel behält, sobald er diese verliert wird die Statusupdate-Nachricht aus dem System gelöscht und muss neu erstellt werden.

Einige Informationen zu TomatenKuchen-Aktionsfunktionen:
- Groß- und Kleinschreibung wird bei Namen von Funktionen ignoriert
- Am wichtigsten dürfte die Funktion `{formatBytes;<Bytes>[;<Nachkommastellen, Standard 2>]}` zum Formatieren von Speichereinheiten sowie die mathematischen Funktionen für Multiplikation `{*;<Erster Wert>;<Zweiter Wert>}` und Division `{/;<Erster Wert>;<Zweiter Wert>}` sein
