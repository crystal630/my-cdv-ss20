let viz = d3.select("#container")
  .append("svg")
  .attr("class","viz")
  .attr("width",1200)
  .attr("height",600);
  viz.append('img')
    .attr('src','cover1.png')
    .attr('x',100)
    .attr('y',100)
    .attr('width',1000)
    .attr('height',400)
