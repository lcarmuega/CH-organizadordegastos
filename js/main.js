google.charts.load("current", {
  packages: ["corechart"],
});
google.charts.setOnLoadCallback(drawChart);

function handleSubmit() {
  let ingresoTotal = document.getElementById("ingreso").value;
  let alquiler = document.getElementById("alquiler").value;
  let servicios = document.getElementById("servicios").value;
  let ahorros = document.getElementById("ahorros").value;
  let otros = document.getElementById("otros").value;
  if ( ingresoTotal == "" || alquiler == "" || servicios == "" || ahorros == "" || otros == "" ) {
    alert("Es necesario completar todos los campos. ¡Intentá nuevamente!");
  } else {
    ingresoTotal = parseInt(ingresoTotal);
    alquiler = parseInt(alquiler);
    servicios = parseInt(servicios);
    ahorros = parseInt(ahorros);
    otros = parseInt(otros);
    if ( ingresoTotal < 0 || alquiler < 0 || servicios < 0 || ahorros < 0 || otros < 0 ) {
      alert( "Los valores ingresados no pueden ser negativos. ¡Intentá nuevamente!" );
    } else {
      let resto = ingresoTotal - alquiler - servicios - ahorros - otros;
      if ( resto < 0 ){
        alert( "Los gastos ingresados no pueden superar el ingreso. ¡Intentá nuevamente!");
      } else {
        drawChart(alquiler, servicios, ahorros, otros, resto)
      }
    }
  }
  
}

function drawChart(alquiler, servicios, ahorros, otros, resto) {
  var data = google.visualization.arrayToDataTable([
    ["Gasto", "$"],
    ["Alquiler", alquiler],
    ["Servicios", servicios],
    ["Ahorros", ahorros],
    ["Otros", otros],
    ["Resto", resto],
  ]);

  var options = {
    title: "",
    colors: ["#e7bfc3", "#9a7197", "#886176", "#7c5869", "#143052"],
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
