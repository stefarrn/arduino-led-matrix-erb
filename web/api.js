async function getLedStatus() {
  return await fetch("http://localhost:8081/led", {
    method: "GET",
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      for (let i = 0; i < result.ledArray.length; i++) {
        led[i] = result.ledArray[i];
      }
    })
}

async function setLedStatus(newArray) {
  return await fetch("http://localhost:8081/led/set", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      newState: newArray,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => {
    console.log(response)
  })
}

async function changeLedStatus(change) {
  return await fetch("http://localhost:8081/led/change", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      changeLed: change,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => {
    console.log(response)
  })
}