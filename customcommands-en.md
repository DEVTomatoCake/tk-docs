---
title: Customcommands
lang: en
---

In order to manage customcommands you need the permission "Manage Server".

# Commands

## Create

`customcommand <Name> <Reply>`

Example:
`customcommand hi Hey ^^`

## Edit

`customcommand <Name> <New reply>`

Example:
`customcommand hi Hello!`

## Delete

`customcommand <Name> del`

Example:
`customcommand hi del`

## Display raw code

`customcommand <Name> raw`

Example:
`customcommand hi raw`

## Test code

`customcommand test <Customcommand-Code>`

Example:
`customcommand test Hello **{author.name}**! :D`

# Variables

* `{author.username}`: Displays the username of the message author
