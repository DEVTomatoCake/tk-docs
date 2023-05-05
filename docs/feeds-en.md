---
title: Feeds
lang: en
---

This page will help you to setup RSS and other feeds using the Discord bot.

# RSS/Atom feeds
The bot supports all types of RSS and atom feeds. You can add a new feed by creating the "Add" button in the dashboard and filling in the feed url.
The bot will then automatically post new entries to the channel you selected.
Feeds are checked for new content every 10 minutes, and up to 10 embeds are displayed.

## Default configuration
![](../rss_feeds_default.png)
The fields should be set to this for an optimal experience, but you can of course edit or move them to your liking.

* `{author}`: The author of the post, if any
* `{title}`: The title of the post
* `{content}`: The main content of the post, usually from the `description` property. HTML tags will be transformed to Discord markdown.
* `{image}`: The image of the post, if any
* `{domain}`: The domain of the feed

If the feed contains any more properties, you can use them as well. The bot will automatically replace them with the correct value, e.g. `{link}` if the feed contains `"link": "https://tomatenkuchen.eu/post/42"`.

## Example feeds

### YouTube
While there is a dedicated YouTube feed, you can also use the RSS feed of a channel.

Feed url: `https://www.youtube.com/feeds/videos.xml?channel_id=UC...` where `UC...` is the channel id. You can get the channel id using the `youtube` command.

`content`: `**{user}** uploaded a new video! Check it out now: {link}`
Embed fields should be empty as you can't embed videos in custom embeds.

### Nitter (Twitter)
Feed url: `https://nitter.net/{user}/rss`

### Mastodon
Feed url: `https://{instance}/users/{user}.atom`

### Reddit
Feed url: `https://www.reddit.com/r/{subreddit}/new/.rss`