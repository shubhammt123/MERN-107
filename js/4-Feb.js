// Scopes , hoisting -- var let const , array methods
// let firstVariable = "shubham";
// global scope , local scope/functional scope  , block scope

// var - global scope variable but in case of function it becomes local scope or functional scope variable
// let or const - block scope variable

// let a = 20;

// console.log(a);

// console.log(sum);
// sum();

// if(true){
//     console.log(a);
// }

// for(let i = 0 ;i < 10 ; i++){
//     console.log(a);
// }

// for(let i = 0 ; i < 10 ; i++){
    
//     if(true){
//         const a = 20;
//         {
//             console.log(a);
//             {
//                 console.log(a);
//                 {
//                     console.log(a)
//                 }
//             }
//         }
//         console.log(a);
//     }
//     console.log(a);
// }

// console.log("Outside the for loop :",a);


// for(let i = 0 ; i < 10 ; i++){
//     let a = 20;
//     console.log(a);
// }

// console.log(a);




// if(true){
//     const a = 20;
// }

// console.log(a);

// var a = "shubham"
// console.log(a);

// // let a = 20;


// for(let i = 0 ; i < 10 ; i++){
//      a = 20;
//     console.log(a);
// }

// console.log(a);

// for(let i = 0 ; i < 10; i++){
//     var a = "shubham";
// }


// function sum(){
//     var a = 20;
//     console.log(a);
// }

// console.log(a);

// sum();

// var a = {
//     firstName : "shubham"
// }
// console.log(a);


// for(let i = 0 ; i < 20 ; i++){
//     var a  = 20;
//     console.log(a);
// }

// console.log(a);

// for(let j = 0 ; j < 20 ; j++){
//     var a = "Shubham"
//     console.log(a)
// }

// console.log(a);



// hoisting

// let a = "shubham";

// function sum(){
//     console.log("Sum function called");
// }

// sum();

// const sum =  ()=>{
//     console.log("Sum function called");
// }

// Array methods
// push , pop , shift , unshift

// let arr  = [10,20,30,40,50,60];
// console.log(arr);

// let pushReturn = arr.push(1000);
// console.log(pushReturn);

// console.log(arr);

// let popReturn = arr.pop();
// console.log(popReturn);

// console.log(arr);

// let arr  = [10,20,30,40,50,60];

// arr.shift();

// console.log(arr);

// arr.unshift(1000);

// console.log(arr);