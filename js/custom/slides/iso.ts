import * as d3 from "d3"
import { addOverlay, offset } from "../utils/svg/arrow"

const width = 1000
const height = 100 + offset
const data = [100, 200, 400, 800, 1600, 3200, 6400, 12800].reverse()

const id = "#ISOGraph" as const

export default function render() {
  document.querySelector(id)?.replaceChildren("")
  const svg = d3
    .select(id)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "white")

  // Add main Text
  svg
    .selectAll("text")
    .data(data)
    .join("text")
    .text(String)
    .attr("x", (_d, i) => (i + 0.5) * (width / data.length))
    .attr("y", offset + (height - offset) / 2)
    .attr("text-anchor", "middle")

  addOverlay(svg, width)
}
