// let numbers = [10,20,25,59,45];
// numbers .forEach((item)=>{
// console.log(item);

// })

// let newArray = numbers.map((item)=>{
//     return item + 10;

// })
// console.log("new Array", newArray);


// let filterArray = numbers.filter((item)=>{
// return item % 2 ===0;
// })
// console.log(" filter Array", filterArray );

// let findArray = numbers.find((item)=>{
// return item % 2 === 1;
// })
// console.log("find Array", filterArray);

// let students = ["savi", "sanvi", "manvi", "janvi"]

//  console.log(students.sort());

//  let mark = [45,67,89,32,76,91,28,55];
//  let newArray = mark.map((item)=>{
// return item + 5 ;
//  })
//  console.log(" new Array", newArray);

//  let filterArray = mark.filter((item)=>{
// return item >= 40;
//  })
//  console.log("filterArray", filterArray);

//   let findrArray = mark.find((item)=>{
// return item > 90;
//  })
//  console.log("findArray", findrArray);


//   let sortArray = mark.sort((item , a)=>{
// return item - a; 
// // return a - item;
//  })
//  console.log("sortArray", sortArray);

// let arr = [100, 20, 300, 40];
// function findArray(arr) {
//     let max = arr[0];//10
//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i] > max) {//20>10=true =20,30,40

//             max = arr[i];
//         }

//     }
//     return max;
// }
// console.log("max", findArray(arr))

// function teble(num){
//     for(let i = 1;  i <= 10; i++){
//         console.log(num + "x" + i + "=" + (num * i));

//     }
// } teble(5);

// let array = [70,20,40,70]

// function studentResult(eng, hindi, maths, science) {

//     let total = eng + hindi + maths + science;
//     let percentage = total / 4
//     console.log("total mark=", total);
//     console.log("percentage=", percentage + "%");
//     if (percentage >= 80) {
//         console.log("pass");
//     }else if (percentage >= 55) {
//         console.log("grade A🎉");
//     } else if (percentage >= 40) {
//         console.log("grade B");
//     }else {
//         console.log("student is failld! 😢");
//     }
// }
// studentResult(70, 20, 40, 70);

let arr = [10,5,25,8,20];
let largest = arr[0];
let  secondLargest = arr[0];
for(let i = 1; i < arr.length; i++){
  if(arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];

  } 
  else if (arr[i] > secondLargest && arr[i] != largest){
    secondLargest = arr[i];

  }

}
console.log("secondLargest=", secondLargest);













