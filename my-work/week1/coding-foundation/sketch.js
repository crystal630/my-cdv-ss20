
function create(){
num=document.getElementById("num").value
console.log(num)
for(i=1;i<=num;i++){
  var btn=document.createElement("BUTTON")
  document.body.appendChild(btn)
  btn.setAttribute('id','rect')
}
}
