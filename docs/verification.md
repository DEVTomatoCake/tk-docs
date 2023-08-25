---
title: Verifikation
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Setup and usage of verification to prevent bots.
---

Verification can be used to prevent bots joining the server. You can select one of multiple modes to use for verification.

## Commands

The command `verify` can be used to send a verification message. There is no limit on created messages per server.

## Settings

### Verification mode

Currently you can select one of the following modes:
- None
- Captcha
- Math task

"None" adds the selected roles directly to the user when they click the verify button.

### Verification roles

You can select the roles which users will receive after verification here.

### Actions on wrong verification answers

You can set punishments depending on the amount of failed verification tries.

Possible actions:
- Ban
- Kick
- Mute
- Cooldown until the user can start verification again
- Reset of fail counter

When using "mute" or "cooldown" you have to add a duration how long the user gets muted / how long they have to wait.

Note that "cooldown" does not prevent users from sending DM messages.
Use "mute" instead which disables buttons as well as DMs and displays the wait time better than the bot can.

### Task difficulty

You can change the difficulty of the modes (except "none") here. This changes the maximum reply time and for:
- Captcha the amount of characters
- Math tasks the complexity of tasks