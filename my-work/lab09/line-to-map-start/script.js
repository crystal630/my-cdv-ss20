let w = 1200;
let h = 800;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "lavender")
;


// IMPORT DATA
  d3.json("mainland.geojson").then(function(geoData){
  d3.csv("china-pop-2018.csv").then(function(incomingData){
  console.log(geoData)
  incomingData=incomingData.map(function(d,i){
    d.population=Number(d.population)
    return d;
  })
  console.log(incomingData)
let minPop=d3.min(incomingData,function(d,i){
  return d.population;
})
let maxPop=d3.max (incomingData,function(d,i){
  return d.population;
})

let colorScale=d3.scaleLinear().domain([minPop,maxPop]).range(["white","red"])


  // SCALES (to translate data values to pixel values)
  // let xDomain = d3.extent(incomingData, function(d){ return Number(d.year); })
  // let xScale = d3.scaleLinear().domain(xDomain).range([padding,w-padding]);
  // let yDomain = d3.extent(incomingData, function(d){ return Number(d.birthsPerThousand); })
  // let yScale = d3.scaleLinear().domain(yDomain).range([h-padding,padding]);

let projection=d3.geoEqualEarth()
      .translate([w/2,h/2])
      .fitExtent([[0,0],[w,h]],geoData)
    ;
  // PATH (line) MAKER - gets points, returns one of those complicated looking path strings
  // let lineMaker = d3.line()
  //     .x(function(d){
  //       return xScale(Number(d.year));
  //     })
  //     .y(function(d){
  //       return yScale(Number(d.birthsPerThousand));
  //     })
  // ;
  let pathMaker= d3.geoPath(projection);

  // CREATE SHAPES ON THE PAGE!
  viz.selectAll(".provinces").data(geoData.features).enter()
    .append("path")
      .attr("class", "provinces")
      .attr("d", pathMaker)
      .attr("fill", function(d,i){
        console.log(d.properties.name);

        let correspondingDatapoint=incomingData.find(function(datapoint){

          if(datapoint.province == d.properties.name){
            return true;
          }else{
            return false;
          }
            })
          if(correspondingDatapoint != undefined){
            console.log(correspondingDatapoint.population)
            return colorScale(correspondingDatapoint.population)
          }else{
            return "black"
          }



      })
      .attr("stroke", "red")
      .attr("stroke-width", 1)
  ;
  let lat=40.8424;
  let lon=111.7500;
  let lat1=36.7070;
  let lon1=119.1617;
  let lat2=45.8038;
  let lon2=126.5350;

    let iM=viz
      .append("circle")
      .attr("cx",function(){
        console.log([lon,lat])
        return projection([lon,lat])[0]
      })
      .attr("cy",function(){
        return projection([lon,lat])[1]
      })
      .attr("r",20)
      .attr("fill","green")
      .style("opacity",0)
      .transition()
      .delay(1000)
      .duration(2100)
      .style("opacity",1.0)
    ;
    let sD=viz
      .append("circle")
      .attr("cx",function(){
        return projection([lon1,lat1])[0]
      })
      .attr("cy",function(){
        return projection([lon1,lat1])[1]
      })
      .attr("r",20)
      .attr("fill","blue")
      .style("opacity",0)
      .transition()
      .delay(200)
      .duration(1500)
      .style("opacity",1.0)
    ;
    let hB=viz
      .append("circle")
      .attr("cx",function(){
        console.log([lon2,lat2])
        return projection([lon2,lat2])[0]
      })
      .attr("cy",function(){
        return projection([lon2,lat2])[1]
      })
      .attr("r",20)
      .attr("fill","lightBlue")

    ;


        var color1 = d3.color("green");
        var color2 = d3.color("blue");
        var color3 = d3.color("lightBlue");

        var defs =viz.append("defs");

        var linearGradient = defs.append("linearGradient")
          		                   .attr("id","linearColor")
          		                   .attr("x1","0%")
          		                   .attr("y1","0%")
          		                   .attr("x2","100%")
          		                   .attr("y2","0%");
         var linearGradient1 = defs.append("linearGradient")
                                  .attr("id","linearColor1")
                                  .attr("x1","0%")
                                  .attr("y1","0%")
                                  .attr("x2","0%")
                                  .attr("y2","100%");
        var stop1 = linearGradient.append("stop")
          				                .attr("offset","0%")
          				                .style("stop-color", color1.toString());

        var stop2 = linearGradient.append("stop")
          				                .attr("offset","100%")
          				                .style("stop-color", color2.toString());
        var stop3 = linearGradient1.append("stop")
                                  .attr("offset","0%")
                                  .style("stop-color", color3.toString());
        var stop4 = linearGradient1.append("stop")
                              .attr("offset","100%")
                              .style("stop-color", color2.toString());

       let line=viz.append("line")
                  .attr("x1",projection([lon1,lat1])[0])
                  .attr("y1",projection([lon1,lat1])[1])
                  .attr("x2",projection([lon1,lat1])[0])
                  .attr("y2",projection([lon1,lat1])[1])
                  .attr("stroke","black")
                  .attr("stroke-width",15)

        line.transition()
        .delay(1200)
        .duration(2000)
        .attr("x1",projection([lon1,lat1])[0])
        .attr("y1",projection([lon1,lat1])[1])
        .attr("x2",projection([lon,lat])[0])
        .attr("y2",projection([lon,lat])[1])
        .attr("stroke-width",5)
        .style("stroke", "url(#" + linearGradient.attr("id") + ")");


      let line1=viz.append("line")
                   .attr("x1",projection([lon2,lat2])[0])
                   .attr("y1",projection([lon2,lat2])[1])
                   .attr("x2",projection([lon2,lat2])[0])
                   .attr("y2",projection([lon2,lat2])[1])
                   .attr("stroke","gray")
                   .attr("stroke-width",10)
                   .transition()
                   .delay(600)
                   .duration(200)
                   .attr("x1",projection([lon2,lat2])[0])
                   .attr("y1",projection([lon2,lat2])[1])
                   .attr("x2",projection([lon1,lat1])[0])
                   .attr("y2",projection([lon1,lat1])[1])
                   .attr("stroke-width",5)
                   .style("stroke", "url(#" + linearGradient1.attr("id") + ")");






});
});
