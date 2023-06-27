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
      newLabels = year;
      patientData = patient;
      providerData = provider;
      
      
      patientdata2013 = 0;
      patientdata2014 = 0;
      patientdata2015 = 0;
      patientdata2016 = 0;

      providerdata2013 = 0;
      providerdata2014 = 0;
      providerdata2015 = 0;
      providerdata2016 = 0;
      
      
      for (j = 0; j < length; j++) {
         if (year[j] === 2013 && patientData[j]!="X") {
            patientdata2013 += parseInt(patientData[j]);
         }
         else if (year[j] === 2014 && patientData[j]!="X") {
            patientdata2014 += parseInt(patientData[j]);
         }
         else if (year[j] === 2015 && patientData[j]!="X") {
            patientdata2015 += parseInt(patientData[j]);
         }
         else { if (patientData[j]!="X"){
            patientdata2016 += parseInt(patientData[j]);}}

            if (year[j] === 2013 && providerData[j]!="X") {
               providerdata2013 += parseInt(providerData[j]);
            }
            else if (year[j] === 2014 && providerData[j]!="X") {
               providerdata2014 += parseInt(providerData[j]);
            }
            else if (year[j] === 2015 && providerData[j]!="X") {
               providerdata2015 += parseInt(providerData[j]);
            }
            else { if (patientData[j]!="X"){
               providerdata2016 += parseInt(providerData[j]);}}
      };
      totalData = [];
      totalData.push(patientdata2013, patientdata2014, patientdata2015, patientdata2016);
      console.log("Total Data", totalData);
      console.log("2013", patientdata2013);
      
      new Chart(document.getElementById("myChart"), {
         type: 'bar',
         data: {
            labels: [2013, 2014, 2015, 2016],
            datasets: [
               {
               label: "Number of Infected Patients per Year",
               data: [patientdata2013, patientdata2014, patientdata2015, patientdata2016],
               backgroundColor: "red"
               },
               {
                  label: "Number of Providers per Year",
                  data: [providerdata2013, providerdata2014, providerdata2015, providerdata2016],
                  backgroundColor: "blue"
                  }
            ]
         },
         options: {
            mode: indexedDB,
            legend: { display: true },
            title: "Bar Chart"
         },
        
})};

