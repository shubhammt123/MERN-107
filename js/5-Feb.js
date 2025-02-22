// push , pop , shift , unshift , concat  , slice , splice , indexOf , inclues , reverse , join , sort , map , filter , reduce , find , every , some , fill , copywithin , flat , flatmap , findIndex


// concat
// let arr1 = [10,20,30];
// let arr2 = ["Shubham","Jain","Fsd"];
// let arr3 = [true , false , true];

// let newArr = arr2.concat(arr1, "This is static value" , arr3);

// console.log(arr1);
// console.log(arr2);
// console.log(newArr);

// slice

// let arr = [10,20,30,40,50,60,70,80];

// let newArr = arr.slice(2 , 5);

// console.log(arr);
// console.log(newArr);

// splice
// add or remove

// let arr = [10,20,30,40,50,60,70,80];

// let returnedValue = arr.splice(3 , 0 , [1000 , true , false , undefined] );

// console.log(arr);
// console.log("Returned Valued :",returnedValue);

// indexOf

// let arr = [10,20,30,40,50,60,50,70,80, 50];
// let indexOfValue = arr.indexOf(100);

// console.log(indexOfValue);

// let indexOfValue = arr.lastIndexOf(50)
// console.log(indexOfValue);

// includes
// let arr = [10,20,30,40,50,60,50,70,80,50];

// let isExist = arr.includes(100);
// console.log(isExist);

// reverse

// let arr = [10,20,30,40,50,60,50,70,80,50];

// let newArr = arr.reverse();

//  console.log(arr);
//  console.log(newArr);

// let arr = [10,20,30,40,50,60,50,70,80,50];

// let joinedString = arr.join("hello");

// console.log(arr);
// console.log( joinedString);

// sort

// let arr = [101,20,30,100012,11,22,55,7655,54,76,978,9,858,86];
// let arr = ["aaa","aab","vxd","csd","bbd","bfd","asd","res","vxc","hgf","ccd","cfd","edf","egd"];
// console.log("Original Array :",arr);

// let returnedValue = arr.sort((a,b)=>b-a);

// console.log("Sorted Array :",arr);
// console.log(returnedValue);

// function sum(){
//     return  10 + 20;
// }

// let sum = x=>x+x;

// console.log(sum(5));


// map
// let arr = [10,20,33,40,50,60,77,80];

// let newArr = [];

// for(let index in arr){
//     newArr[index] = (arr[index]-2)**2;
// }
// let returnedValue = arr.map((item)=>{
//       return (item-2)**2;
// });

// console.log("Returned Value :",returnedValue);