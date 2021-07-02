function timeStarted() {
  timeStarted = Date();
  console.log("Time started: " + timeStarted)
}

function timeFinished() {
  timeFinished = Date();
  console.log("Time finished: " + timeFinished)
}

function totalTime() {
  timeFinished()
  totalTime = moment.utc(moment(timeFinished).diff(moment(timeStarted))).format("HH:mm:ss");
  console.log("Total time: " + totalTime)
}

function batterySubmit() {
  totalTime()
  db.collection("services").add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    service: "Battery",
    time_started: timeStarted,
    time_finished: timeFinished,
    total_time: totalTime
  })
    .then(() => {
      window.location.replace("./index.html");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}