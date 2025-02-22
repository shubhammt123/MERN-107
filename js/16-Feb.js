// let myDiv = document.getElementById("container");

// myDiv.addEventListener("mouseenter",function(){
//     myDiv.style.borderRadius = "50px";
// })
// myDiv.addEventListener("mouseleave",function(){
//     myDiv.style.borderRadius = "0px";
// })

// document.getElementById("container").addEventListener("click",function(){
//     console.log("Container clicked");
// })

// document.getElementById("addToCart").addEventListener("click",function(e){
//     e.stopPropagation();
//     console.log("Add to cart button clicked");
// })
// event delegation
// event bubbling
// event capturing
// event target

// document.getElementById("parent-list").addEventListener("click",function(e){
//     // e.stopPropagation();
//     console.log("Parent List clicked");
// },false);

// document.getElementById("waterfall").addEventListener("click",function(e){
//     e.stopPropagation();
//     console.log("Waterfall Image Clicked");
// })

// async js

// Timer Functions

// setTimeOut

// setTimeout(()=>{
//     console.log("Hello World");
// },2000);

// interval

// let interval  = setInterval(()=>{
//     let random = Math.random();
//     console.log(random)
// },2000);

// setTimeout(()=>{
//     clearInterval(interval);
// },10000);

// let a;

// console.log(a);

// a = 100;

// console.log(a);


// console.log("First Step");

// setTimeout(()=>{
//     console.log("Second Step");
// });

// console.log("Third Step");

// console.log("Fourth Step");

let jsonData = {
    users : [
        {
            name : "Shubham Jain",
            userName : "shubham123",
            profile : {
                email : "shubham@gmail.com",
                age : "100"
            },
            posts : ["Post1","Post2","Post3"]
        },
        {
            name : "Ankit",
            userName : "ankit123",
            profile : {
                email : "ankit@gmail.com",
                age : "100"
            },
            posts : ["AnkitPost1","AnkitPost2","AnkitPost3"]
        },
        {
            name : "Kamal",
            userName : "Kamal123",
            profile : {
                email : "Kamalgmail.com",
                age : "100"
            },
            posts : ["KamalPost1","KamalPost2","KamalPost3"]
        },
    ]
}

function getUserDetail(){
    let filteredData = jsonData.users.map((item)=>{
        let newObj = {};
        newObj.name = item.name;
        newObj.userName = item.userName;
        return newObj
    });
    setTimeout(()=>{
        console.log(filteredData);
    },4000);
}

getUserDetail();