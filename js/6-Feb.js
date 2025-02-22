// filter

// let arr = [10,20,31,40,50,61,77];

// let newArr = arr.filter((item)=>{
//         return item > 100;
// });

// console.log(newArr);

// reduce

// let cartData = [
//     {
//         productName : "Iphone",
//         productCategroy : "smartphone",
//         productPrice :  1000,
//         qunatity : 2
//     },
//     {
//         productName : "Samsung",
//         productCategroy : "smartphone",
//         productPrice : 800,
//         qunatity : 100
//     },
//     {
//         productName : "Oneplus",
//         productCategroy : "smartphone",
//         productPrice : 600,
//         qunatity : 10
//     },
//     {
//         productName : "Nothing",
//         productCategroy : "smartphone",
//         productPrice : 600,
//         qunatity : 20
//     },
// ]

// let arr = [10,20,30,40,50,60,70];

// let result = arr.reduce((acc , curr)=>{
//     console.log("Acc" , acc);
//     console.log("Curr ", curr);
//     console.log("----------Iteration Completed----------");
//     return acc + curr;
// },1000);

// console.log("Result :",result);


//   Acc    curr
//    0   +  10
//    10  +  20
//    30

// let totalCartValue = cartData.reduce((acc , curr)=>{
//     console.log("acc :",acc);
//     console.log("curr :",curr);
//     return acc + curr.productPrice*curr.qunatity;
// },0);

// console.log("Total Cart :",totalCartValue);

// find

// let arr = [10,20,30,40,50,60,70];

// let result = arr.find((item)=>{
//     return item > 30
// });

// console.log(result);

// let arr = [10,20,30,41,50,60,70];

// let result = arr.every((item)=>{
//     return item%2===0;
// });

// console.log(result);
// let arr = [11,21,31,41,51,61,71];

// let result = arr.some((item)=>{
//     return item%2===0;
// });

// console.log(result);

// let arr = [10,20,30,40,50];

// arr.fill("Hello" , 2 , 4);

// console.log(arr);


let arr = [10,20,30,40,[200,300,400,["Hello","Grras"]],[1000,2000,3000]];

let newArr = arr.flat(2);

console.log(newArr);