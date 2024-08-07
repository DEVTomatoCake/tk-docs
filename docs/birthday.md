---
title: Birthdays
description: The birthday system allows creating birthday per user and per server. You can also create birthday calendars and customized reminders.
---

Birthday messages are sent daily in the set server timezone at 0 o'clock (midnight).

## Real users {#users}

### Set/edit birthday {#create}

Every user can set their global birthday using `birthday set <Day> <Month> [<Year>] [public]`.

The year is optional, if used the birthday messages and [auto updating messages](/autoupdate) can use the variable `{age}`, which displays the new age. If the age is not set, the age variable is left empty.

Using the `public` option you can toggle whether the birthday is shown on the `user` command and the `{birthday}` argument for autoupdating messages.
This doesn't affect birthday announcements.

- `birthday set 29 2 2000 public`
	- Sets a public birthday which is announced every year on 02/29. If the year is not a leap year, the message will appear on 03/01.
- `birthday set 1 4`
	- Sets a not public birthday which is announced every year on 04/01.

### Delete birthday {#delete}

<Command name="birthday delete"></Command>

This command deletes your current birthday.

## Fictive birthdays {#fictive}

Fictive birthdays are per server and can be configured by server moderators.

### Creating or updating {#fictive-create}

<Command name="birthday setfictive" slash="name:Name day:Day month:Month [year:Year]" message="<Name> <Day> <Month> [<Year>]"></Command>

Fictive birthdays must have a name set to identify them. Using this name birthday messages are created - the arguments stay the same, the bot automatically changes them to fit - and `{birthday}` generated.

- `birthday setfictive Minecraft 17 5 2009`
- `birthday setfictive 🎇Sylvester🎆 31 12`

### Delete {#fictive-delete}

<Command name="birthday delete" slash="name:Name" message="<Name>"></Command>

## Settings {#settings}

### Message {#message}

Configure the message that is sent once the date today is a real or a fictive user's birthday.

### Delete birthday message after {#delete-after}

This setting allows you to enter a relative time to delete the birthday announcement message after, for example `1d` for one day.

### Channel {#channel}

Birthdays are announced in the [selected channel](https://tomatenkuchen.com/dashboard/settings#birthdayChannel).

### Role {#role}

Select a role which users receive on their birthday for 24 hours.
