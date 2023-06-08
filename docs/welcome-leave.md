---
title: Welcome and leave messages
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains on how to set up member welcome and leave messages.
---

# Settings

## Welcome messages channel
Sets the channel in which join messages are sent.
Leave empty to disable them.

## Leave messages channel
Sets the channel in which a message is sent when a user leaves the server.

## Welcome message
Modify the message which is shown when someone joins the server.

The following variables are available:
- `{servername}`: Server name
- `{servericon}`: Server icon
- `{membercount}`: Member count
- `{username}`: Username
- `{userid}`: User ID
- `{usermention}`: User mention
- `{useravatar}`: User avatar
- `{inviterusername}`: Username of the inviter
- `{inviterid}`: ID of the inviter
- `{invitermention}`: Mention of the inviter
- `{inviteravatar}`: Avatar of the inviter

## Leave message
Modify the message that is displayed when a user leaves the server.
All variables except `{inviter...}` are available.