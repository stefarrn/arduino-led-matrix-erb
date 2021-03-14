async function getMatrixStatus() {
  return await fetch("http://localhost:8081/led", {
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      for (let i = 0; i < result.col.length; i++) {
        col[i] = result.col[i];
      }
      for (let i = 0; i < result.row.length; i++) {
        row[i] = result.row[i];
      }
    })
}

async function setMatrixStatus(newCol, newRow) {
  return await fetch("http://localhost:8081/led/set", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      newCols: newCol,
      newRows: newRow,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => {
    console.log(response)
  })
}