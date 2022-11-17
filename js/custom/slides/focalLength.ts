import * as d3 from "d3"

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

const xScale = d3.scaleLinear([0, 250], [0, width - padding.x])
const yScale = d3.scaleLinear([0, data.length], [0, height - padding.y])
const id = "#focalDistanceGraph" as const

export default function initialRender() {
  document.querySelector(id)?.replaceChildren("")
  const svg = d3
    .select(id)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "white")

  // Render Grid
  svg
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
  const xAxis = d3
    .axisBottom(xScale)
    .tickValues([18, 35, 50, 70, 100, 150, 200])
  svg
    .append("g")
    .attr("transform", `translate(${offset.x},480)`)
    .attr("id", "xaxis")
    .style("font-size", "35px")
    .call(xAxis)
  svg.append("text").text("wide").attr("x", xScale(10)).attr("y", height)
  svg.append("text").text("normal").attr("x", xScale(40)).attr("y", height)
  svg.append("text").text("tele").attr("x", xScale(135)).attr("y", height)
  // Render Chart
  svg
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
}

export function transition() {
  // Add Animation
  d3.select(id + " svg")
    .selectAll("rect")
    .data(ranges)
    .transition()
    .duration(1000)
    .attr("width", (d) => xScale(d[1]) - xScale(d[0]))
}
