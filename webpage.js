   TESTER = document.getElementById('tester');

 var trace1 = {
      x: ["blue 470", "cyan525", "green560", "yellow 585", "orange600", "red645", "deepred700", "IR1735", "IR2810", "IR3880", "IR4940"],
      y: ["26.55%", "13.74%", "15.41%", "15.45%", "16.49%", "37.88%", "61.39%", "62.40%", "90.15%", "98.34%", "101.97%"],
      mode: 'markers',
      type: 'scatter',
      name: 'Team A',
      mode: 'lines-markers',
      marker: { size: 20 }
var data = [trace1];

var layout = {
 title: Reflection Graph
 xaxis: {
   title: 'Wavelength',
 },
 yaxis: {
   title: 'Reflection',
 }
 };

   Plotly.newPlot('tester', data, layout};
}};
