document.getElementById("engine_size").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,1})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "." + x[2] : "") : "";
});

document.getElementById("oil_capacity").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,1})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "." + x[2] : "") : "";
});