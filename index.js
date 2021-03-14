const arduino = require("johnny-five");
const path = require("path");
const express = require("express");
const app = express();
const hostingPORT = 8081;
const arduinoPort = "COM5";

app.use(express.json());
app.use(express.static(path.join(__dirname, 'web')));

app.listen(
    hostingPORT,
    () => console.log(`live at http://localhost:${hostingPORT}`)
)

let HIGH = 0x01;
let LOW = 0x00;
let board = new arduino.Board({
    port: arduinoPort,
});

let col = [false, false, false, false, false];
let row = [false, false, false, false, false, false, false];

let colPin = [];
let rowPin = [];

board.on("ready", () => {
    for (let x = 2; x <= 6; x++) {
        colPin[x - 2] = new arduino.Pin(x);
    }
    for (let y = 7; y <= 13; y++) {
        rowPin[y - 7] = new arduino.Pin(y);
    }

    board.loop(500, () => {
        main();
    });
});

async function main() {
    for (let x = 0; x < col.length; x++) {
        value = col[x] ? HIGH : LOW;
        colPin[x].write[value]
    }

    for (let y = 0; y < col.length; y++) {
        value = row[y] ? LOW : HIGH;
        rowPin[y].write[value]
    }
}

app.get("/led", (req, res) => {
    res.status(200).send({
        col: col,
        row: row,
    })
});

app.get("/", (req, res) => {
    let { port:newCOM } = req.body
    res.render("web/index.html");
});

app.post("/led/set", (req, res) => {
    let {newCols: newCols, newRows: newRows} = req.body;
    col = eval(newCols)
    row = eval(newRows)

    res.send({
        col: col,
        row: row,
    })
})