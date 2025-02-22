// let shubham = "abc";
// let firstVariable = "10";
// let secondVariable = 10;

// console.log(firstVariable === secondVariable);

// not equal
// let firstVariable = "10";
// let secondVariable = 10;

// console.log(firstVariable == secondVariable);
// console.log(firstVariable != secondVariable); // false

// console.log(firstVariable === secondVariable); //false
// console.log(firstVariable !== secondVariable); //true

// console.log(firstVariable !== secondVariable);

// let firstNumber = 100;
// let secondNumber = 100;

// console.log(firstNumber>secondNumber);
// console.log(firstNumber>=secondNumber);
// console.log(firstNumber<=secondNumber);

// Bitwise operator

// && ||  !
// & | ^ << >> ~

// let firstNumber = 5;    // base - 10  0101
// let secondNumber = 8;   // base - 2
// console.log(firstNumber & secondNumber);
// console.log(firstNumber | secondNumber);

// let firstNumber = 10;
// let secondNumber = 12;

// console.log(firstNumber | secondNumber);

// let thirdVariable = 16716760;

// console.log((thirdVariable & 1) === 0); // even

// if(thirdVariable % 2 === 0){
//     console.log("Even");
// }else{
//     console.log("odd");
// }

// ----------0 & 0 ---> 0

// if((thirdVariable & 1) === 0){
//     console.log("Even");
// }else{
//     console.log("odd");
// }

// let firstVariable = 5;            //   101
// let secondVariable =  7;          //   111
//                                   //   010 -- 2
// console.log(firstVariable ^ secondVariable);

// let x = 1000;
// let y = 100;

// x = x + y
// y = x - y
// x = x - y
// let temp;

// temp = x;
// x = y;
// y  = temp;

// x  = x ^ y;
// y = x ^ y;
// x = x ^ y;

// console.log(x);
// console.log(y);


// let firstNumber = 9;
// let secondVariable = 8;

// console.log(firstNumber << 2);  // left shift

// // 9 --  01001 << 1 ----  10010 -- 18
// // 9 --  001001 << 2 ----  100100 -- 36

// console.log(5 << 4);  // 5 * 16
// console.log(32 >> 2); // 1010 --- 101 >> 5

// let firstVariable = 5; // 101  --   010
// console.log(~firstVariable);  // -(a+1) -- -6

//00000000 00000000 00000000 00000010
//11111111 11111111 11111111 11111101
//00000000 00000000 00000000 00000010   --- -6
//                                  1
//                                 11   ---- 3

// console.log(~2)   // ---- -3
// console.log(~-3)  // -(a+1) -- 2

// 00000000 00000000 00000000 00000101
// 11111111 11111111 11111111 11111010   ---- -
// 00000000 00000000 00000000 00000101
//                                   1
// 00000000 00000000 00000000 00000110  ---- -6
