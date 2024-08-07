---
title: Server statistics
description: The server stats of TomatenKuchen allow you to monitor the activity of your Discord server. The bot tracks member count, boosts and activity related to messages.
image: /img/stats.webp
---

## Stats in channel names {#channel-name}

![Discord voice channels displaying configured information of the server in their name](/img/stats.webp)

You can set the channels in which and how the statistics are displayed in the [settings](https://tomatenkuchen.com/dashboard/settings#statsChannelFormat).
Most [action functions](/category/action-functions) can be used here.

The channel name stats are automatically updated every **10 minutes**.

## Stats on the website and the `stats` command {#website-command}

Example of statistics on the bot website: [Vanilla Minigames statistics](https://tomatenkuchen.com/stats?guild=608640398595719170)

TomatenKuchen collects daily statistics of your server. These include:
- Member count
- Boost count
- Messages sent from users
- Active chatter amount (how many unique users sent a message on your server that day)

The last two are only collected if the [visibility](#visibility) is set to "Public".

### Possible filters {#filters}

Filters are appended to the URL as query parameters: `https://tomatenkuchen.com/stats?guild=608640398595719170&type=messages&time=2w`.
This URL only displays the messages sent stats of the last two weeks.

- `type`: Only shows the specified stat type.
	- `&type=members`: Member count
	- `&type=messages`: Messages
	- `&type=boosts`: Boost count
	- `&type=chatters`: Active chatter amount
- `time`: Only shows statistics within the given time span:
	- `&time=1mo`: Only shows statistics of the last month.
	- `&time=5d`: Only shows statistics of the last five days.

Those options can also be used for the `stats` command. The command also generates an URL for easier sharing.

## Settings {#settings}

### Visibility {#visibility}

You can change the visibility of the statistics [in the settings](https://tomatenkuchen.com/dashboard/settings#publicStats).
You can choose from "Public" (accessible for everyone with the link), "Only Members" (only server members) and "Disabled" (hides the statistics for everyone).

Note that "Only Members" and "Disabled" will disable tracking of message statistics (amount of messages & active chatters).

### Excluded channels {#excluded-channels}

You can select channels which will be excluded from message statistic tracking, e.g. for bot spam channels.
