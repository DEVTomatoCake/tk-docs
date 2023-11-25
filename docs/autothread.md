---
title: Automatic threads
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Using the automatic thread creation feature, you can e.g. improve the usability of discussion or bug report channels.
---

Using this feature you can let the bot automatically create threads in selected channels when a new message is sent in them.

## Adding channels

You can add channels in the related setting in the [dashboard](https://tomatenkuchen.com/dashboard/settings), in which a new thread should be created when a new message is sent.

You have multiple variables when choosing the name of the thread.

## Variables for the thread name

- `{username}`: The username of the user
- `{globalName}`: The global display name
- `{nickname}`: The nickname of the user on the server
- `{content}`: The content of the message

Note that the name must not be longer than 100 characters.

## Permissions

The bot requires at least the following permissions in the channels for this feature:
- View Channel
- Send Messages
- Read Message History
- Create Public Threads