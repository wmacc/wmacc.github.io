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
      window.location.assign("./index.html");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

async function vinSubmit() {
  VIN = document.getElementById('vin').value
  const response = await fetch(`https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVin/${VIN}?format=json`);
  data = await response.json();
  renderVinData()
}

function renderVinData() {
  let li = document.createElement("li")
  let table = document.createElement("table")
  let tbody = document.createElement("tbody")
  let trSearch = document.createElement('tr')
  let thSearch = document.createElement('th')
  let trYear = document.createElement('tr')
  let thYear = document.createElement('th')
  let tdYear = document.createElement('td')
  let trMake = document.createElement('tr')
  let thMake = document.createElement('th')
  let tdMake = document.createElement('td')
  let trModel = document.createElement('tr')
  let thModel = document.createElement('th')
  let tdModel = document.createElement('td')
  let trEngine = document.createElement('tr')
  let thEngine = document.createElement('th')
  let tdEngine = document.createElement('td')
  table.className = "table table-sm table-striped table-bordered"
  thSearch.setAttribute('colspan', 2)
  thSearch.className = 'thSearch'

  thYear.textContent = 'Year'
  thMake.textContent = 'Make'
  thModel.textContent = 'Model'
  thEngine.textContent = 'Engine size'
  thSearch.textContent = data.SearchCriteria
  tdYear.textContent = data.Results[9].Value
  tdMake.textContent = data.Results[6].Value
  tdModel.textContent = data.Results[8].Value
  tdEngine.textContent = data.Results[71].Value

li.removeChild(table) 

  li.appendChild(table)
  table.appendChild(tbody)
  tbody.appendChild(trSearch)
  trSearch.appendChild(thSearch)
  tbody.appendChild(trYear)
  trYear.appendChild(thYear)
  trYear.appendChild(tdYear)
  tbody.appendChild(trMake)
  trMake.appendChild(thMake)
  trMake.appendChild(tdMake)
  tbody.appendChild(trModel)
  trModel.appendChild(thModel)
  trModel.appendChild(tdModel)
  tbody.appendChild(trEngine)
  trEngine.appendChild(thEngine)
  trEngine.appendChild(tdEngine)

  document.querySelector("#vin-table").appendChild(li)
}
