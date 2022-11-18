import * as d3 from "d3"

const width = 1000
const height = 100

// https://andi-siess.de/rgb-to-color-temperature/
const data = [
  { value: 1000, color: "rgb(255, 56, 0)" },
  { value: 1100, color: "rgb(255, 71, 0)" },
  { value: 1200, color: "rgb(255, 83, 0)" },
  { value: 1300, color: "rgb(255, 93, 0)" },
  { value: 1400, color: "rgb(255, 101, 0)" },
  { value: 1500, color: "rgb(255, 109, 0)" },
  { value: 1600, color: "rgb(255, 115, 0)" },
  { value: 1700, color: "rgb(255, 121, 0)" },
  { value: 1800, color: "rgb(255, 126, 0)" },
  { value: 1900, color: "rgb(255, 131, 0)" },
  { value: 2000, color: "rgb(255, 138, 18)" },
  { value: 2100, color: "rgb(255, 142, 33)" },
  { value: 2200, color: "rgb(255, 147, 44)" },
  { value: 2300, color: "rgb(255, 152, 54)" },
  { value: 2400, color: "rgb(255, 157, 63)" },
  { value: 2500, color: "rgb(255, 161, 72)" },
  { value: 2600, color: "rgb(255, 165, 79)" },
  { value: 2700, color: "rgb(255, 169, 87)" },
  { value: 2800, color: "rgb(255, 173, 94)" },
  { value: 2900, color: "rgb(255, 177, 101)" },
  { value: 3000, color: "rgb(255, 180, 107)" },
  { value: 3100, color: "rgb(255, 184, 114)" },
  { value: 3200, color: "rgb(255, 187, 120)" },
  { value: 3300, color: "rgb(255, 190, 126)" },
  { value: 3400, color: "rgb(255, 193, 132)" },
  { value: 3500, color: "rgb(255, 196, 137)" },
  { value: 3600, color: "rgb(255, 199, 143)" },
  { value: 3700, color: "rgb(255, 201, 148)" },
  { value: 3800, color: "rgb(255, 204, 153)" },
  { value: 3900, color: "rgb(255, 206, 159)" },
  { value: 4000, color: "rgb(255, 209, 163)" },
  { value: 4100, color: "rgb(255, 211, 168)" },
  { value: 4200, color: "rgb(255, 213, 173)" },
  { value: 4300, color: "rgb(255, 215, 177)" },
  { value: 4400, color: "rgb(255, 217, 182)" },
  { value: 4500, color: "rgb(255, 219, 186)" },
  { value: 4600, color: "rgb(255, 221, 190)" },
  { value: 4700, color: "rgb(255, 223, 194)" },
  { value: 4800, color: "rgb(255, 225, 198)" },
  { value: 4900, color: "rgb(255, 227, 202)" },
  { value: 5000, color: "rgb(255, 228, 206)" },
  { value: 5100, color: "rgb(255, 230, 210)" },
  { value: 5200, color: "rgb(255, 232, 213)" },
  { value: 5300, color: "rgb(255, 233, 217)" },
  { value: 5400, color: "rgb(255, 235, 220)" },
  { value: 5500, color: "rgb(255, 236, 224)" },
  { value: 5600, color: "rgb(255, 238, 227)" },
  { value: 5700, color: "rgb(255, 239, 230)" },
  { value: 5800, color: "rgb(255, 240, 233)" },
  { value: 5900, color: "rgb(255, 242, 236)" },
  { value: 6000, color: "rgb(255, 243, 239)" },
  { value: 6100, color: "rgb(255, 244, 242)" },
  { value: 6200, color: "rgb(255, 245, 245)" },
  { value: 6300, color: "rgb(255, 246, 247)" },
  { value: 6400, color: "rgb(255, 248, 251)" },
  { value: 6500, color: "rgb(255, 249, 253)" },
  { value: 6600, color: "rgb(254, 249, 255)" },
  { value: 6700, color: "rgb(252, 247, 255)" },
  { value: 6800, color: "rgb(249, 246, 255)" },
  { value: 6900, color: "rgb(247, 245, 255)" },
  { value: 7000, color: "rgb(245, 243, 255)" },
  { value: 7100, color: "rgb(243, 242, 255)" },
  { value: 7200, color: "rgb(240, 241, 255)" },
  { value: 7300, color: "rgb(239, 240, 255)" },
  { value: 7400, color: "rgb(237, 239, 255)" },
  { value: 7500, color: "rgb(235, 238, 255)" },
  { value: 7600, color: "rgb(233, 237, 255)" },
  { value: 7700, color: "rgb(231, 236, 255)" },
  { value: 7800, color: "rgb(230, 235, 255)" },
  { value: 7900, color: "rgb(228, 234, 255)" },
  { value: 8000, color: "rgb(227, 233, 255)" },
  { value: 8100, color: "rgb(225, 232, 255)" },
  { value: 8200, color: "rgb(224, 231, 255)" },
  { value: 8300, color: "rgb(222, 230, 255)" },
  { value: 8400, color: "rgb(221, 230, 255)" },
  { value: 8500, color: "rgb(220, 229, 255)" },
  { value: 8600, color: "rgb(218, 229, 255)" },
  { value: 8700, color: "rgb(217, 227, 255)" },
  { value: 8800, color: "rgb(216, 227, 255)" },
  { value: 8900, color: "rgb(215, 226, 255)" },
  { value: 9000, color: "rgb(214, 225, 255)" },
  { value: 9100, color: "rgb(212, 225, 255)" },
  { value: 9200, color: "rgb(211, 224, 255)" },
  { value: 9300, color: "rgb(210, 223, 255)" },
  { value: 9400, color: "rgb(209, 223, 255)" },
  { value: 9500, color: "rgb(208, 222, 255)" },
  { value: 9600, color: "rgb(207, 221, 255)" },
  { value: 9700, color: "rgb(207, 221, 255)" },
  { value: 9800, color: "rgb(206, 220, 255)" },
  { value: 9900, color: "rgb(205, 220, 255)" },
  { value: 10000, color: "rgb(207, 218, 255)" },
  { value: 10100, color: "rgb(207, 218, 255)" },
  { value: 10200, color: "rgb(206, 217, 255)" },
  { value: 10300, color: "rgb(205, 217, 255)" },
  { value: 10400, color: "rgb(204, 216, 255)" },
  { value: 10500, color: "rgb(204, 216, 255)" },
  { value: 10600, color: "rgb(203, 215, 255)" },
  { value: 10700, color: "rgb(202, 215, 255)" },
  { value: 10800, color: "rgb(202, 214, 255)" },
  { value: 10900, color: "rgb(201, 214, 255)" },
  { value: 11000, color: "rgb(200, 213, 255)" },
  { value: 11100, color: "rgb(200, 213, 255)" },
  { value: 11200, color: "rgb(199, 212, 255)" },
  { value: 11300, color: "rgb(198, 212, 255)" },
  { value: 11400, color: "rgb(198, 212, 255)" },
  { value: 11500, color: "rgb(197, 211, 255)" },
  { value: 11600, color: "rgb(197, 211, 255)" },
  { value: 11700, color: "rgb(197, 210, 255)" },
  { value: 11800, color: "rgb(196, 210, 255)" },
  { value: 11900, color: "rgb(195, 210, 255)" },
  { value: 12000, color: "rgb(195, 209, 255)" },
].reverse()

const id = "#colorBalanceGraph" as const

export default function render() {
  document.querySelector(id)?.replaceChildren("")
  const svg = d3
    .select(id)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "white")

  // Add main Text
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (_d, i) => i * (width / data.length))
    .attr("y", height / 2)
    .attr("width", width / data.length + 1)
    .attr("height", 50)
}

export function transition() {
  // Add Animation
  d3.select(id + " svg")
    .selectAll("rect")
    .data(data)
    .transition()
    .duration(1000)
    .attr("fill", (d) => d.color)
}
