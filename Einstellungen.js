// Lied-Datei:
const SONG_FILE = "Lied.mp3";

// Gesamtzeit / Beginn des Countdowns:
const TIME_LENGTH = 72; // Sekunden
// (Empfehlung: Wähle die Länge des Liedes)

// Zeit pro Bild in Sekunden (das erste Bild kann bisschen länger sein):
const TIME_PER_PIC = 5; // Sekunden

// Pfad zu den Bildern:
const PATH_TO_PICS = "Bilder/";

// Das Bildformat, auf das JEDES Bild im Ordner "Bilder/" enden MUSS:
const PIC_FORMAT = "jpg";

// Schriftgröße:
const FONT_SIZE = "9vw";
// (Empfehlung: "9vw")

// Einheit für Minuten:
const UNIT_MINUTE = "m";

// Einheit für Sekunden:
const UNIT_SECOND = "s";

// Trennzeichen zwischen Minuten und Sekunden:
const SEPERATOR = " "

// Ob 0 Minuten bei Zeiten unter einer Minute angezeigt werden soll:
const SHOW_ZERO_MIN = true;
// mögliche Werte: "true" für Ja und "false" für Nein





// -------- Empfohlene Konfiguration #1 --------

//const UNIT_MINUTE = "m";
//const UNIT_SECOND = "s";
//const SEPERATOR = " "
//const SHOW_ZERO_MIN = true;

// -> z.B. "2m 34s", "0m 56s" oder "0m 07s"



// -------- Empfohlene Konfiguration #2 --------

//const UNIT_MINUTE = "";
//const UNIT_SECOND = "";
//const SEPERATOR = ":"
//const SHOW_ZERO_MIN = false;

//-> z.B. "2:34", "56" oder "7"
