console.log("js loaded");
console.log(document.getElementById("viz-container"));
let viz=d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
    .attr("width",1600)
    .attr("height",575);

let viz1=d3.select("#viz")
    .append("svg")
    .attr("id","viz1")
    .attr("width",1600)
    .attr("height",580);

var allGroup = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]

d3.json('data.json').then(gotData)
function day(datapoint){
  d=datapoint.time;
  console.log(d);
  return d;
}
function m(datapoint){
  n=datapoint.time*200-12;
  console.log(n);
  return n;
}

function cordinateX(datapoint){
  a=datapoint.time*200-100;
  console.log(a);
  return a;
}
function rectX(datapoint){
  a=datapoint.time*200-70;
  console.log(a);
  return a;
}
function tops(datapoint){
  c=datapoint.tops;
  console.log(c);
  return c;

}
function pants(datapoint){
  p=datapoint.pants
  return p;
}
function feet(datapoint){
  f=datapoint.feet
  return f;
}



function gotData(incomingData){


viz.selectAll("#tops").data(incomingData).enter()
 .append("rect")
 .attr("id","tops")
 .attr("x",cordinateX)
 .attr("y",250)
 .attr("width",180)
 .attr("height",150)
 .style("fill",tops)

 viz.selectAll("#shoes").data(incomingData).enter()
  .append("rect")
  .attr("id","shoes")
  .attr("x",cordinateX)
  .attr("y",560)
  .attr("width",180)
  .attr("height",30)
  .style("fill",feet)
viz.selectAll("circle").data(incomingData).enter()
  .append("circle")
  .attr("id","c")
  .attr("cx",cordinateX)
  .attr("cy",150)
  .attr("r",50)
  .attr("fill","lightyellow")
viz.selectAll("#m").data(incomingData).enter()
   .append("rect")
   .attr("id","m")
   .attr("x",m)
   .attr("y",450)
   .attr("width",10)
   .attr("height",150)
   .style("fill","lightBlue")

viz1.selectAll("#share").data(incomingData).enter()
.append("rect")
.attr("id","share")
.attr("x",rectX)
.attr("y",400)
.attr("width",120)
.attr("height",200)
.attr("fill",pants)

}
