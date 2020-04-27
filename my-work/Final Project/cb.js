let w = 1450;
let h = 330;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
;
d3.json("data.geojson").then(function(geoData){

  console.log(geoData[0])
  let keys=0;
  //function maps(d,i){
    let dataS=geoData[keys]
    console.log(dataS.features)
      function arab(){
        keys=0;
        let dataS=geoData[keys]
        let projection=d3.geoEqualEarth()
              .translate([w/2,h/2])
              .fitExtent([[-250,50],[w/2,h/2]],dataS)
            ;
        let pathMaker= d3.geoPath(projection);

        let paths=viz.selectAll(".area").data(dataS.features).enter()
                 .append("path")
                 .attr("class", "area")
                 .attr("d", pathMaker)
                  .attr("fill", function(d,i){
                    console.log(d.properties["sovereignt"])
                    if(d.properties["sovereignt"]=="Lebanon"){
                      return "black";
                    }else{
                      return "Tan";
                    }
                  })
                  .attr("stroke", "red")
                  .attr("stroke-width", 1)

        paths.transition()
            .attr("d",pathMaker)
            .attr("fill", function(d,i){
              //console.log(d.properties["sovereignt"])
              if(d.properties["sovereignt"]=="Lebanon"){
                return "white";
              }else{
                return "Tan";
              }
            })
            .attr("stroke","white")
            .attr("stroke-width",3)
            .duration(1200)
            let img=viz
              .append("svg:image")
              .attr("xlink:href","imgs/kkk.png")
              .attr("x", 170)
              .attr("y", 50)
              .attr("width", 100)
              .attr("height", 100)
              .attr("opacity",0)
            img
            .transition()
            .duration(1000)
            .delay(1200)
            .attr("opacity",1)
        texts=viz
            .append("g")
            .attr("class","textgroup")
          ;
        texts
            .append("text")
            .text("It is said that the origin of coffee is Arab.")
            .attr("x",370)
            .attr("y",100)
            .attr("font-size",10)

        texts
           .append("text")
           .text("Then coffee gradually spread to Europe ➢➢")
           .attr("x",370)
           .attr("y",130)
           .attr("font-size",10)
        texts
           .append("text")
           .text("Now we can get a cup of coffee wherever we are  ☕️")
           .attr("x",370)
           .attr("y",160)
           .attr("font-size",10)

        texts.selectAll("text")
                .transition()
                .duration(1000)
                .delay(2200)
                .attr("font-size",20)
                .attr("fill","white")
                  ;


      }
      function lebanon(){
        keys=1;
        let dataS=geoData[keys]
        let projection1=d3.geoEqualEarth()
              .translate([w/2,h/2])
              .fitExtent([[400,0],[w,h]],dataS)
            ;
        let pathMaker1= d3.geoPath(projection1);

        let paths1=viz.selectAll(".areas").data(dataS.features).enter()
                 .append("path")
                 .attr("class", "areas")
                 .attr("d", pathMaker1)
                  .attr("fill", "Tan")
                  .attr("stroke", "white")
                  .attr("stroke-width", 1)

        paths1.transition()
            .attr("d",pathMaker1)
            .attr("fill", "SaddleBrown")
            .attr("stroke","Peru")
            .attr("stroke-width",3)
            .duration(1200)
       texts=viz.append("g")
                .attr("class","textGroup")
              ;
            texts
                .append("text")
                .text("Lebanon ranks NO.1 as the largerst coffee consumer among Arab.")
                .attr("x",870)
                .attr("y",50)
                .attr("font-size",10)
              ;
           texts
                .append("text")
                .text("It even ranked NO.21 among the world in 2018.")
                .attr("x",870)
                .attr("y",100)
                .attr("font-size",10)
              ;
           texts
                .append("text")
                .text("Drinking coffee has already become a daily routine for Lebanese.")
                .attr("x",870)
                .attr("y",150)
                .attr("font-size",10)
             ;
           texts
                .append("text")
                .text("Serving the guest coffee is a sign of hospitality.")
                .attr("x",870)
                .attr("y",200)
                .attr("font-size",10)
             ;
           texts
                .append("text")
                .text("The method to make Lebanese coffee is similar with Turkish coffee.")
                .attr("x",870)
                .attr("y",250)
                .attr("font-size",10)
             ;
          texts
               .append("text")
               .text("Click 'Prouction' button to see detailed process.")
               .attr("x",870)
               .attr("y",300)
               .attr("font-size",10)
            ;

              texts.selectAll("text")
                .transition()
                .duration(1000)
                .delay(200)
                .attr("font-size",20)
                .attr("fill","white")
      }
      document.getElementById("arab").addEventListener("click", arab);
      document.getElementById("lebanon").addEventListener("click", lebanon);

      });
