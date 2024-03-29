---
title: Role command
description: The role command allows you to manage roles and their members on a server.
---

This page explains the subcommands of the `role` command and explains their features.

## info {#cmd-info}

Displays information about the given role.

Wenn keine Rolle angegeben worden ist (oder bei Messagecommands überhaupt kein Argument angegeben worden ist) wird eine Liste aller Rollen des Servers angezeigt.

- role: The role to show information about.

## bypermission {#cmd-bypermission}

Lists all roles with a specific permission.

- permission*: The permission to filter

## clone {#cmd-clone}

Copies the given role.
Die Rolle wird mitsamt ihrer Berechtigungen kopiert, Kanalüberschreibungen der Originalrolle werden aber nicht kopiert.

- role*: The role

## clearpermissions {#cmd-clearpermissions}

Entfernt alle Berechtigungen einer Rolle. Kanalüberschreibungen werden nicht entfernt, daher entspricht dieser Befehl dem Button "Berechtigungen löschen" in der Discord-Server-Rollenliste.

- role*: The role to remove the permissions from

## add {#cmd-add}

Adds a role to a member.

If no time was given the user keeps the role forever.

- role*: The role to add
- user*: The user to add the role to
- time: Für wie lange der Nutzer die Rolle haben soll

## remove {#cmd-remove}

Removes a role from a member.

If no time was given the user loses the role forever.

- role*: The role to remove
- user*: The user to remove the role from
- time: The time after which the user gets the role back

## massadd {#cmd-massadd}

Adds a role to all members.

You can choose whether only bots, only humans or all members should receive the role.

- role*: The role to add to everyone
- filter: The filter

## massremove {#cmd-massremove}

Removes a role from all members.

You can choose whether only bots, only humans or all members should get the role removed.

- role*: The role to remove from everyone
- filter: The filter

## randomuser {#cmd-randomuser}

Wählt zufällig die angegebene Anzahl an Nutzern mit der angegebenen Rolle aus.

- role*: The role
- amount: The amount of users to return
