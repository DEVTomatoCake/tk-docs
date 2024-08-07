---
title: Giveaways
description: TomatenKuchenn allows you to create feature-rich giveaways with many settings and requirements available.
---

To manage giveaways you need one of the [giveaway roles](https://tomatenkuchen.com/dashboard/settings#giveawayManageRoles) selected in the dashboard, or the "Manage Guild" permission.

## Commands {#commands}

### Create {#cmd-start}

<Command name="giveaway start"></Command>

Start the interactive giveaway setup.

### Edit {#cmd-edit}

Use the button below a giveaway message to edit it.

### Reroll winners {#cmd-reroll}

<Command name="giveaway reroll" slash="message:Message ID" message="<Message ID>"></Command>

This will pick one or the configured amount of winners again after a giveaway has ended.

Users can be selected multiple times.

### End {#cmd-end}

<Command name="giveaway end" slash="message:Message ID" message="<Message ID>"></Command>

### Delete {#cmd-delete}

<Command name="giveaway delete" slash="message:Message ID" message="<Message ID>"></Command>

### List giveaways {#cmd-list}

<Command name="giveaway list"></Command>

List all giveaways of the server. Note that giveaways are deleted 3 months after they've ended.

## Settings {#settings}

### Giveaway message {#message}

Change the text of the giveaway message. Can be used for example to ping a giveaway role.

### Role for creating/managing giveaways {#manage-roles}

Users with this role can create and edit and giveaways.

Users with one of these roles can run all [commands](#commands) on this page.

### Roles which always can participate {#no-requirements-roles}

Users with this role can always participate in giveaways, ignoring any requirements that have been set for the giveaway.

### Behavior of extra entries {#extra-entries-mode}

#### Stack {#entries-multiple}

This setting causes the default entry (1) to be added together with all extra entries.

#### Highest role {#entries-highest-role}

With this setting the extra entries count of the highest role the specific user has *and* which has got a value for the extra entries assigned.

#### Highest extra entry {#entries-highest-entry}

This value causes the highest extra entry to count which the user has from their roles.

### Extra entries per role {#extra-role-entries}

This setting allows a value per role which specifies the amount of extra entries the role receives in giveaways.

Any number from 0 to 50 can be used, in which case 0 effectively disables the participation on giveaways.

## Requirements {#requirements}

You can add different requirements for participating in a giveaway.

Possible requirements:
- `roles`: Requires all of these roles for participating
	- `roles:123456789123456789`
	- `roles:123456789123456789,987654321987654321`
- `anyRoles`: Requires any of these roles for participating
- `notRoles`: The user must not have any roles to be able to participate
- `minAge`: The account of the user must be at least this time old
	- `minAge:3mo`
	- `minAge:1 week 2 days`
- `minMemberAge`: The user must be on the server for this time
- `minLeaderboardPoints`: The user must have at least this amount of leaderboard points. Depending on the level cooldown setting one point corresponds to one or two messages.
	- `minLeaderboardPoints:1000`
