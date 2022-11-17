import * as d3 from "d3"
import { addOverlay, offset } from "../utils/svg/arrow"

const width = 1000
const height = 100 + offset

const data = [
  1 / 1000,
  1 / 500,
  1 / 250,
  1 / 125,
  1 / 60,
  1 / 30,
  1 / 15,
  1 / 8,
  1 / 4,
  1 / 2,
  1,
].reverse()

const id = "#shutterSpeedGraph" as const

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
    .text((d) => `1/${1 / d}`)
    .attr("x", (_d, i) => i * (width / data.length))
    .attr("y", offset + (height - offset) / 2)

  addOverlay(svg, width)
}
