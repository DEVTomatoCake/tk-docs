---
title: Modals
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Modals ("Forms") allow you to request information from users, e.g. in tickets, using popups in Discord.
---

## Command

Modals are managed using the command `modal`.

### Creating

Creating is done using the command `modal create <ID> <Title>`, in which `<ID>` is a set ID by you, and `<Title>` the modal title.

The ID is used to unique identify the modal and to use it on other places in the bot, e.g. in [ticket categories](/ticket/general).

The title is shown above the popup and can be changed later anytime.

### Editing

Editing works the same as creating, it only uses the command `modal edit <ID>`.

## Usage

### Tickets

Modal IDs can be used in the `modal` field of ticket categories to be able to show information related to the ticket.

By doing that, users will first have to answer the up to five questions in the opened popup, and only after submitting it, the ticket is created.
In the ticket the answers are shown using embed fields.

### Integrations

Modals can also be used with [integrations](/integrations): For this purpose the [action function](/functions/misc) `{modal}` exists for opening a modal, and the function `{modalField;<Modal ID>;<Label name>}` for getting the response to a field.