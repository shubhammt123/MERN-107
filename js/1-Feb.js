// Spread operators and rest operators
// ...                  ...

// let arr1 = [10,20,30,40,50];

// let arr2 = [10,20,30,40,50];

// arr2[5] = 1000;

// console.log(arr1);
// console.log(arr2);


// let arr3 = [100,200,300,400,500];

// let arr4 = arr3;

// console.log(arr3);
// console.log(arr4);

// console.log(arr3 == arr4);

// arr4[5] = 1000;

// console.log(arr3);
// console.log(arr4);

// let obj1 = {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// let obj2 = obj1

// obj2.gender = "Male";

// console.log(obj1);
// console.log(obj2);

// console.log(obj1 == obj2)

// let data = [
//     {
//         productName : "Iphone",
//         productPrice : 1000
//     },
//     {
//         productName : "Samsung",
//         productPrice : 800
//     },
//     {
//         productName : "Nothing",
//         productPrice : 600
//     },
//     {
//         productName : "OnePlus",
//         productPrice : 500
//     }
// ];

// let modifiedData = [...data];

// console.log(modifiedData == data);

// modifiedData[4] = {
//     productName : "Vivo",
//     productPrice : "400"
// }


// console.log("Modified Data :", modifiedData);
// console.log("Original Data :",data);

// let arr1 = [10,20,30];
// let arr2 = [100,200,300];

// let arr3 = [];

// let arr3 = [...arr1 ,"shubham", ...arr2 ,"Jain" ];

// console.log(arr3);

// arr1[4] = 1000;
// console.log(arr1);

// for(let i = 0 ; i < (arr1.length) ; i++ ){
    
//         arr3[i]  = arr1[i];
//         arr3[i+arr1.length] = arr2[i];
// }

// console.log(arr3);

// let obj1 = {
//     firstName : "shubham",
//     lastName : "Jain"
// };

// let obj2 = {
//     gender : "Male",
//     age : "100",
//     firstName : "Kapil"
// }



// let arr1 = [10,20,30];

// let obj3 = {...obj1 , ...obj2 , firstName : "Manoj" };

// console.log(obj3);

// Rest Operator 

// let arr = [10,20,30,40,50];

// Destructuring

// let [firstValue,  , ...a] = arr;


// console.log(firstValue);
// console.log(a);
// let firstValue = arr[0];
// let thirdValue = arr[2];
// let fifthValue = arr[4];

// console.log(firstValue);
// console.log(thirdValue);
// console.log(fifthValue);

let obj = {
    firstName : "Shubham",
    lastName : "Jain",
    gender : "Male",
    age : "100",
    address  : "Jaipur"
}

let { age ,  firstName , ...obj2 } = obj; // let firstName = obj.firstName;

console.log(firstName);
console.log(age)

console.log(obj2);

// WAF sum to add all the given numbers

function sum(...numbers){
    console.log(numbers);
}

sum(10,20);
sum(100,200,300,400);
sum(323,4,32,21,2,23,2311,212);