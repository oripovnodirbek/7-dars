// function getInitialOdds(n) {
//     let k = 1
//     let oddNumber = []
//     for (let i = 1; i <= 5; i++) {
//         if(i ==1){
//             oddNumber.push(i)
//         }else{
//             oddNumber.push( k +=2)
//         }
//     }
//     return oddNumber
// }

// const result = getInitialOdds(5)
// console.log(result);



// function array(arr) {
//     let massiv = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 0) {
//         massiv.push(arr[i])
//       }
//     }
//     return massiv.reverse();
//   }
//   const result = array([4, 5, 7, 8, 6, 9]);
//   console.log(result);


// function customPattern(arr) {
//     let n = arr.length;
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0) {
//             result.push(arr[Math.floor(i / 2)]);
//         } else {
//             result.push(arr[n - Math.floor(i / 2) - 1]);
//         }
//     }
//     return result;
// }

// let arr = [4, 5, 7, 8, 6, 9];
// let result = customPattern(arr);
// console.log(result.join(", "));



// function rangeSum(arr, K, L) {
//     let sum = 0;
//     for (let i = K; i <= L; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [1, 6, 9, 5, 8, 10, 15];
// let K = 2;
// let L = 5;
// console.log(rangeSum(arr, K, L)); 



// function getSingleArr(arr) {
//     let result = [];
//     let seen = {};
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if (!seen[num]) {
//             result.push(num);
//             seen[num] = true;
//         }
//     }
//     return result;
// }

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// console.log(getSingleArr(arr)); 



// function swapMinMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     let minIndex = arr.indexOf(min);
//     let maxIndex = arr.indexOf(max);

//     let temp = arr[minIndex];
//     arr[minIndex] = arr[maxIndex];
//     arr[maxIndex] = temp;

//     return { min, max, arr };
// }

// let arr = [7, 4, 9, 2, 3, 1, 5];
// let result = swapMinMax(arr);
// console.log("Max:", result.max);
// console.log("Min:", result.min);
// console.log(result.arr);


// function massiv(arr) {
//     const yangiArray = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       yangiArray.push(arr[i]);
//     }
  
//     yangiArray.push(arr[0]);
  
//     return yangiArray;
//   }
  
//   const inputArray = [1, 5, 8, 9, 10];
//   const outputArray = massiv(inputArray);
//   console.log(outputArray);
