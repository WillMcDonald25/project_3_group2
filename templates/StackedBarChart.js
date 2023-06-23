getData();
   async function getData() {
      const response = await fetch('http://nonkik589.pythonanywhere.com/');
      const data = await response.json();
      console.log(data);
      const length = data.length;
      console.log(length);
      const year = data.Year;
      console.log(year)
      data2013 = [];
      data2014 = [];
      data2015 = [];
      data2016 = [];
      for (j = 0; j < year; j++) {
         if (data.Year == 2013) {
            data2013.push(data[j].Number_of_Patients)
         }
         else if (data.Year == 2014) {
            data2014.push(data[j].Number_of_Patients)
         }
         else if (data.Year == 2015) {
            data2015.push(data[j].Number_of_Patients)
         }
         else if (data.Year == 2016) {
            data2016.push(data[j].Number_of_Patients)
         }
      };

      values = [];
      for (i = 0; i < length; i++) {
         values.push(data[i].Number_of_Patients);
      }
      new Chart(document.getElementById("myChart"), {
         type: 'bar',
         data: {
            labels: [2013,2014,2015,2016],
            datasets: [
               {
               label: "Number of Infected Patients",
               data: data2013,data2014,data2015,data2016,
               backgroundColor: "red",
               width: 800,
               height: 600
               }
            ]
         },
         options: {
            legend: { display: true },
            title: {
               display: true,
               text: 'Influenza Cases'
            }
         },
         scales: {
            xAxes: [{
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