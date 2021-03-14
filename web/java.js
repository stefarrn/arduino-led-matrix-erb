let col = [false, false, false, false, false];
let row = [false, false, false, false, false, false, false];
let scl = 80;

function setup() {
  createCanvas(5 * scl, 7 * scl);
  frameRate(2);
  getMatrixStatus();
}

function draw() {
  background(200);
  getMatrixStatus();
  frameRate(2);

  for (let x = 0; x < col.length; x++) {
    for (let y = 0; y < row.length; y++) {
      let state = col[x] && row[y];
      let color = state ? [200, 0, 0] : [50, 50, 50];

      fill(color)
      rect(x * scl, y * scl, scl, scl)
    }
  }
}

function mousePressed() {
  let updateCol = [...col];
  let updateRow = [...row];

  let x = Math.floor(mouseX/scl);
  let y = Math.floor(mouseY/scl);

  updateCol[x] = !updateCol[x];
  updateRow[y] = !updateRow[y];

  setMatrixStatus(updateCol, updateRow);
}