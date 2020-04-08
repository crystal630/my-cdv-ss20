// global variables that we need at various spots:
let w = 800;
let h = 500;
let padding = 50;

// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

let allNames = data.map(function(d){return d.key});
// check it:
console.log(allNames);

let xScale = d3.scaleBand()
    .domain(allNames)
    .range([padding, w-padding])
    .paddingInner(0.1)
;
// create a visual axis corresponding to the scale.
let xAxis = d3.axisBottom(xScale)

xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
// create a group to hold all the axis elements
let xAxisGroup = viz.append("g").classed("xAxis", true);
// tell d3 to put the axis into place
xAxisGroup.call(xAxis);
// modfy the axis label (the emoojis) size
xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
// get rid of the little tick lines
xAxisGroup.selectAll("line").remove();
// bring axis to the correct y position
xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")")


// Y SCALE
// we will not show a y axis in this graph, but still need a scale
// to make sure our bars have heights that fit the window. It's
// familiar linear scale.
let yMax = d3.max(data, function(d){return d.value});
// I decided not to use the minimum value of the dataset,
// because otherwise the smallest value's bar would always be 0 pixels
// high and therefore invisible.
yDomain = [0, yMax];
// "hey d3 i need a linear scale please. yeah! I want to supply a value
// to it that is between 0 and yMax and want one back that fits between
// my graph's paddings. Cheers!"
let yScale = d3.scaleLinear().domain(yDomain).range([0, h-padding*2]);

// the ACTUAL GRAPH
// before we get to the actual graph, we make a group element into which to
// put all visual graph things:
let graphGroup = viz.append("g").classed("graphGroup", true);
// btw, this:
// .classed("graphGroup", true);
// is almost equivalent to
// .attr("class", "graphGroup");
// but slightly more advanced. you can find a description here:
// https://github.com/d3/d3-selection#selection_classed


// now comes the interesting part, WATCH OUT! i'll go slow
// we have the page (with nothing on it) and we have data
// we *toss* it both to D3 and let it do its evaluation about
// how many elements need to enter/update/exit.
let elementsForPage = graphGroup.selectAll(".datapoint").data(data);
// note, we do not use ".enter()" for now. let's have a close look
// at just this (the situation) for now
// as we have learned, D3 did some kind of calculation here, some weighing
// of what is on the page already and what needs to go there.
// have a close look at this console.log:
console.log("D3's assessment of whats needed on the page:", elementsForPage);

let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
// and again, look closely:
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);

let enteringDataGroups = enteringElements.append("g").classed("datapoint", true);
// position the group along the x axis (check the inspector tool to see
// what we are doing):
enteringDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
// then append rectangles to them and position/size them:
enteringDataGroups
  .append("rect")
    .attr("width", function(){
      // the scaleBand we are using
      // allows us to as how thick each band is:
      return xScale.bandwidth();
    })
    .attr("height", function(d, i){
      // the idea is that we make the bar
      // as high as dictated by the value...
      return yScale(d.value);
    })
    .attr("y", function(d,i){
      // ...and then push the bar up since it
      // is drawn from top to bottom
      return -yScale(d.value);
    })
    .attr("fill", "black")
;
function update(){

  allNames = data.map(function(d){return d.key});
  // and adjust the domain of xScale:
  xScale.domain(allNames);
  // done, the xScale is "fixed" and ready to help us to position elements
  // for our new data

  // as you can see, we only adjust selectively the bits that depend
  // on our data. the same is true for the axis:
  xAxis = d3.axisBottom(xScale); //we adjust this because it uses the new xScale
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;}); // we adjust this because it uses the new data
  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18); // we adjust this to bring the new axis onto the page
  // get rid of the little tick lines
  xAxisGroup.selectAll("line").remove();
  // bring axis to the correct y position
  xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")")

  // y scale...
  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);

  // do you see how the axis adjusts to the new data at this point? you can animate
  // this transition inside the statement where you use ".call(xAxis)"...
  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);
  enteringElements = elementsForPage.enter();
  exitingElements = elementsForPage.exit();

  // try it
  // oh my, it works. You can animate the transition in the same way as you did
  // with the x axis before



}
// binding functions to the buttons on the page
// the functions we use to do the actual work are defined in dataManager.js
function add(){
  addDatapoints(1);
  // we add new code below:

//UPDATE BARS

// we add new code below:
console.log("new data", data)

elementsForPage = graphGroup.selectAll(".datapoint").data(data);
   update();
    elementsForPage.transition().duration(1000).attr("transform", function(d, i){//horizontal
       return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
     });
     elementsForPage.select("rect")
      .attr("fill","black")
      .transition()
      .delay(100)
      .duration(2000)//vertical
      .attr("width", function(){
         return xScale.bandwidth();
      })
      .attr("y", function(d,i){
        return -yScale(d.value);
      })
      .attr("height", function(d, i){
        return yScale(d.value);
      })
     ;

// note, we don't need "let" because the variable elementsForPage already exists
console.log(elementsForPage);

let incomingDataGroups = enteringElements
  .append("g")
    .classed("datapoint", true)
;
// position the groups:
incomingDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});

 incomingDataGroups
  .append("rect")
    .attr("y", function(d,i){
      return 0;
    })
    .attr("height", function(d, i){
      return 0;
    })
    .attr("width", function(){
      return xScale.bandwidth();
    })
    .transition()
    .delay(120)
    .duration(2000)//pink
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
    .attr("fill", "#F27294")
 ;
}
document.getElementById("buttonA").addEventListener("click", add);

