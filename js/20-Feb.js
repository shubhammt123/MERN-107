// function fetchData(callback){
//     let data = {name : "shubham",email : "shubham@gmail.com"}
//     setTimeout(()=>{
//         callback(data);
//     },2000);
// }

// function fetchProfileDetails(username , callback){
//     setTimeout(()=>{
//         callback({age : "100",gender : "Male",address : "Jaipur"});
//     },1000)
// }

// fetchData((userData)=>{
//     console.log(userData)
//     fetchProfileDetails(userData.name ,  (profileData)=>{
//         console.log(`Profile Data for ${userData.name}`,profileData);
//     })
// });

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         let data = { name: "shubham", email: "shubham@gmail.com" };
//         setTimeout(() => {
//             resolve(data);
//         }, 2000);
//     })
// }

// function fetchProfileDetails(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({ age: "100", gender: "Male", address: "Jaipur" });
//         }, 1000)
//     })
// }

// fetchData()
// .then((res)=>{
//     console.log(res);
//     return fetchProfileDetails(res.name)
// })
// .then((profileData)=>{
//     console.log(profileData);
// })
// .catch((error)=>{console.log(error)});

// console.log("Hello Grras");

// async / await

// async function fetchUserData() {
//     try {
//         const userData = await fetchData();
//         console.log(userData);
//         const profileData = await fetchProfileDetails(userData.name);
//         console.log(profileData);
//     } catch (error) {
//         console.log("Error Received",error);
//     }
// }

// fetchUserData();

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{console.log(error)});


// const fetchData = async ()=>{
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//         let myDiv = document.getElementById("container");
//         data.forEach((element) => {
//             let newDiv = document.createElement("div");
//         newDiv.innerHTML = `<h2>${element.userId}</h2><p>${element.title}</p>`;
//         newDiv.style.padding =   "20px";
//         newDiv.style.background = "skyblue";
//         newDiv.style.borderRadius = "10px";
//         myDiv.appendChild(newDiv);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData();
