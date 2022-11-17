export function addOverlay(
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>,
  width: number
) {
  const arrowSize = 20
  const padding = { x: 20, y: offset - arrowSize * 2 }
  const strokeWidth = 5
  const color = "white"
  // Main line
  svg
    .append("line")
    .attr("x1", padding.x)
    .attr("x2", width - padding.x)
    .attr("y1", padding.y)
    .attr("y2", padding.y)
    .style("stroke-width", strokeWidth)
    .style("stroke", color)

  // left arrow
  svg
    .append("line")
    .attr("x1", padding.x)
    .attr("x2", padding.x + arrowSize)
    .attr("y1", padding.y)
    .attr("y2", padding.y - arrowSize)
    .style("stroke-width", strokeWidth)
    .style("stroke", color)
  svg
    .append("line")
    .attr("x1", padding.x)
    .attr("x2", padding.x + arrowSize)
    .attr("y1", padding.y)
    .attr("y2", padding.y + arrowSize)
    .style("stroke-width", strokeWidth)
    .style("stroke", color)

  // right arrow
  svg
    .append("line")
    .attr("x1", width - padding.x)
    .attr("x2", width - padding.x - arrowSize)
    .attr("y1", padding.y)
    .attr("y2", padding.y - arrowSize)
    .style("stroke-width", strokeWidth)
    .style("stroke", color)
  svg
    .append("line")
    .attr("x1", width - padding.x)
    .attr("x2", width - padding.x - arrowSize)
    .attr("y1", padding.y)
    .attr("y2", padding.y + arrowSize)
    .style("stroke-width", strokeWidth)
    .style("stroke", color)

  svg
    .append("text")
    .text("heller/brighter")
    .attr("x", padding.x)
    .attr("y", arrowSize)

  svg
    .append("text")
    .text("dunkler/darker")
    .attr("x", width - padding.x)
    .attr("y", arrowSize)
    .attr("text-anchor", "end")
}

export const offset = 100
