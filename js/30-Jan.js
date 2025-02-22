// break & continue

// for(let i = 0 ; i < 10 ; ++i){
//     console.log("The value of i is :",i);
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }

// console.log("Hello Grras");

// functions in js

// let x = 5;

// let a = ++x;

// console.log("The value of x is :",x);
// console.log("The value of a is :",a);

// let firstNumber = 10;
// let secondNumber = 20;
// let ThirdNumber = 30;

// console.log(firstNumber + secondNumber + ThirdNumber);

// firstNumber = 100;
// secondNumber = 300;
// ThirdNumber = 500;

// console.log(firstNumber + secondNumber + ThirdNumber);


// let arr = [10,20,30,40,50];
// let sum = 0;


// for(let i = 0 ; i < arr.length ; i++){
//     sum += arr[i];
// }

// console.log(sum);


// let arr2 = [21,32334,434,4355,56767];
// let sum1 = 0;

// for(let i = 0 ; i < arr.length ; i++){
//     sum1 += arr2[i];
// }

// console.log(sum1);


// functions

// function decleration

// function greet(name){
//     console.log(`Hello Grras, My Name is ${name}`);
// }

// greet("Shubham Jain");
// greet("Manoj Jain");
// greet("Kapil");
// greet("Sagar");
// greet("Ankit");
// greet("Mukesh");
// greet("Kartik");
// greet();
// greet();
// greet();
// greet();


// function sum(){
//     console.log(a + b);
// }

// sum(324,767);
// sum(122,343);

// write a function to find sum of even numbers below n;
// write a function to find sum of even numbers below 100;

function sumOfEveneNumbers(n){
    let sum = 0;
    for(let i = 0 ; i <= n ; i++){
        if(i%2===0){
            sum += i;
        }
    }
    console.log(sum);
}

// sumOfEveneNumbers(200);
// sumOfEveneNumbers(100);

// let a = 20;

// function expressions

// let sum = function(a,b){
//     console.log(a+b);
// }

// sum(10,20);
// sum(50,100);

// wap to find sum of all elements of a given array.

// let sumOfElementsOfArray = function (arr){
//     let sum = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         sum += arr[i]
//     }
//     console.log(sum);
// }

// sumOfElementsOfArray([212,34,234,23,232,3,24,33,23,232,32,3,232,3]);
// sumOfElementsOfArray([10,21]);
// sumOfElementsOfArray([21]);
// sumOfElementsOfArray([21,32,432,32]);


// Arrow functions

// let sum = function(a,b){
//     console.log(a+b);
// }

// let sum = ()=>{

// }

// WAP to find the sum of even numbers in given array;

// let sumOfEvenNumbersOfArray = (arr)=>{
//     let sum = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i]%2 === 0){
//             console.log(arr[i])
//             sum  += arr[i]
//         }
//     }
//     console.log(sum);
// }

// sumOfEvenNumbersOfArray([10,212,2223,4332,545,565,654,543]);

// WAP to find the sum of all the odd numbers of given array and also store the all even numbers in new array.