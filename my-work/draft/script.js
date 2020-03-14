function getColors(d,i){

  return d.sharedColor;
}
function share(datapoint){
  a=datapoint.sharedColor;
  return a;
}
function cordinateX(datapoint){
  x=datapoint.time*220-140;
 return 'translate('+x+','+'100)'
}

function topss(datapoint){
  c=datapoint.tops;
  return c;

}
function stroke(d,i){
   return d.sec;
}
function feet(datapoint){
  f=datapoint.feet
  return f;
}
function pant(datapoint){
  p=datapoint.pants
  return p;
}
function coat(datapoint){
  co=datapoint.coat;
  return co;
}

var allGroup = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
var x = d3.scaleLinear().range([0, 200]).domain([0, 50])
var y = d3.scaleLinear().range([500, 200]).domain([0, 50]);
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
      .attr("x",0)
      .attr("y",0)
      .attr("width",130)
      .attr("height",130)
      .attr("fill",topss)
      .attr("stroke-width",10)
      .attr("stroke", stroke);

      datagroup
      .append("rect")
      .attr("class","shoes1")
      .attr("x",-20)
      .attr("y",420)
      .attr("width",70)
      .attr("height",30)
      .style("fill",feet)
      datagroup
      .append("rect")
      .attr("class","shoes2")
      .attr("x",90)
      .attr("y",420)
      .attr("width",70)
      .attr("height",30)
      .style("fill",feet)
      datagroup
      .append("rect")
      .attr("class","coat1")
      .attr("x",0)
      .attr("y",510)
      .attr("width",130)
      .attr("height",100)
      .style("fill",coat)
      datagroup
      .append("rect")
      .attr("class","coat2")
      .attr("x",25)
      .attr("y",500)
      .attr("width",80)
      .attr("height",130)
      .style("fill",coat)


var point = {"x": 4, "y": 31}

var poly = [{"x":7, "y":50},
        {"x":-3,"y":20},
        {"x":10,"y":20},
        {"x":17,"y":40},
        {"x":24,"y":20},
        {"x":37,"y":20},
        {"x":27,"y":50},];

    datagroup.selectAll(".pants").data([poly]).enter()
    .append("polygon")
    .attr("class","pants")

    .attr("points",function(d) {
        return d.map(function(d) {
            return [x(d.x),y(d.y)].join(",");
        }).join(" ");
    })
    .attr("fill","lightyellow")//cant enter 2 datasets the same time

    datagroup.attr("transform", cordinateX);



}
// get data
d3.json("data.json").then(gotData);
