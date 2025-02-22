// Events

// let number1 =  document.getElementById("number1").value;
// let number2 = document.getElementById("number2").value;

// function sum(){
//     let number1 =  document.getElementById("number1").value;
// let number2 = document.getElementById("number2").value;
//     console.log(number1 + number2);
//     let newHeading = document.createElement("h2");
//     newHeading.innerText = +number1 + +number2;
//     document.getElementById("result").appendChild(newHeading);
// }

// function sub(){
    
//     console.log(number1 - number2);
// }




// document.getElementById("button1").onclick = sum;
// document.getElementById("button2").onclick = function(){
//     let number1 =  document.getElementById("number1").value;
// let number2 = document.getElementById("number2").value;
// console.log(number1 - number2)
// }

// let buttons = document.getElementsByClassName("button");

// for(let i = 0 ; i < buttons.length ; i++){
//     buttons[i].onclick = function(){
//         let number1 =  document.getElementById("number1").value;
// let number2 = document.getElementById("number2").value;
// console.log(number1 + number2)
//     }
// }

// document.getElementById("button").addEventListener("click",function(){
//     console.log("Event Listner Hello Grras");
// })

// document.getElementById("button").onclick = function(){
//     console.log("Hello Grras");
// }

// let color = "blueviolet"

// document.getElementById("container").addEventListener("click",function(e){
//     console.log(e);
//     if(color === "blueviolet"){
//         document.getElementById("container").style.background = "orange";
//         color = "orange";
//     }else{
//         document.getElementById("container").style.background = "blueviolet";
//         color = "blueviolet";
//     }
    
// })

// let event1 = "mouseenter";
// let func = function(e){
//     console.log(e);
//     if(event1 === "mouseenter"){
//         document.getElementById("container").style.background = "blue";
//         event1 = "mouseleave";
//     }else{
//         document.getElementById("container").style.background = "blueviolet";
//         event1 = "mouseenter";
//     }
// }

// document.getElementById("container").addEventListener("mouseenter",func)
// document.getElementById("container").addEventListener("mouseleave",func)

// document.getElementById("input").addEventListener("input",function(event){
//     console.log(event.target.value);
// })

// document.getElementById("input").oninput = function(e){
//     console.log(e.target.value);
// }

// document.getElementById("loginForm").addEventListener("submit",function(e){
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     console.log("Email :", email)
//     console.log("Password :", password)
// })

// event delegation
// let mydiv = document.getElementById("container");

// mydiv.addEventListener("click",function(){
//     mydiv.style.borderStyle = "solid";
//     mydiv.style.borderWidth = "4px";
//     mydiv.style.borderColor = "black";
// })