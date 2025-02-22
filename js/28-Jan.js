// Control Flow Statements

// conditional statements
// loops

// if-else
// switch cases

// if-else

// let number = 30;

// if(number>=30){
//     console.log("The number is grater than 30");
// }

// let number = 122;

// if(number%2 === 0){
//     console.log("The number is even")
// }else{
//     console.log("The number is odd");
// }

// let marks = 102;

// if(marks<=100 && marks>=90){
//     console.log("Grade : A+");
// }else if( marks < 90 && marks >= 80){
//     console.log("Grade : A");
// }else if(marks <80 && marks >= 70){
//     console.log("Grade : B");
// }else if(marks < 70 && marks >= 60){
//     console.log("Grade : C");
// }else if( marks < 60  && marks >= 50){
//     console.log("Grade : D");
// }else if(marks < 50){
//     console.log("Grade : F");
// }else{
//     console.log("Invalid Marks");
// }


// Switch Cases

// let day = "Saturday";

// switch(day){
//     case "Monday":
//         console.log("First Day of the week");
//         break;
//     case "Tuesday":
//         console.log("Second Day of week");
//         break;
//     case "Wednesday":
//         console.log("Third Day of the week");
//         break;
//     case "Thrusday":
//         console.log("Fourth Day of the Week");
//         break;
//     case "Friday":
//         console.log("Fifth Day of the week");
//         break;
//     case "Saturday":
//         console.log("Sixth Day of the week");
//         break;
//     case "Sunday":
//         console.log("Seventh Day of the week");
//         break;
//     default:
//         console.log("Invalid Day");
// }

// let marks = 102;

// if(marks<=100 && marks>=90){
//     console.log("Grade : A+");
// }else if( marks < 90 && marks >= 80){
//     console.log("Grade : A");
// }else if(marks <80 && marks >= 70){
//     console.log("Grade : B");
// }else if(marks < 70 && marks >= 60){
//     console.log("Grade : C");
// }else if( marks < 60  && marks >= 50){
//     console.log("Grade : D");
// }else if(marks < 50){
//     console.log("Grade : F");
// }else{
//     console.log("Invalid Marks");
// }

// let marks = 100;

// Ternory Operator

// marks<= 100 && marks >= 90 ? console.log("Grade : A+") : marks<90 && marks >= 80 ? console.log("Grade : A") : marks < 80 && marks >= 70 ? console.log("Grade : B") : marks < 70 && marks >= 60 ? console.log("Grade : C") : marks < 60 && marks>=50 ? console.log("Grade : D") : marks < 50 ? console.log("Grade : F") : console.log("Invalid Marks");
// let number = 12;

// if(number>=30){
//     console.log("The number is grater than 30");
// }

// number >= 30 && console.log("The number is grater than 30");


// loops
// for - for , forin , forof ,  while , do while

// for 
// for(let i=100;i>0;i--){
//     console.log(i);
// }

// let arr = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];

// let newArr = [];

// for(let i = 0 ; i <=  arr.length - 1 ; i++){
//     newArr[i] = arr[i]**2;
// }

// console.log(newArr)

// for(let i = 100 ; i > 0 ;  i--){
//     console.log(i*10);
// }

// let arr = [19,20,30,41,50,60,70,80,90,100,113,120,135,140,150,160,170,187,193,200];

// let newArr  = [];

// for(let index = 0 ; index < arr.length ; index++ ){
//     if((arr[index] & 1) === 0){
//         console.log(arr[index],"is even number");
//     }
// }

// console.log(newArr);

// let count = 0;

// while(count < 10){
//     console.log("The value of count is",count);
//     count++;
// }

// console.log(count);

// let arr = [19,20,30,41,50,60,70,80,90,100,113,120,135,140,150,160,170,187,193,200];

// let index = 0;

// while(index < arr.length){
//     console.log(arr[index]);
//     index++;
// }

// do-while

// let count = 99;

// do{
//     console.log(count);
//     count++;
// }while(count == 100);

// forin forof


// let arr = [19,20,30,41,50,60,70,80,90,100,113,120,135,140,150,160,170,187,193,200];

// for in

// for(let index in arr){
//     console.log(arr[index]);
// }

// forof

// for(let element of arr){
//     console.log(element)
// }

// let fruits = ["apple","mango","Kiwi","banana","grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

// let numbers = [112,23,3,23,23,23,2,3,232];

// for(let number of numbers){
//     console.log(number);
// }

let obj = {
    firstName : "shubham",
    lastName : "Jain",
    gender : "Male",
    address :  "Jaipur",
    age : "100",
    contactNumber : "1234567890",
    designation : "Senior Software Engineer",
    dept : "Full Stack",
    techStack : "MERN",
    companyName : "Grras",
    key : "jsdjdh"
}

// for(let key in obj){
//     console.log(key , "-" , obj.key)
// }

// key  ---- "firstName"

// let objKeys = Object.keys(obj);
// console.log(objKeys)

// for(let value of obj){
//     console.log(value);
// }

let name = "shubham";

console.log(name[0])