let w = 1400;
let h = 600;
let xpadding = 100;
let ypadding = 50;

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
;
let chScale = d3.scaleLinear().domain([1,10]).range([xpadding, w-xpadding]);
let cpScale = d3.scaleLinear().domain([1,8]).range([h-ypadding, ypadding]);
let arScale = d3.scaleLinear().domain([15,50]).range([h-ypadding, ypadding]);
function r(datapoint){
   s=datapoint.CoffeeCupsPerDay*20
   return s;
}
function getGroupLocation(d,i){

  let x = d.CodingHours*120-(Math.floor(Math.random() * 130))
  let y = 630-(d.CoffeeCupsPerDay*72+Math.floor(Math.random() * 32))
  return "translate(" + x + "," + y +")"
}
function getIncomingLocation(d,i){
  let x = chScale(d.CodingHours)
  let y = 450;
  return "translate(" + x + "," + y +")"
}
function changingLocation(d,i){
  let x = d.AgeRange*20+30+Math.floor(Math.random() * 100)
  // *20+(Math.floor(Math.random() * 20))
  let y = 630-(d.CoffeeCupsPerDay*72+Math.floor(Math.random() * 62));
  return "translate(" + x + "," + y +")"
}

function gotData(incomingData){

  let xScale = d3.scaleLinear().domain([1,10]).range([xpadding, w-xpadding]);
  console.log(xScale(10))
  let xAxis = d3.axisBottom(xScale);
  let xAxisGroup = viz.append("g")
      .attr("class", "xaxisgroup")
      .attr("transform", "translate(0,"+(h-ypadding)+")")
  ;
  xAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "#F7E6B0")
    .text(" 💻 Coding Hours ⌛️")
    .attr("font-family", "Bradley Hand")
    .attr("font-size", "3em")

  xAxisGroup.call(xAxis);

  let yScale = d3.scaleLinear().domain([1,8]).range([h-ypadding, ypadding]);
  let yAxis = d3.axisLeft(yScale);
  let yAxisGroup = viz.append("g")
      .attr("class", "yaxisgroup")
      .attr("transform", "translate("+xpadding+",0)")
  ;
  yAxisGroup.append("g").attr('class', 'yLabel')
    .attr("transform", "translate(-43, 190) rotate(-90)")
    .append("text")
    .attr("fill", "#F7E6B0")
    .text(" ☕️Coffee Cups Per Day 📆")
    .attr("font-family", "Bradley Hand")
    .attr("font-size", "3em")

  yAxisGroup.call(yAxis);
  let graphGroup = viz.append("g").attr("class", "graphGroup");
  var legendRectSize = 18;
  var legendSpacing = 4;
  let xScale1 = d3.scaleLinear().domain([0,60]).range([xpadding, w-xpadding]);
  console.log(xScale(10))
  let xAxis1 = d3.axisBottom(xScale1);
  let xAxisGroup1 = viz.append("g")
      .attr("class", "xaxisgroup1")
      .attr("transform", "translate(0,"+(h-ypadding)+")")
  ;
  xAxisGroup1.append("g").attr('class', 'xLabel1')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "#F7E6B0")
    .text(" 👶Age👨‍")
    .attr("font-family", "Bradley Hand")
    .attr("font-size", "3em")
  ;
 xAxisGroup.transition().duration(1200).attr("opacity",0)
xAxisGroup1.transition().duration(1200).attr("opacity",0)
yAxisGroup.transition().duration(1200).attr("opacity",0)

let comment=graphGroup.append("g").attr("class","comment")
comment.transition().duration(1200).attr("opacity",0)
var radius = Math.min(w, h) / 2;

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie()
    .value(function(d) { return d.Type;})
    .sort(null);

var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(0);

var c1 = viz
    .append("g")
    .attr("class","pie")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

var c2 = viz
    .append("g")
    .attr("class","pie")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
    let circles=graphGroup.selectAll(".img").data(incomingData)
    let enteringElements=circles.enter();
    enteringElements.append("svg:image")
             .attr("class","img")
             .attr("xlink:href",function(d){
               if(d.CoffeeType=="Americano"||d.CoffeeType=="American Coffee"){
                  return "imgs/11.png";
               }else if(d.CoffeeType=="Caffè latte"){
                 return "imgs/15.png";
              }else if(d.CoffeeType=="Espresso (Short Black)"||d.CoffeeType=="Double Espresso (Doppio)"){
                return "imgs/13.png";
             }else if(d.CoffeeType=="Cappuccino"){
               return "imgs/12.png";
            }else if(d.CoffeeType=="Nescafe"){
              return "imgs/14.png";
           }else if(d.CoffeeType=="Turkish"){
             return "imgs/16.png";
          }})

             // .attr("x",share)
             // .attr("y",yc)
             .attr("width",80)
             .attr("height",80)
             .attr("transform",getIncomingLocation)
           ;

