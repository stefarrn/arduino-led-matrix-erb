let HIGH = 0x01;
let LOW = 0x00;
// let sleep = require('sleep');
let five = require("johnny-five");
let board = new five.Board({
    //port: "COM5",
});

let row = [];
let col = [];

board.on("ready", () => {
    for (let x = 2; x <= 6; x++) {
        col[x - 2] = new five.Pin(x);
    }
    for (let y = 7; y <= 13; y++) {
        row[y - 7] = new five.Pin(y);
    }

    board.loop(500, () => {
        main();
    });
});

async function main() {
    row[0].write(HIGH);
    row[1].write(HIGH);
    // row[2].write(HIGH);
    row[3].write(HIGH);
    row[4].write(HIGH);
    row[5].write(HIGH);
    row[6].write(HIGH);
    
    console.log(col)
    console.log(row)
 
    col[2].write(HIGH);
    row[2].write(LOW);
    await new Promise(done => setTimeout(() => done(), 200));
}