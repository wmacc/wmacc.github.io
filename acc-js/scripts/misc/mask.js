document.getElementById('mileage').addEventListener('blur', function (e) {
  if (e.target.value[0] != 0) {
     var x = e.target.value.replace(/\D/g, "").match(/(\d{3})(\d{3})/);
    e.target.value = x[1] ? x[1] + (x[2] ? "," + x[2] : "") : "";
  } else {
    var x = e.target.value.replace(/^0+/, '').match(/(\d{2})(\d{3})/);
    e.target.value = x[1] ? x[1] + (x[2] ? "," + x[2] : "") : "";
  }
});

document.getElementById("upc1").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "-" + x[2] : "") + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "") : "";
});

document.getElementById("upc2").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "-" + x[2] : "") + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "") : "";
});

document.getElementById("upc3").addEventListener("input", function (e) {
  var x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,5})(\d{0,5})(\d{0,1})/);
  e.target.value = x[1] ? x[1] + (x[2] ? "-" + x[2] : "") + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "") : "";
});
