---
title: Errors from the bot
description: Here you can find information about errors and logs.
image: /img/logs_overview.webp
---

You've encountered an error, e.g. a "An error occurred while executing the command `…`" message or something doesn't work as expected?
Errors like "Interaction failed" shouldn't happen either - due to the high number of features, it's unfortunately not always possible to test all functions.

If you found a bug, please report it on the [support server](https://tomatenkuchen.com/discord) or using the "Feedback" button from the `help` or `bot` command.

## Logs {#logs}

Many systems, especially interval (feeds, cronjob/interval based integrations) and event (welcome/leave messages) based ones, support logs.

The log system collects errors and other important events of the server. You can select the server in question at https://tomatenkuchen.com/dashboard/logs if, for example, no welcome message is sent and you want to know why. On the page you can search the logs and display information about them.

This information includes the log ID, the error summary, the number of errors and a button to display internal additional information.

Logs that occurred last three or more days ago can be deleted.

![Logs overview](/img/logs_overview.webp)

:::tip Support server

If you don't understand a still active log, join the [support server](https://tomatenkuchen.com/discord) and share the log ID in the #support forum.

:::