t1=viz.append("g").attr("class","t1");

t1.transition().duration(1200).attr("opacity",0)

function general(){
    let circles=graphGroup.selectAll(".img").data(incomingData)
      t1.transition().duration(1200).attr("opacity",0)

        comment.append("svg:image")
               .attr("xlink:href","imgs/11.png")
               .attr("x",110)
               .attr("y",10)
               .attr("width",25)
               .attr("height",25)
            ;
        comment.append("text")
               .text("Americano")
               .attr("x",140)
               .attr("y",28)
               .attr("fill", "#F7E6B0")
               .attr("font-family", "Bradley Hand")
               .attr("font-size", "1em")
            ;
        comment.append("svg:image")
              .attr("xlink:href","imgs/12.png")
              .attr("x",110)
              .attr("y",45)
              .attr("width",25)
              .attr("height",25)
            ;
        comment.append("text")
              .text("Cappuccino")
              .attr("x",140)
              .attr("y",62)
              .attr("fill", "#F7E6B0")
              .attr("font-family", "Bradley Hand")
              .attr("font-size", "1em")
           ;
         comment.append("svg:image")
              .attr("xlink:href","imgs/13.png")
              .attr("x",110)
              .attr("y",80)
              .attr("width",25)
              .attr("height",25)
           ;
         comment.append("text")
              .text("Espresso")
              .attr("x",140)
              .attr("y",98)
              .attr("fill", "#F7E6B0")
              .attr("font-family", "Bradley Hand")
              .attr("font-size", "1em")
          ;
          comment.append("svg:image")
                 .attr("xlink:href","imgs/14.png")
                 .attr("x",110)
                 .attr("y",113)
                 .attr("width",25)
                 .attr("height",25)
              ;
          comment.append("text")
                 .text("Nescafe")
                 .attr("x",140)
                 .attr("y",128)
                 .attr("fill", "#F7E6B0")
                 .attr("font-family", "Bradley Hand")
                 .attr("font-size", "1em")
              ;
          comment.append("svg:image")
                 .attr("xlink:href","imgs/15.png")
                 .attr("x",110)
                 .attr("y",143)
                 .attr("width",25)
                 .attr("height",25)
              ;
          comment.append("text")
                 .text("Caffè latte")
                 .attr("x",140)
                 .attr("y",158)
                 .attr("fill", "#F7E6B0")
                 .attr("font-family", "Bradley Hand")
                 .attr("font-size", "1em")
               ;
          comment.append("svg:image")
                 .attr("xlink:href","imgs/16.png")
                 .attr("x",110)
                 .attr("y",173)
                 .attr("width",25)
                 .attr("height",25)
              ;
          comment.append("text")
                 .text("Turkish")
                 .attr("x",140)
                 .attr("y",188)
                 .attr("fill", "#F7E6B0")
                 .attr("font-family", "Bradley Hand")
                 .attr("font-size", "1em")
              ;
          comment.on("mouseover",function(){

                  d3.select(this).select("text")
                  .attr("opacity",0.1)
                  .transition()
                  .duration(200)
                  .attr("opacity",1)
        })


                    enteringElements.selectAll(".img")
                        .transition()
                        .delay(300)
                        .duration(1200)
                        .attr("x",function(d){ if(d.CodingHours==1){return 100;}})
                        .attr("transform",getGroupLocation)
                        .attr("width",30)
                        .attr("height",30)
                      ;


  graphGroup.transition().duration(1200).attr("opacity",1)
  xAxisGroup.transition().duration(1200).attr("opacity",1).attr("color","white")
  yAxisGroup.transition().duration(1200).attr("opacity",1).attr("color","white")
  graphGroup.transition().duration(1200).attr("opacity",1)
  xAxisGroup1.transition().duration(1200).attr("opacity",0)
  comment.transition().duration(1200).attr("opacity",1)
  t1.transition().duration(1200).attr("opacity",0)
  c1.transition().duration(1200).attr("opacity",0)
  c2.transition().duration(1200).attr("opacity",0)



  }
   function age(){
       t1.transition().duration(1200).attr("opacity",0)
       xAxisGroup.transition().duration(1200).attr("opacity",0)
       yAxisGroup.transition().duration(1200).attr("opacity",1)
       graphGroup.transition().duration(1200).attr("opacity",1)
       xAxisGroup1.transition().duration(1200).attr("opacity",1).attr("color","white")
       c1.transition().duration(1200).attr("opacity",0)
       c2.transition().duration(1200).attr("opacity",0)

     //
     // let xScale1 = d3.scaleLinear().domain([0,60]).range([xpadding, w-xpadding]);
     // console.log(xScale(10))
     // let xAxis1 = d3.axisBottom(xScale1);
     // let xAxisGroup1 = viz.append("g")
     //     .attr("class", "xaxisgroup1")
     //     .attr("transform", "translate(0,"+(h-ypadding)+")")
     // ;
     xAxisGroup1.append("g").attr('class', 'xLabel1')
       .attr("transform", "translate("+w/2+", 40)")
       .append("text")
       .attr("fill", "#F7E6B0")
       .text(" 👶Age👨‍")
       .attr("font-family", "Bradley Hand")
       .attr("font-size", "3em")

     xAxisGroup1.call(xAxis1);

     enteringElements.selectAll(".img")
       .transition()
       .delay(300)
       .duration(1200)
       .attr("x",function(d){ if(d.AgeRange==0){return 0;}})
       .attr("width",30)
       .attr("height",30)
       .attr("transform",changingLocation)
      ;
    //comment.transition().duration(1200).attr("opacity",0)
     t1.transition().duration(1200).attr("opacity",0)
     c1.transition().duration(1200).attr("opacity",0)
   }
