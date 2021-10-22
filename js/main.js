google.charts.load("current", {
  packages: ["corechart"],
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Gasto", "$"],
    ["Alquiler", 11],
    ["Servicios", 2],
    ["Ahorros", 2],
    ["Otros", 2],
    ["Resto", 7],
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