function production(){
let viz1 = d3.select("#pro").append("svg")
      .style("width", w)
      .style("height", h)
      ;
    let s1=viz1.append("svg:image")
      .attr("xlink:href","imgs/bean.png")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 150)
      .attr("height", 150)
      .attr("opacity",0.1);

    s1.transition()
      .delay(200)
      .duration(1000)
      .attr("opacity",1);
   s2=viz1.append("svg:image")
     .attr("xlink:href","imgs/powder.png")
     .attr("x", 160)
     .attr("y", 160)
     .attr("width", 150)
     .attr("height", 150)
     .attr("opacity",0.1);
   s2.transition()
       .delay(1000)
       .duration(1200)
       .attr("opacity",1);
   s3=viz1.append("svg:image")
     .attr("xlink:href","imgs/llll.png")
     .attr("x", 430)
     .attr("y", 60)
     .attr("width", 300)
     .attr("height", 300)
     .attr("opacity",0.1);
   s3.transition()
       .delay(1800)
       .duration(1000)
       .attr("opacity",1);
   s4=viz1.append("svg:image")
     .attr("xlink:href","imgs/222.png")
     .attr("x", 390)
     .attr("y", -50)
     .attr("width", 300)
     .attr("height", 300)
     .attr("opacity",0.1);
   s4.transition()
       .delay(2400)
       .duration(1000)
       .attr("opacity",1);
   s5=viz1.append("svg:image")
     .attr("xlink:href","imgs/c.png")
     .attr("x", 690)
     .attr("y", 60)
     .attr("width", 300)
     .attr("height", 300)
     .attr("opacity",0.1)
    ;
  s9=viz1.append("svg:image")
    .attr("xlink:href","imgs/text2.png")
    .attr("x", 830)
    .attr("y", 80)
    .attr("width", 200)
    .attr("height", 200)
    .attr("opacity",0.1)
   ;
   s9.transition()
       .delay(3200)
       .duration(1000)
       .attr("opacity",1);

   s5.transition()
       .delay(3000)
       .duration(1000)
       .attr("opacity",1);
  s6=viz1.append("svg:image")
    .attr("xlink:href","imgs/hp.png")
    .attr("x", 990)
    .attr("y", 40)
    .attr("width", 300)
    .attr("height", 300)
    .attr("opacity",0.1)
  ;
  s7=viz1.append("svg:image")
    .attr("xlink:href","imgs/text1.png")
    .attr("x", 1200)
    .attr("y", 60)
    .attr("width", 150)
    .attr("height", 150)
    .attr("opacity",0.1)
    ;
  s8=viz1.append("svg:image")
    .attr("xlink:href","imgs/text.png")
    .attr("x", 1250)
    .attr("y", 200)
    .attr("width", 150)
    .attr("height", 150)
    .attr("opacity",0.1)
  ;
  s6.transition()
      .delay(3800)
      .duration(1000)
      .attr("opacity",1);
  s7.transition()
    .delay(3800)
    .duration(1000)
    .attr("opacity",1)
    ;
  s8.transition()
    .delay(4000)
    .duration(1000)
    .attr("opacity",1)
      ;

    }
document.getElementById("production").addEventListener("click", production);
