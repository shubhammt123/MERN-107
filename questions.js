let removeduplicate = (arr)=>{
    let brr = [];  //brr = [1 , 2 , 3 ,   4]
    let k = 0;  // k = 4
    for(let i = 0; i< arr.length; i++){ // i =  4
        let count = 0; //  count = 0
        for(let j = 0; j<= i; j++){ // j = 0 , 1 , 2 , 3 , 4
            if(brr[j]==arr[i]){
               count++; 
            }
        }
        if(count==0){
            brr[k] = arr[i];
            k++;
        }
    }
    return brr;
}
 
let arr = [1, 2, 3, 2, 4, 1];
 
console.log(removeduplicate(arr));