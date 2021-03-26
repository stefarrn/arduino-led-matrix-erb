let col = [false, false, false, false, false];
let row = [false, false, false, false, false, false, false];
let scl = 60;

function setup() {
  createCanvas(6 * scl, 8 * scl);
  frameRate(2);
  getMatrixStatus();
}

function draw() {
  background(50);
  getMatrixStatus();
  frameRate(2);

  //matrix UI
  for (let x = 0; x < col.length; x++) {
    for (let y = 0; y < row.length; y++) {
      let state = col[x] && row[y];
      let color = state ? [200, 60, 0] : [200, 200, 200];

      fill(color)
      ellipseMode(CORNER)
      ellipse(x * scl, y * scl, scl - 2, scl - 2)
    }
  }


  //row UI
  for (let x = 0; x < col.length; x++) {
    let color = col[x] ? [0, 60, 200] : [200, 200, 200];
    fill(color)
    rect(x * scl, 7 * scl, scl, scl)
  }

  //col UI
  for (let y = 0; y < row.length; y++) {
    let color = row[y] ? [0, 60, 200] : [200, 200, 200];
    fill(color)
    rect(5 * scl, y * scl, scl, scl)
  }

  //reset UI
  fill(200,20,20)
  rect(5*scl, 7*scl, scl, scl)
}

function mousePressed() {
  let x = Math.floor(mouseX / scl);
  let y = Math.floor(mouseY / scl);

  if (x == 5 && y == 7) {
    clearMatrix();
    return true;
  }

  if (x >= 6 || y >= 8) {
    return false;
  }

  if (x < 5 && y < 7) {
    updateBoth(x, y)
  } else if (x == 5) {
    updateRow(y);
  } else if (y == 7) {
    updateCol(x);
  }

  return true;
}

let updateCol = c => {
  let updateCol = [...col];
  updateCol[c] = !updateCol[c];
  setMatrixStatus(updateCol, row);
}

let updateRow = r => {
  let updateRow = [...row];
  updateRow[r] = !updateRow[r];
  setMatrixStatus(col, updateRow);
}

let updateBoth = (c, r) => {
  let updateCol = [...col];
  let updateRow = [...row];

  updateCol[c] = !updateCol[c];
  updateRow[r] = !updateRow[r];

  setMatrixStatus(updateCol, updateRow);
}

let clearMatrix = () => {
  let updateCol = [false, false, false, false, false];
  let updateRow = [false, false, false, false, false, false, false];
  setMatrixStatus(updateCol, updateRow);
}