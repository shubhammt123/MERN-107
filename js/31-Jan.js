// var sumOfOddArrayElements = (arr)=>{
 
// 	let sum = 0;
// 	let brr = [];
// 	let j = 0;
// 	for(let i =0; i< arr.length; i++){
// 		if(arr[i]%2 !==0 ){
// 			sum += arr[i];
// 		}
// 		else{
// 		brr[j] = arr[i];
// 		j++;
// 		}
// 	}
 
// 	console.log(`Sum of all odd elements are : ${sum} and Even Elements are ${brr}`);
//     console.log(brr);
 
// }
 
// sumOfOddArrayElements([10, 44, 33, 47, 51, 90, 93, 103, 121])

// callbacks

// function sum(){

// }

// function greet(name){

//     // console.log(`Hello ${name},Welcome to Grass!`)
//     return name;
// }


// console.log(greet("shubham"));
// console.log(greet);

// console.log(greet("Shubham"));
// console.log(greet("Kapil"));

// Callbacks

// functions which can be passed in other function parameter or argument

// function sum(x , y ,callback){ 
//    return callback(x , y);
// }

// function sumCallback(a,b){
//     // console.log(a+b)
//     return a + b;
// }

// sum(432332,897975, sumCallback); // sum(undefined)
// console.log(sum(432332,897975, sumCallback))

// WAF processNumbers that takes an array of numbers and a callback. the callback should add 5 to each number and return the update array.

// function processNumbers(arr , callback){
//     return callback(arr);
// }

// function processNumbersCallback(numbersArr){
//     let updateArr = [];
//     for(let i = 0 ; i < numbersArr.length ; i++){
//         updateArr[i] = numbersArr[i] + 5;
//     }
//     return updateArr;
// }

// let updatedProcessedNumbers = processNumbers([10,20,12,43,54,23,65,98,67,90] , processNumbersCallback);
// console.log(updatedProcessedNumbers);

// WAF that takes an array and return the sum of all the elements of array;

// function sum(arr){
//     let total = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         total += arr[i];
//     }
// }

// let cartData = [
//     {
//         productName : "Iphone",
//         productPrice : 499
//     },
//     {
//         productName : "Oneplus",
//         productPrice : 299
//     },
//     {
//         productName : "Samsung",
//         productPrice : 399
//     },
//     {
//         productName : "Nothing",
//         productPrice : 399
//     },
// ];

// function totalOfCartPrice(data){
//     let total = 0;
//     for(let i = 0 ; i < data.length ;  i++){
//         total += data[i].productPrice;
//     }
//     return total;
// }

// let totalPayment =  totalOfCartPrice(cartData);

// console.log(totalPayment);

// callbacks

// WAF processNumbers that takes an array of numbers and a callback. the callback should add 5 to each number and return the update array.

// function processNumbers(arr , callback){
//     return callback(arr);
// }




// processNumbers([10,20,12,43,54,23,65,98,67,90] ,  (numbersArr)=>{
//     let updateArr = [];
//     for(let i = 0 ; i < numbersArr.length ; i++){
//         updateArr[i] = numbersArr[i] + 5;
//     }
//     return updateArr;
// });
