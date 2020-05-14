let w = 1450;
let h = 600;
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
;
viz.append("svg:image")
    .attr("xlink:href","imgs/line.png")
    .attr("x", 100)
    .attr("y", 300)
    .attr("width", 1200)
    .attr("height", 300)
    .attr("opacity",1);
let con=viz.append("svg:image");
let neg=viz.append("g")
    .attr("class","negGroup");
let beg=viz.append("g")
        .attr("class","beGroup")
function benefit(){

  //neg.remove()

  beg
    .transition()
    .duration(120)
    .attr("opacity",1);
  beg.append("svg:image")
    .attr("xlink:href","imgs/be5.gif")
    .attr("x", 80)
    .attr("y", 100)
    .attr("width", 150)
    .attr("height", 150)
    .attr("opacity",1);

  beg.append("text")
    .text("COFFEE makes u more FOCUSED and SMARTER")
    .attr("x", 20)
    .attr("y", 280)
    .attr("font-size",20)
    .attr("fill","#b5e09f")
    .attr("font-family","Bradley Hand")
  ;
  beg.append("svg:image")
    .attr("xlink:href","imgs/be2.gif")
    .attr("x", 430)
    .attr("y", 0)
    .attr("width", 200)
    .attr("height", 200)
    .attr("opacity",1);
 beg.append("text")
    .text("COFFEE gives u a chance to MAKE FRIENDS")
    .attr("x", 320)
    .attr("y", 200)
    .attr("font-size",20)
    .attr("fill","#d6eec8")
    .attr("font-family","Bradley Hand")
 beg.append("svg:image")
      .attr("xlink:href","imgs/be1.gif")
      .attr("x", 150)
      .attr("y", 300)
      .attr("width", 200)
      .attr("height", 200)
      .attr("opacity",1);
  beg.append("text")
      .text("COFFEE makes u feel HAPPIER :)")
      .attr("x", 90)
      .attr("y", 480)
      .attr("font-size",20)
      .attr("fill","#86ce5f")
      .attr("font-family","Bradley Hand")
 n=beg.append("svg:image")
   .attr("xlink:href","imgs/cp1.gif")
   .attr("x", 100)
   .attr("y", 420)
   .attr("width", 200)
   .attr("height", 200)
   .attr("opacity",1);
  n.transition()
   .duration(1200)
   .attr("x", 630)
   .attr("y", 240)
   .attr("width", 200)
   .attr("height", 200)
   .attr("opacity",1);
   neg
   .transition()
   .duration(120)
   .attr("opacity",0.1);
   con
   .transition()
   .duration(120)
   .attr("opacity",0)
   ;


}
function se(){


  neg
    .transition()
    .duration(120)
    .attr("opacity",1);
  m=neg
    .append("svg:image")
    .attr("xlink:href","imgs/cp1.gif")
    .attr("x", 630)
    .attr("y", 240)
    .attr("width", 200)
    .attr("height", 200)
    .attr("opacity",1)
  ;
  m
  .transition()
  .duration(1200)
  .attr("x", 1030)
  .attr("y", 420)
  .attr("width", 200)
  .attr("height", 200)
  neg
    .append("svg:image")
    .attr("xlink:href","imgs/ca.gif")
    .attr("x", 750)
    .attr("y", 50)
    .attr("width", 200)
    .attr("height", 200)
    .attr("opacity",1)
  ;
neg.append("text")
    .text("COFFEE ADDICTION😫")
    .attr("x", 750)
    .attr("y", 260)
    .attr("font-size",20)
    .attr("fill","#db5c5c")
    .attr("font-family","Bradley Hand")
    neg
      .append("svg:image")
      .attr("xlink:href","imgs/ne2.gif")
      .attr("x", 1050)
      .attr("y", 0)
      .attr("width", 200)
      .attr("height", 200)
      .attr("opacity",1)
    ;
    neg.append("text")
      .text("Affecting SLEEP quality😴")
      .attr("x", 1030)
      .attr("y", 200)
      .attr("font-size",20)
      .attr("fill","#e68e8e")
      .attr("font-family","Bradley Hand")
    neg
        .append("svg:image")
        .attr("xlink:href","imgs/an.gif")
        .attr("x", 1000)
        .attr("y", 220)
        .attr("width", 200)
        .attr("height", 200)
        .attr("opacity",1)
      ;
    neg.append("text")
        .text("HIGHER heart rate ❤️")
        .attr("x", 1020)
        .attr("y", 420)
        .attr("font-size",20)
        .attr("fill","#eeb4b4")
        .attr("font-family","Bradley Hand")
      neg
          .append("svg:image")
          .attr("xlink:href","imgs/ll.gif")
          .attr("x", 1250)
          .attr("y", 270)
          .attr("width", 200)
          .attr("height", 200)
          .attr("opacity",1)
        ;
  neg.append("text")
          .text("Feel ANXIOUS 🤯")
          .attr("x", 1250)
          .attr("y", 470)
          .attr("font-size",20)
          .attr("fill","#f9a9a9")
          .attr("font-family","Bradley Hand")
        beg
          .transition()
          .duration(120)
          .attr("opacity",0.1);
          con
          .transition()
          .duration(120)
          .attr("opacity",0)
          ;
}
function conclusion(){
       con
        .attr("xlink:href","imgs/ssuu.png")
        .attr("x", 450)
        .attr("y", 0)
        .attr("width", 250)
        .attr("height", 250)
        .attr("opacity",0.3)
    con.transition()
       .duration(1200)
       .attr("width", 500)
       .attr("height", 500)
       .attr("opacity",1)

  beg
  .transition()
  .duration(120)
  .attr("opacity",0.1)
  ;
  neg
  .transition()
  .duration(120)
  .attr("opacity",0.1)
  ;


}
document.getElementById("pros").addEventListener("click", benefit);
document.getElementById("cons").addEventListener("click", se);
document.getElementById("con").addEventListener("click", conclusion);
