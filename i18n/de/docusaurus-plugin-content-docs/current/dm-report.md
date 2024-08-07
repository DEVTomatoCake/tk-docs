---
title: PN melden/Nachrichtenverifikation
description: Mit der PN-melden-Funktion hast du die Möglichkeit, Existenz und Inhalt einer Direktnachricht zu verifizieren. Das ist z. B. beim Melden von Scams nützlich.
image: /img/dmreport.webp
---

Die PN-melden-Funktion erlaubt dir, problemlos die Existenz und den Inhalt einer Nachricht zu verifizieren, welche in einer Direkt-/Privatnachricht (PN) oder einer Gruppen-PN (GDM) gesendet wurde.

Dieses Feature benötigt keinerlei Einrichtung seitens der Serveradministration, stattdessen funktioniert es einfach mit einer Einrichtungsanleitung für Nutzer.

Die Hauptidee ist, dass reale Nachrichten von Scammern oder PN-Werbenden verifiziert gemeldet werden können.

![Eine mit dem PN-melde-Befehl gemeldete Nachricht](/img/dmreport.webp)

## Verwendung {#usage}

<Command name="dm-report"></Command>

Nutze einfach den Befehl oben in einem privaten Kanal.

:::tip Warum ein privater Kanal?

Der Befehl kann nicht in Kanälen verwendet werden, in denen die @everyone-Rolle die Berechtigung "Kanal ansehen" hat, um möglichem Missbrauch vorzubeugen.

Reports werden (oder sollten) vertraulich behandelt (werden), deswegen sollte es keine Möglichkeit geben, jemanden (ausversehen) öffentlich bloßzustellen.

:::

Der Befehl gibt eine Nachricht zurück, auf der der Nutzer die korrekte Anwendung bestätigen muss, und die Discord-App als User-App hinzufügen muss. Nur so hat TomatenKuchen die Möglichkeit, das "Nachricht melden"-Kontextmenü hinzuzufügen.
Dieses Setup muss nur einmalig durchgeführt werden.

Nachdem das Setup fertiggestellt wurde wird der Code, welcher beim Buttonklick zurückgegeben wird, in das Modal eingefügt, welches beim Auswählen des Kontextmenüs (Rechtsklick/lange auf die Nachricht drücken -> "Apps" -> "Nachricht melden") angezeigt wird.

Nach dem Absenden wird der Nachrichteninhalt (und alle eventuellen Embeds von Bots) in die Originalnachricht, also die Nachricht auf dem Server, auf dem der Befehl verwendet wurde, bearbeitet.
