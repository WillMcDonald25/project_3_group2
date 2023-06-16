// var myMap = L.map("map", {
//     center: [37.7749, -122.4194],
//     zoom: 4
//   });
  
//   // Adding the tile layer
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);
  
  var url = "http://127.0.0.1:5000/API";
  
  var stateCoord="https://leafletjs.com/examples/choropleth/us-states.js";

  

  d3.json(stateCoord).then(function(data) {
    console.log(data);

    var states=[];
    for (var k = 0; k < data.length; k++){
        var state = data[k].features;
        if (state){
            states.push({"Name":state.properties.name,"Coordinates":state.geometry.coordinates[0]});
        }
    }
  });
  d3.json(url).then(function(response) {
  
    console.log(response);
    
    var heatArray = [];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].Region;
  
        if (location) {
            heatArray.push([location.coordinates[1], location.coordinates[0]]);
        }
        }
  
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  
  });