let w=1600;
let h=870;
function getColors(d,i){

  return d.sharedColor;
}
function share(datapoint){
  a=datapoint.sharedColor;
  return a;
}
function cordinateX(datapoint){
  x=datapoint.time*100-110;
 return 'translate('+x+','+'0)'
}
function newX(datapoint){
  x1=740+datapoint.time*8
 return 'translate('+x1+','+'0)'
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
function date(datapoint){
  return datapoint.date;
}



//var allGroup = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
var x = d3.scaleLinear().range([0, 200]).domain([0, 50])
var y = d3.scaleLinear().range([500, 200]).domain([0, 50]);

let wScale=d3.scaleLinear().domain([0,w]).range([0,725]);
let hScale=d3.scaleLinear().domain([0,h]).range([0,400]);
function gotData(incomingData){

  // create svg
  let viz = d3.select("#container")
    .append("svg")
    .attr("class","viz")
    .attr("width",w)
    .attr("height",h);
  // append groups
  let datagroup=viz.selectAll(".datagroup").data(incomingData).enter()
      .append("g")
      .attr("class","datagroup")
      datagroup
      .append("text")
      .text(date)
      .attr("x",55)
      .attr("y",40)
      .attr("font-family","fantasy")
      .attr("font-size",10)
      .attr("fill","black");
      datagroup
      .append("rect")
      .attr("class", "tops")
      .attr("x",55)
      .attr("y",80)
      .attr("width",wScale(130))
      .attr("height",hScale(130))
      .attr("fill",topss)
      .attr("stroke-width",5)
      .attr("stroke", stroke);
      datagroup
      .append("rect")
      .attr("x",35)
      .attr("y",80)
      .attr("width",wScale(20))
      .attr("height",hScale(20))
      .attr("fill","white")
      let shoes=datagroup.append("g").attr("class","shoes")
      shoes
      .append("rect")
      .attr("class","shoes1")
      .attr("x",45)
      .attr("y",360)
      .attr("width",wScale(70))
      .attr("height",hScale(30))
      .style("fill",feet);
      shoes
      .append("rect")
      .attr("class","shoes2")
      .attr("x",95)
      .attr("y",360)
      .attr("width",wScale(70))
      .attr("height",hScale(30))
      .style("fill",feet);
      shoes
      .append("rect")
      .attr("class","shoes3")
      .attr("x",63)
      .attr("y",350)
      .attr("width",wScale(30))
      .attr("height",hScale(30))
      .style("fill",feet);
      shoes
      .append("rect")
      .attr("class","shoes4")
      .attr("x",95)
      .attr("y",350)
      .attr("width",wScale(30))
      .attr("height",hScale(30))
      .style("fill",feet);
  let coats=datagroup.append("g").attr("class","coats")
      coats
      .append("rect")
      .attr("class","coat1")
      .attr("x",60)
      .attr("y",410)
      .attr("width",wScale(130))
      .attr("height",hScale(100))
      .style("fill",coat);

    coats
      .append("rect")
      .attr("class","coat2")
      .attr("x",72)
      .attr("y",400)
      .attr("width",wScale(80))
      .attr("height",hScale(130))
      .style("fill",coat);
      let bar=datagroup.append("g").attr('class','bar')
      bar.append('rect')
         .attr("class","bars")
         .attr("x",10)
         .attr("y",200)
         .attr("width",40)
         .attr("height",380)
         .attr("fill","orange")
         bar
         .append("text")
         .text(date)
         .attr("x",0)
         .attr("y",40)
         .attr("font-family","fantasy")
         .attr("font-size",10)
         .attr("fill","black");

       bar.attr("transform", newX);
var point = {"x": 9, "y": 31}

var poly = [{"x":17, "y":50},
        {"x":12,"y":30},
        {"x":18,"y":30},
        {"x":21,"y":45},
        {"x":24,"y":30},
        {"x":30,"y":30},
        {"x":26,"y":50},];

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
