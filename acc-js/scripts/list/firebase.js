var firebaseConfig = {
  apiKey: "AIzaSyA970nXe7p40FXk-ZirFIFtwi29ttti-vw",
  authDomain: "wmacc-351d1.firebaseapp.com",
  projectId: "wmacc-351d1",
  storageBucket: "wmacc-351d1.appspot.com",
  messagingSenderId: "241373197966",
  appId: "1:241373197966:web:6a661ecadce4c155473bdf",
  measurementId: "G-MN1JYDQ943"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("services").orderBy("created", "desc").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    renderVehicleList(doc)
  });
});

function renderVehicleList(doc) {
  let li = document.createElement("li")
  let table = document.createElement("table")
  let tbody = document.createElement("tbody")
  let trService = document.createElement("tr")
  let trTimeStarted = document.createElement("tr")
  let trTimeFinished = document.createElement("tr")
  let trTotalTime = document.createElement("tr")
  let thService = document.createElement("th")
  let thTimeStarted = document.createElement("th")
  let thTimeFinished = document.createElement("th")
  let thTotalTime = document.createElement("th")
  let tdService = document.createElement("td")
  let tdTimeStarted = document.createElement("td")
  let tdTimeFinished = document.createElement("td")
  let tdTotalTime = document.createElement("td")
  thService.textContent = "Service"
  thTimeStarted.textContent = "Time Started"
  thTimeFinished.textContent = "Time Finished"
  thTotalTime.textContent = "Total Time"
  tdService.textContent = doc.data().service
  tdTimeStarted.textContent = moment(doc.data().time_started).format("h:mm:ss A")
  tdTimeFinished.textContent = moment(doc.data().time_finished).format("h:mm:ss A")
  tdTotalTime.textContent = doc.data().total_time
  table.className = "table table-sm table-striped table-bordered"
  li.setAttribute("data-id", doc.id)

  li.appendChild(table)
  table.appendChild(tbody)
  tbody.appendChild(trService)
  trService.appendChild(thService)
  trService.appendChild(tdService)
  tbody.appendChild(trTimeStarted)
  trTimeStarted.appendChild(thTimeStarted)
  trTimeStarted.appendChild(tdTimeStarted)
  tbody.appendChild(trTimeFinished)
  trTimeFinished.appendChild(thTimeFinished)
  trTimeFinished.appendChild(tdTimeFinished)
  tbody.appendChild(trTotalTime)
  trTotalTime.appendChild(thTotalTime)
  trTotalTime.appendChild(tdTotalTime)

  document.querySelector("#vehicle-list").appendChild(li)
}

db.collection("services").get().then(querySnapshot => {
  size = querySnapshot.size;
  renderListSize()
});

function renderListSize() {
  let li = document.createElement("li")
  let table = document.createElement("table")
  let tbody = document.createElement("tbody")
  let trSize = document.createElement("tr")
  let thSize = document.createElement("th")
  let tdSize = document.createElement("td")
  thSize.textContent = "Vehicles completed"
  tdSize.textContent = size;
  table.className = "table table-sm table-striped table-bordered"

  li.appendChild(table)
  table.appendChild(tbody)
  tbody.appendChild(trSize)
  trSize.appendChild(thSize)
  trSize.appendChild(tdSize)

  document.querySelector("#list-size").appendChild(li)
}