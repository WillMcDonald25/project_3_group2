var myMap = L.map("mapKW", {
  center: [37.09, -120.71],
  zoom: 13
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  var url = "http://nonkik589.pythonanywhere.com/";
  
  var stateCoord="https://gist.githubusercontent.com/meiqimichelle/7727723/raw/0109432d22f28fd1a669a3fd113e41c4193dbb5d/USstates_avg_latLong";

  
var states=[];

  d3.json(stateCoord).then(function(data) {
    console.log(data,"State Coordinates");

    
    for (var k = 0; k < data.length; k++){
        var stateData = data[k];
        if (stateData){
            states.push({"Name":stateData.state,"Coordinates":[stateData.latitude,stateData.longitude]});
          
    }
  };
  console.log(states,"States");
});


  d3.json(url).then(function(response) {
  
    console.log(response);
    
    var heatArray = [];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].Region;
      
      for (var j = 0; j< states.length; j++){      
        if (location[0] === states[j].Name) {          
            heatArray.push(states[j].Coordinates);
        }
    
        };};
  
    console.log(heatArray,"Heat Array"); 
      
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  
  });