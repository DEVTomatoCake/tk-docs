---
title: Antiraid
description: TomatenKuchen is a multipurpose Discord bot with a lot of features for your server. The antiraid system can easily detect and prevent most join raids.
---

Using the antiraid system of TomatenKuchen the bot will handle most server joins raids problemlessly.

If enabled, the system remembers all newly joined users.
If too many join in the configured time window, the recently joined as well as any new joiníng users are kicked, until the limit is no longer hit.

## Settings {#settings}

### Antiraid mode {#settings-mode}

[This setting](https://tomatenkuchen.com/dashboard/settings#antiraidMode) configures whether the antiraid is enabled and if yes, what to do on a raid.

The option "Disabled" disables the antiraid completely.

The option "Kick members" kickt bei einem Raid dauerhaft alle neu beigetretenen Nutzer.

#### "Disable invites" {#settings-disable-invites}

:::warning Community only

Only available on Discord community servers due to Discord not enabling "Pause invites" for bots on other servers.

:::

The option "Disable invites" pauses the invites on a server once a raid is detected for a specific time.
It also kicks all recently joined users.

After that time ran out, users can join again - if the raid is still ongoing, the server invites are paused again.

If you think that a raid has already ended, simply enable the invites again from Discord Server Settings -> Invites.

## User limit {#settings-limit}

This setting configures how many users can at most join the server in the configured time in seconds.
If this number is reached, the bot detects a raid.

## Time window {#settings-seconds}

The time window in seconds allows you, as with modifying the user limit, to configure the sensitivity of the antiraid.

The higher this number is, the less short raids are detected.