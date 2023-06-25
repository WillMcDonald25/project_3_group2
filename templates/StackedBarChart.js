getData();
   async function getData() {
      const response = await fetch('http://nonkik589.pythonanywhere.com/');
      const data = await response.json();
      console.log(data);
      const length = data.length;
      console.log(length);
      console.log(data.Year)
      data2013 = [];
      data2014 = [];
      data2015 = [];
      data2016 = [];
      for (j = 0; j < length; j++) {
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
            labels: [data2013.Year, data2014.Year, data2015.Year, data2016.Year],
            datasets: [
               {
               label: "Number of Infected Patients",
               data: [data2013.Number_of_Patients, data2014.Number_of_Patients, data2015.Number_of_Patients, data2016.Number_of_Patients],
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