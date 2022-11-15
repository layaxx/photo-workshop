const width = 1000
const height = 550
const padding = { x: 50, y: 50 }
const offset = { x: 10, y: 0 }
const data = [
  { name: "Wide-Angle", range: [10, 18] },
  { name: "Kit APSC", range: [18, 55] },
  { name: "Kit Full", range: [27, 70] },
  { name: "Telezoom", range: [70, 200] },
  { name: "35mm", range: [34, 36] },
  { name: "50mm", range: [49, 51] },
  { name: "100mm", range: [99, 101] },
]
const ranges = data.map(({ range }) => range)

var xScale = d3.scaleLinear([0, 250], [0, width - padding.x])
var yScale = d3.scaleLinear([0, data.length], [0, height - padding.y])

function drawFocalLengthsGraph() {
  document.querySelector("#focalDistanceGraph").replaceChildren("")
  var canvas = d3
    .select("#focalDistanceGraph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "white")

  // Render Grid
  canvas
    .append("g")
    .attr("id", "grid")
    .attr("transform", `translate(${offset.x},10)`)
    .selectAll("line")
    .data(d3.range(25))
    .enter()
    .append("line")
    .attr("x1", (_d, i) => i * xScale(10))
    .attr("x2", (_d, i) => i * xScale(10))
    .attr("y1", 0)
    .attr("y2", height - padding.y - 30)
    .style("stroke", "#adadad")
    .style("stroke-width", "1px")

  // Render X Axis
  var xAxis = d3.axisBottom(xScale).tickValues([18, 35, 50, 70, 100, 150, 200])
  canvas
    .append("g")
    .attr("transform", `translate(${offset.x},480)`)
    .attr("id", "xaxis")
    .style("font-size", "35px")
    .call(xAxis)

  // Render Chart
  canvas
    .append("g")
    .attr("transform", `translate(${offset.x},0)`)
    .attr("id", "bars")
    .selectAll("rect")
    .data(ranges)
    .enter()
    .append("rect")
    .attr("height", 19)
    .attr("x", (d) => xScale(d[0]))
    .attr("y", (_d, i) => yScale(i) + 20)
    .style("fill", "white")
    .attr("width", 0)

  // Add Animation
  d3.select("svg")
    .selectAll("rect")
    .data(ranges)
    .transition()
    .duration(1000)
    .attr("width", (d) => xScale(d[1]) - xScale(d[0]))
}
