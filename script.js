let input = document.querySelector("input");
let apply = document.querySelector("button");
let red =  document.querySelector("#red");
let green =  document.querySelector("#green");
let blue =  document.querySelector("#blue");
let yellow =  document.querySelector("#yellow");
let divs = document.querySelectorAll(".colorChange");
let color;

function changeBeckground(){

    color= input.value;
    console.log(color);
    
   document.body.style.backgroundColor="#"+color;
}

function changeColor()
{
    console.log(this.id);
    document.body.style.backgroundColor=this.id
}


divs.forEach(function(div)            {
    
    div.addEventListener("click",changeColor);
})
apply.addEventListener("click",changeBeckground);
/*red.addEventListener("click", changeColor)
green.addEventListener("click", changeColor)
blue.addEventListener("click", changeColor)
yellow.addEventListener("click", changeColor)*/



