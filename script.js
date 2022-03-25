var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("Gradient");
var CSS=document.querySelector("h3");

// function GetGradient(){
// 	body.style.background="linear-gradient(to right," + color1.value +"," + color2.value +")" ;
// 	CSS.textContent=body.style.background+ " " ;
// }
// color1.addEventListener("input",GetGradient);
// color2.addEventListener("input",GetGradient);

color1.addEventListener("input",GetGradient);
color2.addEventListener("input",GetGradient);
function GetGradient(){
	body.style.background= "linear-gradient(to right,"+color1.value+ ","+color2.value+")";
	CSS.textContent = body.style.background + " ";
}
