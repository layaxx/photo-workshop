import * as d3 from "d3"

const width = 1000
const height = (width / 3) * 2

const id = "#thirdsGraph" as const

export default function initialRender() {
  document.querySelector(id)?.replaceChildren("")
  const svg = d3
    .select(id)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "white")

  // Render Grid
  const groups = svg
    .append("g")
    .attr("id", "grid")
    .selectAll("g")
    .data(d3.range(2))
    .enter()
    .append("g")

  groups
    .append("line")
    .attr("class", "vert")
    .attr("x1", (d) => (d + 1) * (width / 3))
    .attr("x2", (d) => (d + 1) * (width / 3))
    .attr("y1", 0)
    .attr("y2", height)
    .style("stroke", "#adadad")
    .style("stroke-width", "5px")

  groups
    .append("line")
    .attr("x1", 0)
    .attr("x2", width)
    .attr("y1", (d) => (d + 1) * (height / 3))
    .attr("y2", (d) => (d + 1) * (height / 3))
    .style("stroke", "#adadad")
    .style("stroke-width", "5px")

  // circles
  svg
    .append("g")
    .attr("id", "circles")
    .selectAll("circle")
    .data(
      d3.range(4).map((index) => ({ x: Math.floor(index / 2), y: index % 2 }))
    )
    .enter()
    .append("g")
    .append("circle")
    .attr("cx", (d) => (d.x + 1) * (width / 3))
    .attr("cy", (d) => (d.y + 1) * (height / 3))
    .attr("r", 0)
    .attr("fill", "none")
    .style("stroke", "#adadad")
    .style("stroke-width", "5px")
}

export function transition() {
  // Add Animation
  d3.select(id + " svg")
    .selectAll("circle")
    .transition()
    .duration(1000)
    .attr("r", 30)
}

export function transitionVertical() {
  const newWidth = (height / 3) * 2
  // Add Animation
  d3.select(id + " svg")
    .transition()
    .duration(1000)
    .attr("width", newWidth)

  d3.select(id + " svg")
    .selectAll("circle")
    .data(
      d3.range(4).map((index) => ({ x: Math.floor(index / 2), y: index % 2 }))
    )
    .transition()
    .duration(1000)
    .attr("cx", (d) => (d.x + 1) * (newWidth / 3))
    .attr("r", 30)

  d3.select(id + " svg")
    .selectAll("line.vert")
    .data(d3.range(2))
    .transition()
    .duration(1000)
    .attr("x1", (d) => (d + 1) * (newWidth / 3))
    .attr("x2", (d) => (d + 1) * (newWidth / 3))
}

export function transitionHorizontal() {
  // Add Animation
  d3.select(id + " svg")
    .transition()
    .duration(1000)
    .attr("width", width)
    .attr("height", height)

  d3.select(id + " svg")
    .selectAll("circle")
    .data(
      d3.range(4).map((index) => ({ x: Math.floor(index / 2), y: index % 2 }))
    )
    .transition()
    .duration(1000)
    .attr("cx", (d) => (d.x + 1) * (width / 3))
    .attr("r", 30)

  d3.select(id + " svg")
    .selectAll("line.vert")
    .data(d3.range(2))
    .transition()
    .duration(1000)
    .attr("x1", (d) => (d + 1) * (width / 3))
    .attr("x2", (d) => (d + 1) * (width / 3))
}
