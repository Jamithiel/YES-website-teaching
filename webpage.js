<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.plot.ly/plotly-2.32.0.min.js" charset="utf-8"></script>
  <div id="tester" style="width:600px;height:250px;"></div>
</head>

var layout = {
  title: {
    text:'Graph ^_^',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: "orange",
  xaxis: {
    title: {
      text: 'x Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'y Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

 </script> 
    <script>

      TESTER = document.getElementById('tester');

      Plotly.newPlot( TESTER, [{

      x: ["blue 470", "cyan525", "green560", "yellow 585", "orange600", "red645", "deepred700", "IR1735", "IR2810", "IR3880", "IR4940"],

      y: ["26.55%", "13.74%", "15.41%", "15.45%", "16.49%", "37.88%", "61.39%", "62.40%", "90.15%", "98.34%", "101.97%"] }], {

      margin: { t: 0 } } );

    </script>
  </body> 
  </html> 

