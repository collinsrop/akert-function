"use strict";
//STYLES
document.querySelector("body").style.backgroundColor ="black";
document.querySelector("body").style.color="white";
// div positioning
document.querySelector("div").style.position = "absolute";
document.querySelector("div").style.top="50%";
document.querySelector("div").style.left="50%";
document.querySelector("#btn").style.marginTop="20%";
document.querySelector("#b2").style.marginTop="15%";
document.querySelector("#b2").style.marginLeft="50%";
//FUNCTIONALITY
document.addEventListener("DOMContentLoaded",allFunctions);

function allFunctions(){
    document.querySelector("#btn").addEventListener("click",citeName);
    function citeName(){
       let y = document.querySelector("#nm").value;
       alert(`Hello ${y}?`);
    }
    document.querySelector("#b2").addEventListener("click",changeBackground);
    function changeBackground(){
      if (document.querySelector("body").style.backgroundColor=="black"){
        document.querySelector("body").style.backgroundColor="blue";
    }else if (document.querySelector("body").style.backgroundColor=="blue"){
        document.querySelector("body").style.backgroundColor="green";
    }else {
       document.querySelector("body").style.backgroundColor="black";
    }
    
}
}





