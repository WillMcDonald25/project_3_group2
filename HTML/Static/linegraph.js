// Reading in the base url json file
const baseurl = "http://nonkik589.pythonanywhere.com/";

let data2013 = [];
let data2014 = [];
let data2015 = [];
let data2016 = [];

d3.json(baseurl).then(data => {
  //2013 data
  data2013 = data.filter(datapoint => datapoint.Year[0] === 2013);
  console.log("2013 DATA ********");
  console.log(data2013);

  const xgroupedData2013 = d3.nest()
    .key(datapoint => datapoint.Week[0])
    .entries(data2013);
  console.log("Grouped weeks of 2013");
  console.log(xgroupedData2013);

  const yValues2013 = xgroupedData2013.map(datapoint =>
    d3.sum(datapoint.values, x => x.Number_of_Patients)
  );
  console.log("Y-axis values");
  console.log(yValues2013);

  //2014 data
  data2014 = data.filter(datapoint => datapoint.Year[0] === 2014);
  console.log("2014 DATA **********");
  console.log(data2014);

  const xgroupedData2014 = d3.nest()
    .key(datapoint => datapoint.Week[0])
    .entries(data2014);
  console.log("Grouped weeks of 2014");
  console.log(xgroupedData2014);

  const yValues2014 = xgroupedData2014.map(datapoint =>
    d3.sum(datapoint.values, x => x.Number_of_Patients)
  );
  console.log("Y-axis values");
  console.log(yValues2014);

  //2015 data
  data2015 = data.filter(datapoint => datapoint.Year[0] === 2015);
  console.log("2015 DATA *********");
  console.log(data2015);

  const xgroupedData2015 = d3.nest()
    .key(datapoint => datapoint.Week[0])
    .entries(data2015);
  console.log("Grouped weeks of 2015");
  console.log(xgroupedData2015);

  const yValues2015 = xgroupedData2015.map(datapoint =>
    d3.sum(datapoint.values, x => x.Number_of_Patients)
  );
  console.log("Y-axis values");
  console.log(yValues2015);

  //2016 data
  data2016 = data.filter(datapoint => datapoint.Year[0] === 2016);
  console.log("2016 DATA *********");
  console.log(data2016);

  const xgroupedData2016 = d3.nest()
    .key(datapoint => datapoint.Week[0])
    .entries(data2016);
  console.log("Grouped weeks of 2016");
  console.log(xgroupedData2016);

  const yValues2016 = xgroupedData2016.map(datapoint =>
    d3.sum(datapoint.values, x => x.Number_of_Patients)
  );
  console.log("Y-axis values");
  console.log(yValues2016);

  // Extracting all the x and y values for each trace from the data
  const finalxdata2013 = xgroupedData2013.map(datapoint => datapoint.key);
  const finalxdata2014 = xgroupedData2014.map(datapoint => datapoint.key);
  const finalxdata2015 = xgroupedData2015.map(datapoint => datapoint.key);
  const finalxdata2016 = xgroupedData2016.map(datapoint => datapoint.key);

  // Trace 2013
  xdata2013 = finalxdata2013;
  ydata2013 = yValues2013;

  // Trace 2014
  xdata2014 = finalxdata2014;
  ydata2014 = yValues2014;

  // Trace 2015
  xdata2015 = finalxdata2015;
  ydata2015 = yValues2015;

  // Trace 2016
  xdata2016 = finalxdata2016;
  ydata2016 = yValues2016;

  //making all the traces for Plotly
  var trace2013 = {
    x: xdata2013,
    y: ydata2013,
    type: 'scatter',
    name: '2013 Weekly Total Flu Patients'
  };

  var trace2014 = {
    x: xdata2014,
    y: ydata2014,
    type: 'scatter',
    name: '2014 Weekly Total Flu Patients'
  };

  var trace2015 = {
    x: xdata2015,
    y: ydata2015,
    type: 'scatter',
    name: '2015 Weekly Total Flu Patients'
  };

  var trace2016 = {
    x: xdata2016,
    y: ydata2016,
    type: 'scatter',
    name: '2016 Weekly Total Flu Patients'
  };

  var tracedata = [trace2013, trace2014, trace2015, trace2016];

  //making layout for traces
  var layout = {
    title: "Line Plots",
    xaxis: {
      title: 'Weeks In Given Year'
    },
    yaxis: {
      title: 'Total Number of Patients'
    }
  };

  Plotly.newPlot('line-plot', tracedata, layout);

// Making the drop down function to include all singular traces
function updatePlotly() {
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");
  
    let traces = [];
  
    if (dataset === 'all') {
      traces = [trace2013, trace2014, trace2015, trace2016];
    } else if (dataset === '2013 data') {
      traces = [trace2013];
    } else if (dataset === '2014 data') {
      traces = [trace2014];
    } else if (dataset === '2015 data') {
      traces = [trace2015];
    } else if (dataset === '2016 data') {
      traces = [trace2016];
    }
  
    Plotly.newPlot('line-plot', traces, layout);
  }

  //changing the trace when selecting different option in drop down menu
  d3.selectAll("#selDataset").on("change", updatePlotly);
});
