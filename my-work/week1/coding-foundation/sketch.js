var div=document.getElementById("1");
console.log(div)
function create(){
num=document.getElementById("num").value
div.innerHTML=""
console.log(num)
for(i=1;i<=num;i++){
  var btn=document.createElement("BUTTON")
    btn.setAttribute('id','rect')
    div.appendChild(btn)


}


}
