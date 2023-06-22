getData();
   async function getData() {
      const response = await fetch('http://127.0.0.1:5000/api');
      const data = await response.json();
      console.log(data);
      length = data.data.length;
      console.log(length);
      labels = [];
      values = [];
      for (i = 0; i < length; i++) {
         labels.push(data.data[i].Year);
         values.push(data.data[i].Number_of_Patients);
      }
      new Chart(document.getElementById("myChart"), {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [
               {
                  label: "Number of Infected Patients",
                  backgroundColor: ["#3a90cd",
                     "#8e5ea2",
                     "#3bba9f",
                     "#e8c3b9",
                     "#c45850",
                     "#CD9C5C",
                     "#40E0D0"],
                  data: values,
                  width: 800,
                  height: 600
               }
            ]
         },
         options: {
            legend: { display: false },
            title: {
               display: true,
               text: 'U.S population'
            }
         }
      })};

      <div>
            <canvas id="myChart"></canvas>
          </div>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script type="text/javascript" src="StackedBarChart.js"></script>