---
title: Shorter-Befehl
description: Diese Seite erklärt sh0rt.zip und den dazugehörigen Shorter-Befehl.
---

[sh0rt.zip](https://sh0rt.zip) ist ein einfacher URL-Shortener, erstellt vom selben Entwickler wie TomatenKuchen.

## URL-Redirects folgen {#follow-redirects}

Der Befehl `shorter follow <URL>` folgt den Weiterleitungen der angegebenen URL und listet diese auf.

## Statistiken der Domain {#shorter-stats}

Mit dem Befehl `shorter stats` werden Statistiken über die sh0rt.zip-Domain angezeigt, z. B. die Anzahl der Aufrufe und die am meisten verwendeten Browser.

Diese Statistiken werden von [Cloudflare](https://cloudflare.com) anonymisiert gesammelt, sh0rt.zip selbst sammelt keine Daten.

## Short-URL erstellen {#create}

`shorter create <Target URI> [<Name>]` erstellt eine Short-URL unter dem angegebenen Namen.

Wenn du keinen Namen angegeben hast generiert der Bot einige zufällige Zeichen und verwendet diese für den Namen.

Wenn die Short-URL erfolgreich erstellt wurde antwortet der Bot mit der generierten Short-URL, z. B. https://sh0rt.zip/bundbot, und einem QR-Code, um den Link einfacher teilen zu können.

Um den QR-Code als Bildlink zu teilen kannst du "qr/" im Link hinzufügen, also z. B. https://sh0rt.zip/qr/bundbot:

![Bundbot-Shorter-QR-Code](https://sh0rt.zip/qr/bundbot)