function chart(){
  labels=["Caffè latte","Americano","Nescafe","Turkish","Cappuccino","Espresso","?"]
  times=["Before coding","While coding","All the time","In the morning"]
  xAxisGroup.transition().duration(1200).attr("opacity",0)
  yAxisGroup.transition().duration(1200).attr("opacity",0)
  graphGroup.transition().duration(1200).attr("opacity",0)

  xAxisGroup1.transition().duration(1200).attr("opacity",0);
  // var c2 = viz
  //   .append("g")
  //   .attr("class","pie2")
  //   .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
  //   var c1 = viz
  //     .append("g")
  //     .attr("class","pie1")
  //     .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");


  var arc = d3.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 20);
      texts1=c1.selectAll('.legend1').data(times)
      ;
      labelG1=texts1.append("g").attr("class","lab1");
      labelG1
        .append('rect')
        .attr('x', 450)
        .attr('y', -100)
        .attr('width', 20)
        .attr('height', 20)
        .style('fill', function(d, i) { return color(i);} )
        .style('stroke', "black")
      ;

      labelG1.append('text')
        .attr('x', 490)
        .attr('y', -80)
        .text(function(d) { return d; })
        .attr("fill", "#F7E6B0")
        .attr("font-family", "Monaco")
        .attr("font-size", "1em")
      ;
      var legend = c1.selectAll('.legend')
       .data(color.domain())
       .enter()
       .append('g')
       .attr('class', 'legend')
       .attr('transform', function(d, i) {
         var height = legendRectSize + legendSpacing;
         var horz = -50;
         var vert = 30-i * height;
         return 'translate(' + horz + ',' + vert + ')';
       });

   texts=c1.selectAll('.legend').data(labels)
   ;
     labelG=texts.append("g").attr("class","lab");
     labelG
       .append('rect')
       .attr('x', 450)
       .attr('y', -100)
       .attr('width', 20)
       .attr('height', 20)
       .style('fill', function(d, i) { return color(i);} )
       .style('stroke', "black")
     ;

     labelG.append('text')
       .attr('x', 490)
       .attr('y', -80)
       .text(function(d) { return d; })
       .attr("fill", "#F7E6B0")
       .attr("font-family", "Monaco")
       .attr("font-size", "1em")
      ;



