---
title: Log- & Bansync
description: Der Bot kann auch Logs und Bans sowie Unbans über mehrere Server hinweg synchronisieren.
---

## Einrichtung allgemein {#setup}

Die Server-ID erhältst du entweder über den Entwicklermodus von Discord, durch den `server`-Befehl oder aus der URL der [Servereinstellungsseite](https://tomatenkuchen.com/dashboard/settings) im Dashboard.

Wenn du den Befehl mit der Server-ID eingegeben hast erhältst du einen Code, den du dann bei `sync verify <Code>` auf dem anderen Server eingeben musst.
Ab diesem Monat werden die Logs des ersten Servers auf den zweiten gesendet.

Um die Synchronisation zu beenden, verwende den Befehl `sync stop` auf dem Server, auf dem die Einrichtung der Synchronisierung erfolgt ist.

## Logsync {#logs}

Mithilfe der Logsync-Funktion des Bots kannst du die Logs eines Servers auf einen anderen senden lassen, z. B. um Logs von einem Haupt- auf einen teaminternen Server zu senden.

Dies betrifft alle Logtypen - beachte, dass die Logkanäle vom Zielserver übernommen werden, wenn der Zielserver also keinen Kanal für einen Logtyp ausgewählt hat, werden keine Logs dafür gesendet.

<Command name="sync logs" slash="guild:Server-ID" message="<Server-ID>"></Command>

## Bansync {#bans}

Auch Bans bzw. Unbans lassen sich mithilfe des Bots synchronisieren. Im Gegensatz zu Logs lassen sich bei Bans mehrere Server gleichzeitig verwenden, auf die bzw. von denen synchronisiert wird.

<Command name="sync bans" slash="guild:Server-ID bans:True|False unbans:True|False" message="<Server-ID> <Bans synchronisieren: true|false> <Unbans synchronisieren: true|false>"></Command>

Die Option Bans bzw. Unbans synchronisieren stellt ein, ob Nutzer gebannt bzw. entbannt werden sollen.

Wenn du z. B. nur Bans synchronisieren willst, wähle bei Bans "True" und bei Unbans "False" aus.
