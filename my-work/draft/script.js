function getColors(d,i){

  return d.sharedColor;
}
function share(datapoint){
  a=datapoint.sharedColor;
  return a;
}
function cordinateX(datapoint){
  x=datapoint.time*200-100;
 return 'translate('+x+','+'150)'
}

function topss(datapoint){
  c=datapoint.tops;
  return c;

}
function feet(datapoint){
  f=datapoint.feet
  return f;
}
function pant(datapoint){
  p=datapoint.pants
  return p;
}

var allGroup = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]

function gotData(incomingData){

  // create svg
  let viz = d3.select("#viz-container")
    .append("svg")
    .attr("id","viz")
    .attr("width",1600)
    .attr("height",825);
  // append groups
  let datagroup=viz.selectAll(".datagroup").data(incomingData).enter()
      .append("g")
      .attr("class","datagroup")

      datagroup
      .append("rect")
      .attr("class", "tops")
      .attr("x",20)
      .attr("y",100)
      .attr("width",180)
      .attr("height",150)
      .style("fill",topss)

    datagroup
    .append("rect")
    .attr("class","shoes")
    .attr("x",30)
    .attr("y",380)
    .attr("width",180)
    .attr("height",30)
    .style("fill",feet);
    datagroup
    .append("circle")
    .attr("class","head")
    .attr("cx",60)
    .attr("cy",0)
    .attr("r",50)
    .attr("fill","lightyellow")
    datagroup
    .append("rect")
    .attr("class","pants")
    .attr("x",55)
    .attr("y",250)
    .attr("width",120)
    .attr("height",130)
    .attr("fill",pant);
    datagroup
    .append("rect")
    .attr("class","blank")

     .attr("x",110)
     .attr("y",290)
     .attr("width",10)
     .attr("height",150)
     .style("fill","lightBlue")
datagroup.append("g").selectAll("rect").data(getColors).enter()
     .append("rect")
     .attr("x", 30)
     .attr("y", 420)
     .attr("height", 30)
     .attr("width",180)
     .attr('fill',share);
    datagroup.attr("transform", cordinateX);



}
// get data
d3.json("data.json").then(gotData);
