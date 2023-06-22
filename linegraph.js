//reading in the base url json file
console.log("hello");
var apiUrl = "http://127.0.0.1:5000/api"
d3.json(apiUrl)
  .then(function(data) {
    // Handle the JSON data received from the API
    console.log(data);
    // Perform further processing or visualization with the data
  })
  .catch(function(error) {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  });
/*d3.json(baseurl).then(data => {
    //extracting all the x and y values for each trace from the data
    //possible easier way for plotting x values
    //const xdata = [40,41,42,43,44,45,46,47,48,
    //49,50,51,52,1,2,3,4,5,6,7,8,9,10,11,12,13,14,
    //15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,
    //30,31,32,33,34,35,36,37,38,39];
    
    
    //trace 2013
    console.log("hello");
    const xdata2013 = data.Region
    console.log('xdata2013')
    console.log(xdata2013)
    const ydata2013 = 
    console.log('ydata2013')
    console.log(ydata2013)

    //trace 2014
    const xdata2014 =
    console.log('xdata2014')
    console.log(xdata2014)
    const ydata2014 =
    console.log('ydata2014')
    console.log(ydata2014)
    
    //trace 2015
    const xdata2015 = 
    console.log('xdata2015')
    console.log(xdata2015)
    const ydata2015 = 
    console.log('ydata2015')
    console.log(ydata2015)
});


  var trace2013 = {
        x: xdata2013,
        y: ydata2013,
        type: 'scatter',
        name: '2013-14 Weekly Total Flu Patients'
    };
    
    var trace2014 = {
        x: xdata2014,
        y: ydata2014,
        type: 'scatter',
        name: '2014-15 Weekly Total Flu Patients'
    };
    
    var trace2015 = {
        x: xdata2015,
        y: ydata2015,
        type: 'scatter',
        name: '2015-16 Weekly Total Flu Patients'
    };
    
    
    
    var tracedata = [trace2013, trace2014, trace2015];
    
    var layout = {
        Title: "Line Plots",
        xaxis: {
        title: 'Weeks In Year Given Year'
        },
        yaxis: {
        title: 'Total Number of Patients'
        }
    };
    
    Plotly.newPlot('line-plot', tracedata, layout);

});
















// Call updatePlotly() when a change takes place
d3.selectAll("#selDataset").on("change", updatePlotly);
//this function is called when a dropdown menu item is selected
function updatePlotly() {
   // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");

    //initialize x and y arrays
    let x = [];
    let y = [];

    if (dataset === '2013-14 data') {
        x = [xdata2013],
        y = [ydata2013]
    }
    else if (dataset === '2014-15 data') {
        x = [xdata2014],
        y = [ydata2014] 
    }
    else if (dataset === '2015-16 data') {
        x = [xdata2015],
        y = [ydata2015] 
    }

    Plotly.restyle("line-plot", "x", [x]);
    Plotly.restyle("line-plot", "y", [x]);
}
*/
