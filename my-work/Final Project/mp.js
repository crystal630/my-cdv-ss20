let w = 200;
let h = 200;
let svg = d3.select("#cb")
    .append("svg")
    .style("width", 1400)
    .style("height", 410)

;
  svg.append("svg:image")
      .attr("xlink:href","imgs/cb.png")
      .attr("x", -20)
      .attr("y", 60)
      .attr("width", 320)
      .attr("height", 320);
let svg1 = d3.select("#suggestion")
     .append("svg")
     .style("width", w)
     .style("height", h)
    ;
    svg1.append("svg:image")
      .attr("xlink:href","imgs/light.png")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 200)
      .attr("height", 200);

    svg.append("svg:image")
        .attr("xlink:href","imgs/cm1.png")
        .attr("x", 400)
        .attr("y",  0)
        .attr("width", 580)
        .attr("height", 440);
    svg.append("svg:image")
        .attr("xlink:href","imgs/cp.png")
        .attr("x", 1080)
        .attr("y",  130)
        .attr("width", 280)
        .attr("height", 280);
