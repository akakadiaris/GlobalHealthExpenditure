// add your JavaScript/D3 to this file

// Create svg and initial bars

  const w = 800;
  const h = 500;
  const margin = {top: 0, right: 25, bottom: 25,
      left: 50};
  const innerWidth = w - margin.left - margin.right;
  const innerHeight = h - margin.top - margin.bottom;

  // datasets
  const datasetGlobal = [
  { government: 379, out_of_pocket: 149, prepaid_private: 127 },
  { government: 383, out_of_pocket: 151, prepaid_private: 130 },
  { government: 390, out_of_pocket: 155, prepaid_private: 136 },
  { government: 399, out_of_pocket: 160, prepaid_private: 142 },
  { government: 408, out_of_pocket: 165, prepaid_private: 147 },
  { government: 422, out_of_pocket: 171, prepaid_private: 152 },
  { government: 440, out_of_pocket: 178, prepaid_private: 157 },
  { government: 458, out_of_pocket: 187, prepaid_private: 163 },
  { government: 475, out_of_pocket: 196, prepaid_private: 168 },
  { government: 488, out_of_pocket: 202, prepaid_private: 172 },
  { government: 503, out_of_pocket: 207, prepaid_private: 176 },
  { government: 516, out_of_pocket: 210, prepaid_private: 179 },
  { government: 530, out_of_pocket: 213, prepaid_private: 181 },
  { government: 553, out_of_pocket: 215, prepaid_private: 184 },
  { government: 578, out_of_pocket: 219, prepaid_private: 186 },
  { government: 591, out_of_pocket: 220, prepaid_private: 188 },
  { government: 602, out_of_pocket: 221, prepaid_private: 190 },
  { government: 611, out_of_pocket: 225, prepaid_private: 193 },
  { government: 616, out_of_pocket: 228, prepaid_private: 195 },
  { government: 649, out_of_pocket: 223, prepaid_private: 199 },
  { government: 662, out_of_pocket: 231, prepaid_private: 203 },
  { government: 673, out_of_pocket: 239, prepaid_private: 207 },
  { government: 682, out_of_pocket: 245, prepaid_private: 210 },
  { government: 693, out_of_pocket: 249, prepaid_private: 212 },
  { government: 708, out_of_pocket: 254, prepaid_private: 215 }
]

  const datasetCentralEurope = [
  { government: 193, out_of_pocket: 11, prepaid_private: 72 },
  { government: 193, out_of_pocket: 12, prepaid_private: 74 },
  { government: 197, out_of_pocket: 12, prepaid_private: 79 },
  { government: 193, out_of_pocket: 12, prepaid_private: 82 },
  { government: 189, out_of_pocket: 13, prepaid_private: 84 },
  { government: 195, out_of_pocket: 14, prepaid_private: 88 },
  { government: 206, out_of_pocket: 16, prepaid_private: 94 },
  { government: 224, out_of_pocket: 18, prepaid_private: 102 },
  { government: 239, out_of_pocket: 18, prepaid_private: 109 },
  { government: 248, out_of_pocket: 17, prepaid_private: 115 },
  { government: 265, out_of_pocket: 18, prepaid_private: 121 },
  { government: 283, out_of_pocket: 18, prepaid_private: 127 },
  { government: 308, out_of_pocket: 19, prepaid_private: 136 },
  { government: 328, out_of_pocket: 19, prepaid_private: 146 },
  { government: 335, out_of_pocket: 18, prepaid_private: 152 },
  { government: 333, out_of_pocket: 17, prepaid_private: 154 },
  { government: 334, out_of_pocket: 17, prepaid_private: 157 },
  { government: 345, out_of_pocket: 18, prepaid_private: 164 },
  { government: 351, out_of_pocket: 19, prepaid_private: 170 },
  { government: 357, out_of_pocket: 19, prepaid_private: 178 },
  { government: 360, out_of_pocket: 20, prepaid_private: 185 },
  { government: 364, out_of_pocket: 21, prepaid_private: 192 },
  { government: 376, out_of_pocket: 22, prepaid_private: 197 },
  { government: 394, out_of_pocket: 23, prepaid_private: 199 },
  { government: 420, out_of_pocket: 24, prepaid_private: 204 }
]

  const datasetLatinAmerica = [
  { government: 163, out_of_pocket: 47, prepaid_private: 153 },
  { government: 169, out_of_pocket: 48, prepaid_private: 154 },
  { government: 177, out_of_pocket: 49, prepaid_private: 155 },
  { government: 182, out_of_pocket: 51, prepaid_private: 156 },
  { government: 184, out_of_pocket: 52, prepaid_private: 157 },
  { government: 184, out_of_pocket: 52, prepaid_private: 161 },
  { government: 190, out_of_pocket: 54, prepaid_private: 167 },
  { government: 195, out_of_pocket: 55, prepaid_private: 171 },
  { government: 201, out_of_pocket: 56, prepaid_private: 175 },
  { government: 204, out_of_pocket: 57, prepaid_private: 177 },
  { government: 214, out_of_pocket: 61, prepaid_private: 181 },
  { government: 228, out_of_pocket: 66, prepaid_private: 184 },
  { government: 237, out_of_pocket: 72, prepaid_private: 184 },
  { government: 252, out_of_pocket: 77, prepaid_private: 184 },
  { government: 252, out_of_pocket: 80, prepaid_private: 179 },
  { government: 264, out_of_pocket: 84, prepaid_private: 176 },
  { government: 271, out_of_pocket: 88, prepaid_private: 174 },
  { government: 277, out_of_pocket: 92, prepaid_private: 173 },
  { government: 284, out_of_pocket: 97, prepaid_private: 171 },
  { government: 294, out_of_pocket: 102, prepaid_private: 171 },
  { government: 293, out_of_pocket: 104, prepaid_private: 166 },
  { government: 289, out_of_pocket: 104, prepaid_private: 163 },
  { government: 289, out_of_pocket: 105, prepaid_private: 162 },
  { government: 293, out_of_pocket: 108, prepaid_private: 163 },
  { government: 289, out_of_pocket: 110, prepaid_private: 163 }
]

  const datasetNorthAfrica = [
  { government: 102, out_of_pocket: 12, prepaid_private: 92 },
  { government: 106, out_of_pocket: 12, prepaid_private: 94 },
  { government: 113, out_of_pocket: 13, prepaid_private: 98 },
  { government: 121, out_of_pocket: 14, prepaid_private: 103 },
  { government: 123, out_of_pocket: 14, prepaid_private: 105 },
  { government: 129, out_of_pocket: 16, prepaid_private: 107 },
  { government: 139, out_of_pocket: 17, prepaid_private: 110 },
  { government: 144, out_of_pocket: 18, prepaid_private: 113 },
  { government: 146, out_of_pocket: 19, prepaid_private: 116 },
  { government: 148, out_of_pocket: 20, prepaid_private: 118 },
  { government: 152, out_of_pocket: 21, prepaid_private: 123 },
  { government: 161, out_of_pocket: 21, prepaid_private: 127 },
  { government: 162, out_of_pocket: 22, prepaid_private: 129 },
  { government: 173, out_of_pocket: 24, prepaid_private: 136 },
  { government: 187, out_of_pocket: 28, prepaid_private: 143 },
  { government: 185, out_of_pocket: 29, prepaid_private: 146 },
  { government: 195, out_of_pocket: 32, prepaid_private: 148 },
  { government: 196, out_of_pocket: 33, prepaid_private: 140 },
  { government: 208, out_of_pocket: 35, prepaid_private: 138 },
  { government: 233, out_of_pocket: 38, prepaid_private: 140 },
  { government: 253, out_of_pocket: 41, prepaid_private: 146 },
  { government: 265, out_of_pocket: 44, prepaid_private: 152 },
  { government: 265, out_of_pocket: 53, prepaid_private: 151 },
  { government: 259, out_of_pocket: 56, prepaid_private: 144 },
  { government: 253, out_of_pocket: 55, prepaid_private: 138 }
]

  const datasetSouthAsia = [
  { government: 6, out_of_pocket: 1, prepaid_private: 20 },
  { government: 6, out_of_pocket: 1, prepaid_private: 20 },
  { government: 6, out_of_pocket: 1, prepaid_private: 21 },
  { government: 6, out_of_pocket: 1, prepaid_private: 21 },
  { government: 6, out_of_pocket: 2, prepaid_private: 22 },
  { government: 7, out_of_pocket: 2, prepaid_private: 22 },
  { government: 7, out_of_pocket: 2, prepaid_private: 23 },
  { government: 7, out_of_pocket: 2, prepaid_private: 24 },
  { government: 7, out_of_pocket: 2, prepaid_private: 24 },
  { government: 7, out_of_pocket: 2, prepaid_private: 25 },
  { government: 7, out_of_pocket: 2, prepaid_private: 26 },
  { government: 8, out_of_pocket: 2, prepaid_private: 27 },
  { government: 9, out_of_pocket: 2, prepaid_private: 27 },
  { government: 9, out_of_pocket: 3, prepaid_private: 28 },
  { government: 10, out_of_pocket: 3, prepaid_private: 29 },
  { government: 11, out_of_pocket: 3, prepaid_private: 29 },
  { government: 12, out_of_pocket: 3, prepaid_private: 31 },
  { government: 13, out_of_pocket: 4, prepaid_private: 33 },
  { government: 13, out_of_pocket: 4, prepaid_private: 35 },
  { government: 14, out_of_pocket: 4, prepaid_private: 37 },
  { government: 15, out_of_pocket: 5, prepaid_private: 38 },
  { government: 16, out_of_pocket: 5, prepaid_private: 37 },
  { government: 17, out_of_pocket: 6, prepaid_private: 36 },
  { government: 18, out_of_pocket: 6, prepaid_private: 36 },
  { government: 20, out_of_pocket: 7, prepaid_private: 36 }
]

  const datasetSouthEastAsia = [
  { government: 25, out_of_pocket: 12, prepaid_private: 32 },
  { government: 26, out_of_pocket: 13, prepaid_private: 36 },
  { government: 28, out_of_pocket: 14, prepaid_private: 40 },
  { government: 29, out_of_pocket: 14, prepaid_private: 44 },
  { government: 31, out_of_pocket: 14, prepaid_private: 50 },
  { government: 33, out_of_pocket: 14, prepaid_private: 54 },
  { government: 35, out_of_pocket: 13, prepaid_private: 59 },
  { government: 39, out_of_pocket: 13, prepaid_private: 64 },
  { government: 43, out_of_pocket: 13, prepaid_private: 68 },
  { government: 48, out_of_pocket: 13, prepaid_private: 71 },
  { government: 54, out_of_pocket: 13, prepaid_private: 75 },
  { government: 61, out_of_pocket: 14, prepaid_private: 77 },
  { government: 69, out_of_pocket: 14, prepaid_private: 78 },
  { government: 85, out_of_pocket: 15, prepaid_private: 84 },
  { government: 103, out_of_pocket: 16, prepaid_private: 89 },
  { government: 115, out_of_pocket: 16, prepaid_private: 93 },
  { government: 134, out_of_pocket: 17, prepaid_private: 100 },
  { government: 151, out_of_pocket: 18, prepaid_private: 107 },
  { government: 167, out_of_pocket: 19, prepaid_private: 113 },
  { government: 182, out_of_pocket: 20, prepaid_private: 118 },
  { government: 203, out_of_pocket: 23, prepaid_private: 126 },
  { government: 215, out_of_pocket: 26, prepaid_private: 134 },
  { government: 226, out_of_pocket: 30, prepaid_private: 142 },
  { government: 241, out_of_pocket: 35, prepaid_private: 150 },
  { government: 259, out_of_pocket: 41, prepaid_private: 160 }
]

  const datasetSubSaharan = [
  { government: 21, out_of_pocket: 16, prepaid_private: 23 },
  { government: 22, out_of_pocket: 16, prepaid_private: 23 },
  { government: 22, out_of_pocket: 17, prepaid_private: 23 },
  { government: 21, out_of_pocket: 17, prepaid_private: 22 },
  { government: 20, out_of_pocket: 17, prepaid_private: 22 },
  { government: 20, out_of_pocket: 17, prepaid_private: 21 },
  { government: 20, out_of_pocket: 17, prepaid_private: 22 },
  { government: 20, out_of_pocket: 17, prepaid_private: 22 },
  { government: 22, out_of_pocket: 16, prepaid_private: 24 },
  { government: 22, out_of_pocket: 15, prepaid_private: 25 },
  { government: 24, out_of_pocket: 15, prepaid_private: 26 },
  { government: 25, out_of_pocket: 14, prepaid_private: 25 },
  { government: 27, out_of_pocket: 14, prepaid_private: 26 },
  { government: 28, out_of_pocket: 15, prepaid_private: 25 },
  { government: 29, out_of_pocket: 15, prepaid_private: 25 },
  { government: 30, out_of_pocket: 15, prepaid_private: 25 },
  { government: 30, out_of_pocket: 15, prepaid_private: 25 },
  { government: 31, out_of_pocket: 16, prepaid_private: 25 },
  { government: 32, out_of_pocket: 16, prepaid_private: 25 },
  { government: 32, out_of_pocket: 17, prepaid_private: 26 },
  { government: 33, out_of_pocket: 17, prepaid_private: 26 },
  { government: 32, out_of_pocket: 16, prepaid_private: 25 },
  { government: 33, out_of_pocket: 16, prepaid_private: 25 },
  { government: 32, out_of_pocket: 15, prepaid_private: 24 },
  { government: 33, out_of_pocket: 15, prepaid_private: 23 }
]

  // set up stack method
  const stack = d3.stack()
        .keys([ "government", "out_of_pocket", "prepaid_private" ])
        .order(d3.stackOrderDescending);

  // data, stacked
  const series = stack(datasetGlobal);

  // Create years 1995 to 2019 for the x-scale
  const startYear = 1995;
  const endYear = 2019;
  const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

   // Set up scales
  const xScale = d3.scaleBand()
      .domain(years.map(d => d))
      .range([0, innerWidth])
      .paddingInner(0.1);

  const yScale = d3.scaleLinear()
      .domain([0,	d3.max(datasetGlobal, d => d.government + d.out_of_pocket + d.prepaid_private)])
      .range([innerHeight, 0]);

  const xAxis = d3.axisBottom()
      .scale(xScale);

  const yAxis = d3.axisLeft()
      .scale(yScale);

  // use one of the built-in d3 color scales
  const colors = d3.scaleOrdinal(d3.schemeSet2);

  // add svg
  const svg = d3.select("#plot")
    .append("svg")
      .attr("width", w)
      .attr("height", h);

  // add background rectangle
  svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", w)
      .attr("height", h)
      .attr("fill", "aliceblue");

  // add a group for each row of data
  const groups = svg.selectAll("g")
    .data(series)
    .enter()
    .append("g")
    .style("fill", (d, i) => colors(i))
    .attr("transform", `translate (${margin.left}, ${margin.top})`);

  // add a rect for each data value
  const rects = groups.selectAll("rect")
    .data(d => d)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(years[i])) // Use the year value from the 'years' array
    .attr("y", d => yScale(d[1]))
    .attr("height", d => yScale(d[0]) - yScale(d[1]))
    .attr("width", xScale.bandwidth());

  // add axes
  svg.append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
      .call(xAxis);

  svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);

  // List of regions
  var allGroup = ["Global", "Central Europe, Eastern Europe, and Central Asia", "Latin America and Caribbean", "North Africa and Middle East", "South Asia", "Southeast Asia, East Asia, and Oceania", "Sub-Saharan Africa"];

  // add the options for regions to the button
  d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

  // Update Bar Chart Function
  function update(selectedGroup) {

    // Choose the appropriate dataset based on the selected group
    let selectedDataset;
    switch (selectedGroup) {
        case 'Global':
            selectedDataset = datasetGlobal;
            break;
        case 'Central Europe, Eastern Europe, and Central Asia':
            selectedDataset = datasetCentralEurope;
            break
        case 'Latin America and Caribbean':
            selectedDataset = datasetLatinAmerica;
            break;
        case 'North Africa and Middle East':
            selectedDataset = datasetNorthAfrica;
            break;
        case 'South Asia':
            selectedDataset = datasetSouthAsia;
            break;
        case 'Southeast Asia, East Asia, and Oceania':
            selectedDataset = datasetSouthEastAsia;
            break;
        case 'Sub-Saharan Africa':
            selectedDataset = datasetSubSaharan;
            break;
        default:
            console.error('Invalid selectedGroup:', selectedGroup);
            return;
        console.log(selectedDataset)
    }

    // Set up stack method
    const stackmethod = d3.stack()
        .keys(["government", "out_of_pocket", "prepaid_private"])
        .order(d3.stackOrderDescending);

    // Data, stacked
    const new_series = stackmethod(selectedDataset);

    // Set up scales
    const xScale = d3.scaleBand()
        .domain(years.map(d => d))
        .range([0, innerWidth])
        .paddingInner(0.1);

    svg.select(".yAxis")
        .remove()

    yScale
      .domain([0,	d3.max(selectedDataset, d => d.government + d.out_of_pocket + d.prepaid_private)])
      .range([innerHeight, 0]);

    const xAxis = d3.axisBottom()
        .scale(xScale);

    const yAxis = d3.axisLeft()
        .scale(yScale);

    // Update the existing y-axis
    svg.select(".yAxis")
        .transition()
        .duration(2000)
        .call(yAxis.scale(yScale));


    // Update the rectangles based on the series data
    // append new series data to the
    const new_groups = svg.selectAll("g")
        .data(new_series)

    console.log(new_groups)

    // Update
    new_groups.selectAll("rect")
      .data(d => d)
      .transition()
      .duration(2000)
      .attr("x", (d, i) => xScale(years[i])) // Use the year value from the 'years' array
      .attr("y", d => yScale(d[1]))
      .attr("height", d => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth());

    // add axes
    svg.append("g")
        .attr("class", "xAxis")
        .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
        .call(xAxis);

    svg.append("g")
      .attr("class", "yAxis")
      .attr("transform", `translate (${margin.left}, ${margin.top})`)
      .call(yAxis);

  }

  // When button clicked run the updateChart Function
  d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        console.log(selectedOption)
        // run the updateChart function with this selected option
        update(selectedOption)
    })