function remove(){
  removeDatapoints(1);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data, function(d){
    return d.key;
    console.log(d.name)
  });
  update();
  // oh my, it works. You can animate the transition in the same way as you did
  // with the x axis before
  elementsForPage.transition().duration(1000).attr("transform", function(d, i){
     return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
   });

   elementsForPage.select("rect")
    // .attr("fill","black")
    .transition()
    .delay(120)
    .duration(2000)
    .attr("width", function(){
       return xScale.bandwidth();
    })
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
   ;


     let exitingDataGroups = exitingElements.select("rect")
      .attr("transform", function(d, i){
      return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
    });
        exitingDataGroups
         .attr("fill","blue")
         .transition()
         .delay(120)
         .duration(2000)

         .attr("y", function(d,i){
           return 0;
         })
         .attr("height", function(d, i){
           return 0;
         })



     ;
     exitingElements.transition().delay(200).duration(120).remove()
     //after changing



     // position the groups:





}
document.getElementById("buttonB").addEventListener("click", remove);

function removeAndAdd(){
  // removeAndAddDatapoints(1,1);
  addDatapoints(3);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
      elementsForPage.transition().duration(1000).attr("transform", function(d, i){//horizontal
         return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
       });
         update();
         elementsForPage.select("rect")
          .attr("fill","black")
          .transition()
          .delay(100)
          .duration(2000)//vertical
          .attr("width", function(){
             return xScale.bandwidth();
          })
          .attr("y", function(d,i){
            return -yScale(d.value);
          })
          .attr("height", function(d, i){
            return yScale(d.value);
          })
         ;
       incomingDataGroup = enteringElements
         .append("g")
           .classed("datapoint", true)
       ;
       // position the groups:
       incomingDataGroup.attr("transform", function(d, i){
         return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
       });

        incomingDataGroup
         .append("rect")
           .attr("y", function(d,i){
             return 0;
           })
           .attr("height", function(d, i){
             return 0;
           })
           .attr("width", function(){
             return xScale.bandwidth();
           })
           .transition()
           .delay(120)
           .duration(2000)//pink
           .attr("y", function(d,i){
             return -yScale(d.value);
           })
           .attr("height", function(d, i){
             return yScale(d.value);
           })
           .attr("fill", "#F27294")
        ;
        removeDatapoints(3);
        elementsForPage = graphGroup.selectAll(".datapoint").data(data,function(d){
          return d.key;
          console.log(d.name)
        });
      update();
        // oh my, it works. You can animate the transition in the same way as you did
        // with the x axis before
        elementsForPage.transition().duration(1000).attr("transform", function(d, i){
           return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
         });

         elementsForPage.select("rect")
          // .attr("fill","black")
          .transition()
          .delay(120)
          .duration(2000)
          .attr("width", function(){
             return xScale.bandwidth();
          })
          .attr("y", function(d,i){
            return -yScale(d.value);
          })
          .attr("height", function(d, i){
            return yScale(d.value);
          })
         ;


           let exitingDataGroups = exitingElements.select("rect")
            .attr("transform", function(d, i){
            return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
          });
              exitingDataGroups
               .attr("fill","blue")
               .transition()
               .delay(120)
               .duration(2000)

               .attr("y", function(d,i){
                 return 0;
               })
               .attr("height", function(d, i){
                 return 0;
               })



           ;
           exitingElements.transition().delay(120).duration(120).remove()


}
document.getElementById("buttonC").addEventListener("click", removeAndAdd);

function sortData(){
  sortDatapoints();
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
     update();
      elementsForPage.transition().duration(1000).attr("transform", function(d, i){//horizontal
         return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
       });
       elementsForPage.select("rect")
        .attr("fill","black")
        .transition()
        .delay(100)
        .duration(2000)//vertical
        .attr("width", function(){
           return xScale.bandwidth();
        })
        .attr("y", function(d,i){
          return -yScale(d.value);
        })
        .attr("height", function(d, i){
          return yScale(d.value);
        })
       ;

}
document.getElementById("buttonD").addEventListener("click", sortData);

function shuffleData(){
  shuffleDatapoints();
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
     update();
      elementsForPage.transition().duration(1000).attr("transform", function(d, i){//horizontal
         return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
       });
       elementsForPage.select("rect")
        .attr("fill","black")
        .transition()
        .delay(100)
        .duration(2000)//vertical
        .attr("width", function(){
           return xScale.bandwidth();
        })
        .attr("y", function(d,i){
          return -yScale(d.value);
        })
        .attr("height", function(d, i){
          return yScale(d.value);
        })
       ;

}
document.getElementById("buttonE").addEventListener("click", shuffleData);

function clearData(){
 removeDatapoints(data.length);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data, function(d){
    return d.key
  });
     update();
      elementsForPage.transition().duration(1000).attr("transform", function(d, i){//horizontal
         return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
       });
       elementsForPage.select("rect")
        .attr("fill","black")
        .transition()
        .delay(100)
        .duration(2000)//vertical
        .attr("width", function(){
           return xScale.bandwidth();
        })
        .attr("y", function(d,i){
          return -yScale(d.value);
        })
        .attr("height", function(d, i){
          return yScale(d.value);
        })
       ;
         let clearDatapoints=exitingElements.select("rect")
            .attr("transform",function(d, i){
            return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
          });
          clearDatapoints

            .transition()
            .delay(120)
            .duration(2000)
            .attr("width", function(){
               return xScale.bandwidth();
            })
            .attr("y", function(d,i){
              return 0;
            })
            .attr("height", function(d, i){
              return 0;
            })

clearDatapoints.transition().delay(120).duration(120).remove()


}
document.getElementById("buttonF").addEventListener("click", clearData);
