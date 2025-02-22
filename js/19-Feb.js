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

// let jsonData = {
//     users: [
//         {
//             name: "Shubham Jain",
//             userName: "shubham123",
//             profile: {
//                 email: "shubham@gmail.com",
//                 age: "100"
//             },
//             posts: ["Post1", "Post2", "Post3"]
//         },
//         {
//             name: "Ankit",
//             userName: "ankit123",
//             profile: {
//                 email: "ankit@gmail.com",
//                 age: "100"
//             },
//             posts: ["AnkitPost1", "AnkitPost2", "AnkitPost3"]
//         },
//         {
//             name: "Kamal",
//             userName: "Kamal123",
//             profile: {
//                 email: "Kamal@gmail.com",
//                 age: "100"
//             },
//             posts: ["KamalPost1", "KamalPost2", "KamalPost3"]
//         },
//     ]
// }

// let userDetails;

// function getUserDetail(){
//     let filteredData = jsonData.users.map((item)=>{
//         let newObj = {};
//         newObj.name = item.name;
//         newObj.userName = item.userName;
//         return newObj
//     });
//     setTimeout(()=>{
//         userDetails  = filteredData;
//     },4000);
// }

// getUserDetail();

// let profileData;

// function getProfileDetail(user){
//     let filteredData = jsonData.users.filter((item)=>{
//         return item.userName === user;
//     });

//     setTimeout(()=>{
//         profileData = filteredData[0].profile;
//         console.log(profileData);
//     },3000);
// }

// userDetails.forEach((element) => {
//     getProfileDetail(element.userName);
// });

// function getUserDetail(callback){
//     setTimeout(()=>{
//         let filteredData = jsonData.users.map((item)=>{
//                     let newObj = {};
//                     newObj.name = item.name;
//                     newObj.userName = item.userName;
//                     return newObj
//                 });
//         callback(filteredData);
//     },4000);
// }

// function getProfileDetails(user , callback){
//     setTimeout(()=>{
//         let profileData = jsonData.users.filter((item)=>{return item.userName === user});
//         callback(profileData[0].profile);
//     },3000)
// }

// function getPostsDetails(user ,  callback){
//     setTimeout(()=>{
//         let postsData = jsonData.users.filter((item)=>{return item.userName === user});
//         callback(postsData[0].posts);
//     });
// }


// getUserDetail((data)=>{
//     data.forEach((element) => {
//         getProfileDetails(element.userName , (profile)=>{
//             console.log(`Profile for ${element.name}`,profile);
//             getPostsDetails(element.userName , (post)=>{
//                 console.log(`Post for ${element.name}`,post);
//             })
//         })
//     });
// })

// Promises - object

// function getUserDetail() {
//     return new Promise((resolve, reject) => {
//         let random = Math.floor(Math.random()*100);
//         setTimeout(() => {
//             if(random%2===0){
//                 let filteredData = jsonData.users.map((item) => {
//                     let newObj = {};
//                     newObj.name = item.name;
//                     newObj.userName = item.userName;
//                     return newObj
//                 });
//                 resolve(filteredData);
//             }else{
//                  reject("Error");
//             }
//         }, 2000);
//     })
// }

// function getProfileDetail(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let profileData = jsonData.users.filter((item) => { return item.userName === user });
//             resolve(profileData[0].profile);
//         }, 1000)
//     })
// }

// let userDetail = getUserDetail();

// userDetail
//     .then((data) => {
//         let profileDetails = data.map((element) => {
//             return getProfileDetail(element.userName);       
//         });
//         Promise.all(profileDetails)
//         .then((result)=>{console.log(result)})
//         .catch((error)=>{console.log(error)});
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// let promiseArray = [new Promise((resolve , reject)=>{resolve("Hello Grras")}) , new Promise((resolve , reject)=>{resolve("Hello MENR")}), new Promise((resolve , reject)=>{reject("Error")})];

// Promise.all(promiseArray)
// .then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)});