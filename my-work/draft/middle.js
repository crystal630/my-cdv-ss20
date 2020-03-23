let w=2400;
let h=800;
function getColors(d,i){

  return d.sharedColor;
}
function share(datapoint){
  a=datapoint.sharedColor;
  return a;
}
function cordinateX(d,i){
  x=(i+1)*170-160;
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
function status(datapoint){
  console.log(datapoint.status)
  return datapoint.status;
}



//var allGroup = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]


let wScale=d3.scaleLinear().domain([0,w]).range([0,1200]);
let hScale=d3.scaleLinear().domain([0,h]).range([0,400]);
function gotData(incomingData){
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
      .attr("y",90)
      .attr("font-family","fantasy")
      .attr("font-size",20)
      .attr("fill","black");
      datagroup
        .append("rect")
        .attr("class", "tops")
        .attr("x",55)
        .attr("y",80+100)
        .attr("width",wScale(130))
        .attr("height",hScale(130))
        .attr("fill",topss)
        .attr("stroke-width",5)
        .attr("stroke", stroke)
      ;
      datagroup
        .append("rect")
        .attr("x",35)
        .attr("y",580)
        .attr("width",wScale(20))
        .attr("height",hScale(20))
        .attr("fill",status)
      ;
      let shoes=datagroup.append("g").attr("class","shoes")
      shoes
        .append("rect")
        .attr("x",43)
        .attr("y",360+140)
        .attr("width",wScale(70))
        .attr("height",hScale(30))
        .style("fill",feet);
      shoes
        .append("rect")
        .attr("x",95)
        .attr("y",360+140)
        .attr("width",wScale(70))
        .attr("height",hScale(30))
        .style("fill",feet);
      shoes
      .append("rect")
        .attr("x",63)
        .attr("y",350+140)
        .attr("width",wScale(30))
        .attr("height",hScale(30))
        .style("fill",feet);
      shoes
        .append("rect")
        .attr("x",95)
        .attr("y",350+140)
        .attr("width",wScale(30))
        .attr("height",hScale(30))
        .style("fill",feet)
        ;
  let coats=datagroup.append("g").attr("class","coats")
      coats
        .append("rect")
        .attr("class","coat1")
        .attr("x",60)
        .attr("y",410+190)
        .attr("width",wScale(130))
        .attr("height",hScale(100))
        .style("fill",coat);

      coats
        .append("rect")
        .attr("class","coat2")
        .attr("x",72)
        .attr("y",400+190)
        .attr("width",wScale(80))
        .attr("height",hScale(130))
        .style("fill",coat)
      ;



      function getColors(d,i){

        return d.sharedColor;
      }
      function positionY(d,i){
         return 550-(i*25)
      }
      function sharedC(d,i){
        return d;
      }
      let bar=datagroup.append('g').attr("class","bar")
    bar.selectAll(".bar").data(getColors).enter()
         .append('rect')
         .attr("class","bar")
         .attr("x",500)
         .attr("y",positionY)
         .attr("width",40)
         .attr("height",20)
         .attr("fill",sharedC)


         bar
         .append("text")
         .text(date)
         .attr("x",500)
         .attr("y",680)
         .attr("font-family","fantasy")
         .attr("font-size",20)
         .attr("fill","black");

       bar.attr("transform", newX);

  datagroup
    .append("polygon")
    .attr("class","pants")


    .attr("points","68,320,48,440,72,440,84,350,96,440,120,440,104,320")
    .attr("fill",pant)//cant enter 2 datasets the same time

    datagroup.attr("transform", cordinateX);



}
// get data
d3.json("data.json").then(gotData);
