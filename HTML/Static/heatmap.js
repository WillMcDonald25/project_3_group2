// var myMap = L.map("mapKW", {
//     center: [37.7749, -122.4194],
//     zoom: 4
//   });
  
//   // Adding the tile layer
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);
  
  var url = "http://127.0.0.1:5000/API";
  
  var stateCoord="https://gist.githubusercontent.com/meiqimichelle/7727723/raw/0109432d22f28fd1a669a3fd113e41c4193dbb5d/USstates_avg_latLong";

  

  d3.json(stateCoord).then(function(data) {
    console.log(data);

    var states=[];
    for (var k = 0; k < data.length; k++){
        var stateData = data[k];
        if (stateData){
            states.push({"Name":stateData.state,"Coordinates":[stateData.latitude,stateData.longitude]});
        };
    }
  });
  d3.json(url).then(function(response) {
  
    console.log(response);
    
    var heatArray = [];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].Region;
      for (var k = 0; k< states.length; k++){
  
        if (location == states[k].Name) {
            heatArray.push([states.Coordinates[0], states.Coordinates[1]]);
        };
        }}
  
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  
  });