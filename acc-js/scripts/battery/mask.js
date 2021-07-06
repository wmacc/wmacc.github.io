document.getElementById("mileage").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "," + x[2] : "") : "";
});

document.getElementById("engine_size").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,1})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "." + x[2] : "") : "";
});

document.getElementById("upc").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "-" + x[2] : "") + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "") : "";
});

document.getElementById("serial").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,4})(\d{0,4})(\d{0,3})/);
  e.target.value = x[1] ? "JCH " + x[1] + (x[2] ? " " + x[2] : "") + (x[3] ? " " + x[3] : "") : "";
});