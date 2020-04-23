// Please see test.js
// Please see test.js
// Please see test.js

// url = `samples.json`;

// d3.json(url).then(function(data) {
//   console.log(data);
//   // console.log(Object.keys(data));
//   // console.log(Object.values(data).slice(2));

//   var data_sample = data.samples;
//   console.log(data_sample);
 
//   var id = "940";
//   data_1 = data_sample.filter(d => d.id === id);
//   console.log(data_1);

//   var otu_ids = data_1[0].otu_ids;
//   var otu_id_list = otu_ids.map(d => "OTU " + d);
//   var sample_values = data_1[0].sample_values;
//   var otu_labels = data_1[0].otu_labels;

//   console.log(otu_id_list);
//   console.log(sample_values);
//   console.log(otu_labels);

//   var trace1 = [{
//     x: sample_values.slice(0,10),
//     y: otu_id_list.slice(0,10),
//     text: otu_labels.slice(0, 10),
//     type: "bar",
//     orientation: 'h'
//   }];

//   Plotly.newPlot("bar-plot", trace1);

  


  // // test if the data and function workd on vertain id
  // select_sample = data_sample_1.filter((d) => {
  //   return d.id === "940";
  // });
  // console.log(select_sample);

  // select_sample.forEach((d) => {
  //   d.otu_ids = "otu_id " + d.otu_ids;
  // });

  // var otu_ids = select_sample.map((d) => {
  //   return (d.otu_ids);
  // });
  // var otu_ids_10 = otu_ids[0].slice(0,10);
  // console.log(otu_ids);
  // console.log(otu_ids_10);
  // var sample_values = select_sample.map(d => d.sample_values);
  // var sample_values_10 = sample_values[0].slice(0,10);
  // console.log(sample_values_10);

  // var otu_labels = select_sample.map(d => d.otu_labels);
  // var otu_labels_10 = otu_labels[0].slice(0,10);
  // console.log(otu_labels_10);


  // var trace1 = {
  //   y: sample_values_10,
  //   x: [1,2,3,4,5,6,7,8,9,10],
  //   type: "Bar"
  // };

  // var data = [trace1];

  // // Define the plot layout
  // // var layout = {
  // //   title: "xxx",
  // //   xaxis: { title: "xxx" },
  // //   yaxis: { title: "xxx" }
  // // };

  // // Plot the chart to a div tag with id "bar-plot"
  // Plotly.newPlot("bar-plot", data);

});
