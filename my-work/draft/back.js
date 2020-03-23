let back = d3.select("#container")
  .append("svg")
  .attr("class","back")
  .attr("width",1200)
  .attr("height",800);

  back.append("text")
  .text("HOW TO READ IT?")
  .attr('x', 20)
  .attr('y', 50+80)
  .attr('font-size',50)
  .attr('font-family',"Fantasy")
  ;

function getColors(d,i){

  return d.sharedColor;
}
function share(datapoint){
  a=datapoint.sharedColor;
  return a;
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
function date(d,i){
  console.log(d.date)
  return d.date;

}

function gotData(incomingData){
let example=back.selectAll(".example1").data(incomingData).enter()
    .append("g")
    .attr('class','example1')
    example
    .append('text')
    .text(date)
    .attr("x",55)
    .attr("y",100+140)
    .attr("font-family","fantasy")
    .attr("font-size",20)
    .attr("fill","black")
    ;
    example
    .append("rect")
    .attr("class", "tops")
    .attr("x",68)
    .attr("y",130+140)
    .attr("width",85)
    .attr("height",85)
    .attr("fill",topss)
    .attr("stroke-width",10)
    .attr("stroke", stroke);

    example
    .append("text")
    .text('Primary Color')
    .attr("x",145)
    .attr("y",100+140)
    .attr("font-family","fantasy")
    .attr("font-size",20)
    .attr("fill","black")
    ;
    example
    .append('line')
    .attr('x1',157)
    .attr('x2',195)
    .attr('y1',173+160)
    .attr('y2',173+160)
    .attr("stroke-width", 2)
    .attr("stroke", "black");
    example
    .append('line')
    .attr('x1',195)
    .attr('x2',195)
    .attr('y1',313)
    .attr('y2',260)
    .attr("stroke-width", 2)
    .attr("stroke", "black");
    example
    .append('line')
    .attr('x1',130)
    .attr('x2',195)
    .attr('y1',313)
    .attr('y2',313)
    .attr("stroke-width", 2)
    .attr("stroke", "black");
    example
    .append("text")
    .text('Secondary Color')
    .attr("x",205)
    .attr("y",200+140)
    .attr("font-family","fantasy")
    .attr("font-size",20)
    .attr("fill","black")
    ;
    example
    .append("rect")
    .attr("x",250)
    .attr("y",127+140)
    .attr("width",15)
    .attr("height",15)
    .attr("fill","white")
  ;

  example
  .append("text")
  .text('Outdoors')
  .attr("x",285)
  .attr("y",140+140)
  .attr("font-family","fantasy")
  .attr("font-size",20)
  .attr("fill","black")
  ;
  let shoes=example.append("g").attr("class","shoes")
  shoes
    .append("rect")
    .attr("x",65)
    .attr("y",450+140)
    .attr("width",35)
    .attr("height",15)
    .style("fill",feet);
  shoes
    .append("rect")
    .attr("x",115)
    .attr("y",450+140)
    .attr("width",35)
    .attr("height",15)
    .style("fill",feet);
  shoes
  .append("rect")
    .attr("x",85)
    .attr("y",440+140)
    .attr("width",15)
    .attr("height",15)
    .style("fill",feet);
  shoes
    .append("rect")
    .attr("x",115)
    .attr("y",440+140)
    .attr("width",15)
    .attr("height",15)
    .style("fill",feet)
    ;
    shoes
    .append("text")
    .text('Shoes')
    .attr("x",195)
    .attr("y",460+140)
    .attr("font-family","fantasy")
    .attr("font-size",20)
    .attr("fill","black")
    ;
    example
    .append("polygon")
    .attr("class","pants")
    .attr("points","88,400,68,520,92,520,104,430,116,520,140,520,124,400")
    .attr("fill",pant)
    ;
    example
    .append("text")
    .text('Pants')
    .attr("x",175)
    .attr("y",330+140)
    .attr("font-family","fantasy")
    .attr("font-size",20)
    .attr("fill","black")
    ;
    let coats=example.append("g").attr("class","coats")
        coats
          .append("rect")
          .attr("class","coat1")
          .attr("x",75)
          .attr("y",520+140)
          .attr("width",65)
          .attr("height",50)
          .style("fill",coat);

        coats
          .append("rect")
          .attr("class","coat2")
          .attr("x",87)
          .attr("y",510+140)
          .attr("width",40)
          .attr("height",65)
          .style("fill",coat)
        ;
        coats
        .append("text")
        .text('Coats (Outdoors)')
        .attr("x",195)
        .attr("y",550+140)
        .attr("font-family","fantasy")
        .attr("font-size",20)
        .attr("fill","black")
        ;
        function getColors(d,i){

          return d.sharedColor;
        }
        function positionY(d,i){
           return 700-(i*25)
        }
        function sharedC(d,i){
          return d;
        }
        let bar=example.append('g').attr("class","bar")
      bar.selectAll(".bar").data(getColors).enter()
           .append('rect')
           .attr("class","bar")
           .attr("x",610)
           .attr("y",positionY)
           .attr("width",40)
           .attr("height",20)
           .attr("fill",sharedC)
           ;

           bar
           .append("text")
           .text("Color GREY occupies 10 percent of this day's colors")
           .attr('x',725)
           .attr('y',68+180)
           .attr('font-family','fantasy')
           .attr('font-size',20)
           ;
           bar
           .append("text")
           .text("Same rule can be applied to the rest of colors")
           .attr('x',705)
           .attr('y',328+80)
           .attr('font-family','fantasy')
           .attr('font-size',20)

           ;
           bar
           .append("text")
           .text("Black dominated the day!")
           .attr('x',705)
           .attr('y',458+180)
           .attr('font-family','fantasy')
           .attr('font-size',30)

           ;


  }
d3.json("data0.json").then(gotData);
