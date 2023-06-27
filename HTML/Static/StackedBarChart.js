getData();

   newLabels = []; patientData = []; providerData = [];

   async function getData() {
      const newurl = 'http://nonkik589.pythonanywhere.com/';
      const response = await fetch(newurl);
      const data = await response.json();
      console.log(data);
      const length = data.length;
      console.log(length);
      const year = data.map( (x) => x.Year[0])
      const patient = data.map( (x) => x.Number_of_Patients)
      const provider = data.map( (x) => x.Number_of_Providers[0])
      console.log("Year", year,"patient", patient,"provider", provider);

        
      var patientData = patient;
      var providerData = provider;

      for (j = 0; j < length; j++) {
         var patientdata2013 = 0;
         var patientdata2014 = 0;
         var patientdata2015 = 0;
         var patientdata2016 = 0;
         console.log("YEAR(J)", year[j])
         if (year[j] === 2013) {
            patientdata2013 += parseInt(patientData[j]);
            console.log(patientData[j],  "data2013");
         }
         else if (year[j] === 2014) {
            patientdata2014 += patientData[j];
            console.log(patientData[j],  "data2014");
         }
         else if (year[j] === 2015) {
            patientdata2015 += (patientData[j]);
            console.log(patientData[j],  "data2015");
         }
         else {
            patientdata2016 += (patientData[j]);
            console.log(patientData[j],  "data2016");
         }
      };

      
      console.log("2013", patientdata2013);
      labels = [];
      values = [];
      for (i = 0; i < length; i++) {
         labels.push(data[i].Year);
         values.push(data[i].Number_of_Patients);
      }
      new Chart(document.getElementById("myChart"), {
         type: 'bar',
         data: {
            labels: ["2013"],
            datasets: [
               {
               label: "Number of Infected Patients",
               data: patientdata2013,
               backgroundColor: "red",
               width: 800,
               height: 600
               },
               {
                  label: "Number of Providers",
                  data: providerData,
                  backgroundColor: "blue",
                  width: 800,
                  height: 600
                  }
            ]
         },
         options: {
            mode: indexedDB,
            legend: { display: true },
            title: {
               display: true,
               text: 'Influenza Cases'
            }
         },
         scales: {
            xAxes: [{
               barWidth: 1,
              stacked: true,
              gridLines: {
                display: false,
              }
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: false,
              },
      }]},
})};