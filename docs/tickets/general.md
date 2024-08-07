---
title: Ticket features
description: Explains the ticket system with all of its features, setup instructions and settings of it.
---

## Setting up ticket categories {#create-ticket-categories}

In the dashboard you can create ticket categories, causing, depending on which ticketembed was used for the creation, a different ticket to be created.
You can customize the category, transcript channel, and message for each ticket category individually.

To create a ticket category, open the settings page of your server and find the setting for ticket categories. Click on the "Add" button and fill in the values accordingly.

`name` is the internal ID of the ticket category, enter something easily recognizable there.
The remaining fields are used for the message sent when creating a new ticket, for more information see the [Ticket create message](#create-message)

## Ticket claiming {#claiming}

Please refer to the [Claiming](./claiming) docs page.

## Saving of attachments in tickets {#attachment-storing}

By default, attachments are stored by TomatenKuchen to make them retrievable in a transcript even if the original channel gets deleted.
Users can change this setting by using the `usersettings` command.

## Settings {#settings}

### Ticket create message {#create-message}

You can set a default message and also customize one for each ticket category. These messages will be sent after creating a ticket.

If at least one message field of the ticket category is filled out, it will override the default message.

The following variables can be used in the message:

- `{userMention}`: Mentions the ticket author
- `{username}`: The username of the ticket author
- `{globalName}`
- `{displayName}`
- `{id}`: The (per server) unique ticket ID
- `{serverName}`: The server name
- `{serverIcon}`: The server icon
- `{supporterRoles}`: Mentions all roles marked as supporters
- `{managerRoles}`: Mentions all roles marked as moderators

### Reminder for inactive tickets {#inactivity-remind}

Here, you can set a specific time and a message to be sent if no message has been sent in the ticket for the specified time.

In addition to the variables mentioned above, the following variables are available:

- `{allmention}`: Mentions the ticket creator and all the users added to the ticket
- `{timestamp}`: A Discord timestamp that shows when the ticket will be automatically closed

### Close ticket on inactivity {#inactivity-close}

By using this time setting, you can have the bot automatically close a ticket if it has been inactive for a certain period of time, i.e., if no messages have been sent.

### Channels or threads {#channels-or-threads}

You can select whether the bot should use channels or private threads for tickets.

In private threads, no ticket category is used. Instead, all the threads are created in the current channel where the command was executed.

### Ticket name {#ticket-name}

This [setting](https://tomatenkuchen.com/dashboard/settings#ticketName) allows you to modify the default name of a ticket.

The following variables can be used in the name (casing is ignored):
- `{username}`
- `{globalName}`
- `{id}`

For an explanation of what the variables are for, check [Ticket create message](#create-message)

The name can be changed after creation using the [rename command](./commands#cmd-rename).

### Message to ticket creator on ticket close {#dm-author}

If this setting is set to "Always" the bot sends a DM message to the original ticket creator.

In the "Manual" mode, the ticket close message contains a button that can be used to send a message to the ticket creator.

In the "Disabled" mode, no message is sent to the creator when a ticket is closed.

### Supporter roles {#supporter-roles}

Supporter (Staff) roles are roles which have the permission to view all ticket channels by default.

### Manage roles {#manage-roles}

Users with the roles selected here have the same permissions as users who only have a [supporter role](#supporter-roles).

Zusätzlich haben sie die Möglichkeit, Tickets zu löschen, Tickets für andere Nutzer als sie selbst anzulegen, sowie beim Erstellen eines Tickets die Möglichkeit, eine Ticketkategorie auszuwählen.

### Ticket limit {#limit}

The [ticket limit](https://tomatenkuchen.com/dashboard/settings#ticketLimit) configures how many open tickets a user can have at the same time.
Closed and deleted tickets don't count against this, but reopened ones do.

If a user reached this limit, they are unable to create any new tickets.
Instead, open tickets have to be closed.
Alternatively a user with a [Manage role](#manage-roles) is able to create a new ticket for the original user.

### Excluded roles {#excluded-roles}

Using this setting, specified roles can be excluded from creating a ticket.

Again, users with a manage role are able to create a ticket for them.

### Require confirmation on close and delete {#require-close-delete-confirm}

These [settings](https://tomatenkuchen.com/dashboard/settings#ticketRequireCloseConfirm) toggle whether users have to confirm the closing/deletion of a ticket by clicking another button, opposed to closing/deleting instantly which is the default.
