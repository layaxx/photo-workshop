import * as d3 from "d3"
import { addOverlay, offset } from "../utils/svg/arrow"

const width = 1000
const height = 300 + offset

const data = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16]

const id = "#apertureGraph" as const

export default function initialRender() {
  document.querySelector(id)?.replaceChildren("")
  const svg = d3
    .select(id)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "white")

  // Add Main Circles
  svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", getXValue)
    .attr("cy", offset + (height - offset) / 2)
    .attr("r", getRadius)

  // Add Text
  svg
    .selectAll("text")
    .data(data)
    .join("text")
    .text((d) => "f/" + String(d))
    .attr("x", getXValue)
    .attr("y", height)
    .attr("text-anchor", "middle")

  // Add Animation
  svg
    .selectAll("circle.shrink")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "shrink")
    .attr("cx", getXValue)
    .attr("cy", offset + (height - offset) / 2)
    .attr("r", getRadius(data[0]))

  addOverlay(svg, width)
}
function getXValue(_v: any, indexOuter: number) {
  return (
    getRadius(data[0]) +
    getDistance(data.filter((_, index) => index < indexOuter))
  )
}
function getRadius(d: number) {
  return (1 / d) * 168
}
function getDiameter(d: number) {
  return getRadius(d) * 2
}
function getDistance(array: number[]) {
  const padding = 15
  return array.reduce((acc, curr) => acc + padding + getDiameter(curr), 0)
}

export function transition() {
  d3.select(id + " svg")
    .selectAll(".shrink")
    .transition()
    .duration(1000)
    .ease(d3.easeQuad)
    .attr("r", 0)
}
