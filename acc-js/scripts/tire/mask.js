document.getElementById("mileage").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "," + x[2] : "") : "";
});

document.getElementById("tire_size").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value = x[1] ? "P" + x[1] + (x[2] ? "/" + x[2] : "") + (x[3] ? "R" + x[3] : "") : "";
});
