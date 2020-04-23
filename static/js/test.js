url = `./samples.json`;

d3.json(url).then(function(data) {
//   console.log(data);
  var data_sample = data.samples;
  var id_list = data_sample.map(d => d.id);
  var metaData = data.metadata;

  data_99 = data_sample.filter(d => d.id === "940");

  var otu_id_99 = data_99[0].otu_ids;
  var otu_id_list_99 = otu_id_99.map(d => "OTU " + d);
  var sample_values_99 = data_99[0].sample_values;
  var otu_labels_99 = data_99[0].otu_labels;

  function init() {
    data = [{
        x: sample_values_99.slice(0,10).reverse() ,
        y: otu_id_list_99.slice(0,10).reverse(),
        text: otu_labels_99.slice(0, 10).reverse(),
        type: "bar",
        orientation: 'h'
      }];    
    Plotly.newPlot("bar", data);
  }
  
  d3.select("#selDataset")
      .selectAll('myOptions')
      .data(id_list)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; });
  
  // A function that update the chart
  function update(selectedGroup) {
    // Create new data with the selection?
    var dataFilter = data_sample.filter(d => d.id === selectedGroup);
    // noted the id in metaDate is a number (not string)
    var id_number = Number(selectedGroup);
    // console.log(id_number);
    var metadataFilter = metaData.filter(d => d.id === id_number);

    var otu_id_select = dataFilter[0].otu_ids;
    var otu_id_list_select = otu_id_select.map(d => "OTU " + d);
    var sample_values_select = dataFilter[0].sample_values;
    var otu_labels_select = dataFilter[0].otu_labels;
    // var size = otu_id_select.map(d => d);

    var dataSelect = [{
        x: sample_values_select.slice(0,10).reverse(),
        y: otu_id_list_select.slice(0,10).reverse(),
        text: otu_labels_select.slice(0, 10).reverse(),
        type: "bar",
        orientation: 'h'
      }];
    Plotly.newPlot("bar", dataSelect);

    var dataSelectB = [{
      type: "scatter",
      mode: "markers",
      y: sample_values_select,
      x: otu_id_select,
      text: otu_labels_select,
      marker: {
        size: sample_values_select,
        color: otu_id_select,
        colorscale: 'Electric'
      }
    }]; 
    Plotly.newPlot("bubble", dataSelectB);


    // select the container for paragraph
    var container = document.getElementById("sample-metadata");
    // clear the info within the container
    container.innerHTML = "";
    
    // extract the info from database
    var metaDataSelect = Object.entries(metadataFilter[0]);
    // change the format of info
    metaDataSelect = metaDataSelect.map(([key, value]) => `${key}:${value}`);
    // console.log(metaDataSelect);
    for (var item in metaDataSelect) {
      var paragraph = document.createElement("p");
      paragraph.innerHTML = metaDataSelect[item];
      container.appendChild(paragraph);
    }

    var dataSelectG = [{
      type: "pie",
      x: sample_values_select.slice(0,10).reverse(),
      y: otu_id_list_select.slice(0,10).reverse(),
      text: otu_labels_select.slice(0, 10).reverse(),
    }];

    Plotly.newPlot("gauge", dataSelectG);

  }

  // reference https://www.d3-graph-gallery.com/graph/line_select.html
  d3.select("#selDataset").on("change", function(d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value");
    // run the updateChart function with this selected option
    update(selectedOption);
  });
  init();
});