function type1(){
      labelG1.transition().attr("opacity",0);
      labelG.transition().attr("opacity",1);
      c1.transition().duration(1200).attr("opacity",1);
      c2.transition().duration(1200).attr("opacity",0);
      d3.tsv("data.tsv", type).then(function(data){
        var pie = d3.pie()
          .value(function(d) { return d.Type;})
          .sort(null);
    var path = c1.datum(data).selectAll("path")
      .data(pie)
      .enter().append("path").attr("class","p1")
      .attr("fill", function(d, i) { return color(i); })
      .attr("d", arc)
      .each(function(d) { this._current = d; })
      ;

      path.attr("opacity",0.3).transition().duration(750).attr("opacity",1)
      path.on('mouseover', function(d) {                            // NEW
          var total = d3.sum(data.map(function(d) {                // NEW
            return d.Type;                                           // NEW
          }));                                                        // NEW
          var percent = Math.round(1000 * d.data.Type / total) / 10; // NEW
          t1=viz.append("g").attr("class","t1");
          t1.append("text")
          .text(percent+"%")
          .attr("x",600)
          .attr("y",360)
          .attr("opacity",1)
          .attr("fill", "#F7E6B0")
          .attr("font-family", "Monaco")
          .attr("font-size", "5em")

        });                                                           // NEW

        path.on('mouseout', function() {
          t1.transition().duration(1200).attr("opacity",0)                            // NEW
          // tooltip.style('display', 'none');
                                // NEW
        });                                                           // NEW

       var legend = c1.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) {
          var height = legendRectSize + legendSpacing;
          var horz = -50;
          var vert = 30-i * height;
          return 'translate(' + horz + ',' + vert + ')';
        });

    texts=c1.selectAll('.legend').data(labels)
    ;
      labelG=texts.append("g").attr("class","lab");
      labelG
        .append('rect')
        .attr('x', 450)
        .attr('y', -100)
        .attr('width', 20)
        .attr('height', 20)
        .style('fill', function(d, i) { return color(i);} )
        .style('stroke', "black")
      ;

      labelG.append('text')
        .attr('x', 490)
        .attr('y', -80)
        .text(function(d) { return d; })
        .attr("fill", "#F7E6B0")
        .attr("font-family", "Monaco")
        .attr("font-size", "1em")
      ;
      labelG1.transition().attr("opacity",0);
      labelG.transition().attr("opacity",1);

     });

}
function time1(){
  labelG1.transition().duration(1200).attr("opacity",1);
  labelG.transition().duration(1200).attr("opacity",0);
var pie = d3.pie()
  .value(function(d) { return d.Time;})
  .sort(null);

  var arc = d3.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 20);




d3.tsv("data.tsv", time).then(function(data){
var path = c2.datum(data).selectAll("path")
.data(pie)
.enter().append("path").attr("class","p1")
.attr("fill", function(d, i) { return color(i); })
.attr("d", arc)
.each(function(d) { this._current = d; })
;

path.attr("opacity",0.3).transition().duration(750).attr("opacity",1)
path.on('mouseover', function(d) {                            // NEW
    var total = d3.sum(data.map(function(d) {                // NEW
      return d.Time;                                           // NEW
    }));                                                        // NEW
    var percent = Math.round(1000 * d.data.Time / total) / 10; // NEW
    t1=viz.append("g").attr("class","t1");
    t1.append("text")
    .text(percent+"%")
    .attr("x",580)
    .attr("y",360)
    .attr("opacity",1)
    .attr("fill", "#F7E6B0")
    .attr("font-family", "Monaco")
    .attr("font-size", "5em")
  ;


  });                                                           // NEW

  path.on('mouseout', function() {
    t1.transition().duration(1200).attr("opacity",0)                            // NEW
    // tooltip.style('display', 'none');
                          // NEW
  });                                                           // NEW

 var legend1 = c2.selectAll('.legend1')
  .data(color.domain())
  .enter()
  .append('g')
  .attr('class', 'legend1')
  .attr('transform', function(d, i) {
    var height = legendRectSize + legendSpacing;
    var horz = -50;
    var vert = 30-i * height;
    return 'translate(' + horz + ',' + vert + ')';
  });

texts1=c2.selectAll('.legend1').data(times)
;
labelG1=texts1.append("g").attr("class","lab1");
labelG1
  .append('rect')
  .attr('x', 450)
  .attr('y', -100)
  .attr('width', 20)
  .attr('height', 20)
  .style('fill', function(d, i) { return color(i);} )
  .style('stroke', "black")
;

labelG1.append('text')
  .attr('x', 490)
  .attr('y', -80)
  .text(function(d) { return d; })
  .attr("fill", "#F7E6B0")
  .attr("font-family", "Monaco")
  .attr("font-size", "1em")
;
labelG1.transition().attr("opacity",1);
labelG.transition().attr("opacity",0);
c1.transition().duration(1200).attr("opacity",0);
c2.transition().duration(1200).attr("opacity",1);
})
}

document.getElementById("type").addEventListener("click", type1);
document.getElementById("time").addEventListener("click", time1);
}
document.getElementById("pros").addEventListener("click", general);
document.getElementById("cons").addEventListener("click", age);
document.getElementById("con").addEventListener("click", chart);


}



d3.csv("coffee.csv").then(gotData);
