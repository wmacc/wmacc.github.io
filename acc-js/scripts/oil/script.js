function timeStarted() {
  timeStarted = Date();
}

function timeFinished() {
  timeFinished = Date();
}

function totalTime() {
  timeFinished()
  totalTime = moment.utc(moment(timeFinished).diff(moment(timeStarted))).format("HH:mm:ss");
}

function oilSubmit() {
  totalTime()
  db.collection("services").add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    service: "Oil Change",
    time_started: timeStarted,
    time_finished: timeFinished,
    total_time: totalTime
  })
    .then(() => {
      window.location.assign("./index.html");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}