// copywithin , findIndex , flatMap

// copyWithIn

// let arr = [10,20,30,40,50,60,70];

// arr.copyWithin(2 , 0 );

// console.log(arr);

// arr.splice(2 ,  1);

// console.log(arr);

// flatmap

// let arr = [10,21,30,41,50,60,70];

// let newArr = arr.flatMap(item=> {
//    return item%2 === 0 ? [(item*2)**2] : []
// });

// console.log(newArr);

// let arr1 = [10,[],20,[30],[40]];

// let newArr1 = arr1.flat();

// console.log(newArr1);

// findIndex

// let arr = [10,20,30,40,50,60,70];

// let result = arr.findIndex((item)=>{
//     return item %2 !== 0
// });

// console.log(result);

// Object Methods

// let address  = "abcd";

// let person = {
//     firstName : "Shubham",
//     lastName : "Jain",
//     address : "Jaipur",
//     companyName : "Grras",
//     Dept : "FSD"
// };

// console.log(person[address]); //   person.abcd


// let keyValues = Object.keys(person);
// console.log(keyValues);

// // for(let i = 0 ; i < keyValues.length ; i++){
// //     console.log(person[keyValues[i]]);
// // }

// let valuesofObj = Object.values(person);

// console.log(valuesofObj);


// let keyValuePair = Object.entries(person);

// console.log(keyValuePair);

// let  productData = [
//     {
//         productName : "Iphone 16",
//         productCategory : "Smartphone",
//         productPrice : "$1000",
//         quantity : 10,
//     },
//     {
//         productName : "Samsung S24 Ultra",
//         productCategory : "Smartphone",
//         productPrice : "$1500",
//         quantity : 10,
//     },
//     {
//         productName : "Google Pixel 9 Pro",
//         productCategory : "Smartphone",
//         productPrice : "$1400",
//         quantity : 10,
//     },
// ]

// let keys = Object.keys(productData[0]);
// console.log(keys);

const person = {
    firstName : "Shubham",
    lastName : "Jain",
    address : "Jaipur",
    companyName : "Grras",
    Dept : "FSD"
};

// person.gender = "Male";

// console.log(person);

// person.firstName = "Sagar";

// Object.seal(person);
// Object.freeze(person);

// person.firstName = "Sagar";
// person.gender = "Male";

// person  = {};

// console.log(person);


// let isExist = person.hasOwnProperty("gender");

// console.log(isExist);

// let obj =  {
//     firstName : "Shubham",
//     lastName : "Jain"
// }

// Object.assign(obj , {
//     address : "Jaipur",
//     gender : "Male"
// });

// console.log(obj);