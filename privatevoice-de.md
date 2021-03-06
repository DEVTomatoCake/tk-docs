---
title: Private Sprachkanäle
lang: de
---

Sobald ein Nutzer den im Dashboard ausgewählten Kanal betritt, wird ein neuer privater Sprachkanal erstellt.
Die Rechte für diesen Kanal lassen sich mit dem Befehl `permission` einstellen.

## Öffnen

Gib jedem die Berechtigung, deinen Sprachkanal zu betreten.

`permission open`

## Schließen

Entferne jedem außer dir die Rechte für den Sprachkanal.
Die Nutzer können noch im Sprachkanal bleiben und auch sprechen, aber nicht erneut beitreten.

`permission close`

## Alle Nutzer im Sprachkanal kicken

Kicke jeden außer dich aus deinem Sprachkanal.

`permission reset`

## Nutzer hinzufügen

Gib einem bestimmten Nutzer Rechte, in deinen Sprachkanal zu gehen.

`permission add <Nutzer>`

## Nutzer entfernen

Entferne und kicke den angegeben Nutzer aus deinem Sprachkanal.

`permission remove <Nutzer>`

## Nutzerlimit festlegen

Setzt ein Limit, wie viele Nutzer dem Sprachkanal beitreten können.

`permission setlimit <Limit>`
