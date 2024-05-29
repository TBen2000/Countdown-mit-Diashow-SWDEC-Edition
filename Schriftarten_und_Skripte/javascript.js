// CONSTANTS are stored in settings.js and are imported in main.html as well!


let remainingTime = TIME_LENGTH;
let currentPictureNumber = 1;
let currentBackgroundID = 1;
let mainExecuted = false;


function main() {
    if (mainExecuted == true) { // Stops when main() was already executed once
        return;
    }
    mainExecuted = true;

    // remove start text
    document.getElementById("clickToStart").innerHTML = "";

    // play song
    let audio = new Audio(SONG_FILE);
    audio.volume = 1;
    audio.play();

    // set up custom CSS variables for countdown text (font size)
    if (FONT_SIZE != "") {
        document.querySelector(":root").style.setProperty("--font-size", FONT_SIZE);
    }

    // set up first screen
    setBackground(getPathToPicture(currentPictureNumber));
    document.getElementById("countdown").style.opacity = "1";

    // start countdown
    runTimer();
}


function runTimer() {
    const interval = 1000; // ms
    let expected = Date.now();
    let timeoutId = setTimeout(step, 0);
    function step() {
        if (remainingTime >= 0) {
            executeStep(); // do that every second
            remainingTime -= 1;
        }
        else {
            // stop timeout loop
            clearTimeout(timeoutId);
            timeoutId = 0;
            return;
        }

        let drift = Date.now() - expected; // the time drift (overshooting)
        if (drift > interval) {
            // something really bad happened. Maybe the browser (tab) was inactive?
            let scippedSteps = Math.floor(drift / interval);
            expected += interval * scippedSteps;
            remainingTime -= scippedSteps;
        }
        else {
            expected += interval;
        }

        setTimeout(step, Math.max(0, interval - drift)); // take drift into account
    }
}


function executeStep() {
    printCountdown();

    if (remainingTime % TIME_PER_PIC == 0) { // e.g. every fifth time
        nextBackground();
    }
}


function printCountdown() {
    let seconds = remainingTime % 60;
    let minutes = (remainingTime - seconds) / 60

    let countdownText = seconds + UNIT_SECOND;

    if (minutes > 0 || SHOW_ZERO_MIN == true) {
        let leadingZero = ""
        if (seconds < 10) {
            leadingZero = "0"
        }

        countdownText = minutes + UNIT_MINUTE + SEPERATOR + leadingZero + countdownText
    }

    document.getElementById("countdown").innerHTML = countdownText;
}


function nextBackground() {
    if (remainingTime <= 0) {
        setBackground("Bild_Ende.jpg");
    }
    else {
        setBackground(getPathToPicture(currentPictureNumber));
        currentPictureNumber += 1;
        preloadImage(getPathToPicture(currentPictureNumber));
    }
}


function setBackground(filename) {
    currentBackgroundID = getNextBackgroundID();
    let id = "bg-" + currentBackgroundID;
    document.getElementById(id).src = filename;

    switchBackgroundOpacity();

    // Fade switch between pictures is realized by fading in and fading out
    // the "bg-2" HTML element. Between fades, the next picture is set.
}


function switchBackgroundOpacity() {
    let currentOpacity = document.getElementById("bg-2").style.opacity;
    let nextOpacity = bitSwitch(currentOpacity);
    document.getElementById("bg-2").style.opacity = nextOpacity.toString();
}


function getPathToPicture(name) {
    return PATH_TO_PICS + name + "." + PIC_FORMAT;
}


function getNextBackgroundID() {
    if (currentBackgroundID == 2) {
        return 1;
    }
    else if (currentBackgroundID == 1) {
        return 2;
    }

    throw new Error("Function getNextBackgroundID() can just handle 1 and 2 as values for parameter currentBackgroundID!");
}


function bitSwitch(bitValue) {
    if (bitValue == 1) {
        return 0;
    }
    else if (bitValue == 0) {
        return 1;
    }

    throw new Error("Function bitSwitch(bitValue) can just handle 0 and 1 as parameter values!");
}


function preloadImage(url) {
    let img = new Image();
    img.src = url;
}


// KeyListener: Start main() on click
document.addEventListener("click", () => {
    main();
});


// KeyListener: Start main() on Enter key
document.addEventListener('keydown', e => {
    if (e.key == "Enter") { // if key pressed is Enter Key
        main();
    }
});