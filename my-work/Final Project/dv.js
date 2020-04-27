let w = 1400;
let h = 630;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
;
viz.append("svg:image")
  .attr("xlink:href","imgs/demo.png")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 1200)
  .attr("height", 630)
  .attr("opacity",1);
