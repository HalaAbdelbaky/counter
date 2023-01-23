var numResult=document.getElementsByClassName("num-result")[0];
var count=0;
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387")


function changeColor(){
  if(count<0){
    numResult.style.color="red"
  }
  
  else if(count>0){
    numResult.style.color="green"
  }
  
  else{
    numResult.style.color="black"
  }
}
function decrease(){
  count--
  changeColor()
  numResult.innerHTML=count
}
function increase(){
  count++;
  changeColor()
  numResult.innerHTML=count
}
function reset(){
  count=0;
 changeColor()
  numResult.innerHTML=count
}
