
let cover = d3.select("#container")
  .append("svg")
  .attr("class","cover")
  .attr("width",1200)
  .attr("height",600);

  var myimage = cover.append('image')
      .attr('xlink:href', 'cover1.png')
    .attr('x',0)
    .attr('y',0)
    .attr('width',1200)
    .attr('height',600)
