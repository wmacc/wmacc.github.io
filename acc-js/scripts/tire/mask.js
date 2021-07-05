document.getElementById('mileage').addEventListener('blur', function (e) {
  if (e.target.value[0] == 0 && e.target.value[1] == 0) {
    var x = e.target.value.replace(/^0+/, '').match(/(\d{1})(\d{3})/);
    e.target.value = x[1] ? x[1] + (x[2] ? "," + x[2] : "") : "";
  } else if (e.target.value[0] == 0) {
    var x = e.target.value.replace(/^0+/, '').match(/(\d{2})(\d{3})/);
    e.target.value = x[1] ? x[1] + (x[2] ? "," + x[2] : "") : "";
  } else {
    var x = e.target.value.replace(/\D/g, "").match(/(\d{3})(\d{3})/);
    e.target.value = x[1] ? x[1] + (x[2] ? "," + x[2] : "") : "";
  }
});

document.getElementById("tire_size").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value = x[1] ? "P" + x[1] + (x[2] ? "/" + x[2] : "") + (x[3] ? "R" + x[3] : "") : "";
});