# Countdown mit Diashow - SWDEC Edition

Diese Vorlage bietet einen einstellbaren Countdown mit individueller Diashow und möglicher Musik im Hintergrund. Damit eignet sie sich perfekt für den Beginn von Veranstaltungen wie beispielsweise Gottesdienste. In dieser Vorlage wird das Corporate Design des [SWDEC](https://swdec.de/) eingehalten. (Um eine allgemeingültige Vorlage zu erhalten, gibt es [hier](https://github.com/TBen2000/Countdown-with-Slideshow) eine weitere Vorlage.)


## Ausführen

Die Vorlage ist in Form einer Webseite entwickelt, welche lokal im Browser ausgeführt werden kann. Zum Starten muss lediglich dieses Repository heruntergeladen („Code“ ⇾ „Download ZIP“), danach die heruntergeladene Datei entpackt und anschließend die Datei „Start.html“ in einem Browser der Wahl ausgeführt werden.


## Anpassen

### Bilder

Um eigene Bilder im Hintergrund zu verwenden, können im Ordner „Bilder“ eigene Fotos hinzugefügt werden. Diese müssen von 1 aufwärts benannt werden, sowie alle dasselbe Bildformat (z.B. „.jpg“) besitzen. Es muss sichergestellt werden, dass genug Bilder für den Countdown bereitgestellt werden, damit der Hintergrund nicht einfach irgendwann schwarz wird.

Außerdem können die Bilder „Bild_Anfang.jpg“ und „Bild_Ende.jpg“ verändert werden, um den Hintergrund vor und nach dem Countdown zu definieren. Wichtig ist hierbei, dass die Namen nicht verändert werden dürfen. Momentan sind beide Bilder einfach nur schwarz.

### Lied

Auch das Lied im Hintergrund kann angepasst werden. Dafür muss lediglich die Audi-Datei in den Ordner geladen und in der Datei „Einstellungen.js“ auf ebendiese Datei verwiesen werden.

### Weitere Einstellungen

Sonstige Einstellungen lassen sich in der Datei „Einstellungen.js“ definieren. Es ist wichtig, diese Eintellungen anzupassen, um den Countdown zu individualisieren. Für das Format des Countdowns wird eine der beiden Einstellungen empfohlen:

```
const UNIT_MINUTE = "m";
const UNIT_SECOND = "s";
const SEPERATOR = " "
const SHOW_ZERO_MIN = true;
```
⇾ Diese Einstellungen geben beispielsweise die Werte „2m 34s“, „0m 56s“ oder „0m 07s“ aus.


```
const UNIT_MINUTE = "";
const UNIT_SECOND = "";
const SEPERATOR = ":"
const SHOW_ZERO_MIN = false;
```
⇾ Diese Einstellungen geben beispielsweise die Werte „2:34“, „56“ oder „7“ aus.
