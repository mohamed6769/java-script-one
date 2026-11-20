//* part one
// #region Q1
// let numstr = "123";
// let num = parseInt(numstr);
// console.log(num + 7); // Output: 130

// // ============ anthor answer ==============

// let numstr2 = "456";
// let num2 = Number(numstr2);
// console.log(num2 + 7); // Output: 463

// // ============ anthor answer ==============

// let numstr3 = "789";
// let num3 = +numstr3; // Unary plus operator
// console.log(num3 + 7); // Output: 796
//#endregion

// #region Q2
// function check(val) {
//   if (!val) {
//     return "Invalid";
//   }
//   return "Valid";
// }
// console.log(check(0));
// #endregion

// #region Q3
// for (let index = 0; index <= 10; index++) {
//   if (index % 2 === 0) {
//     continue;
//   } else {
//     console.log(index);
//   }
// }
// #endregion

// #region Q4
// let arr1 = [1, 2, 3, 4, 5, 6];
// let resarr1 = arr1.filter((num) => num % 2 === 0);
// console.log(resarr1); // Output: [2, 4, 6]
// #endregion

// #region Q5
// let arr1 = [1, 2, 3, 4 , 5];
// let arr2 = [6, 7, 8, 9];
// let mergedArr = [...arr1, ...arr2];
// console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9]
// // ============= another answer ==============
// let mergedArr2 = arr1.concat(arr2);
// console.log(mergedArr2); // Output: [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9]
// #endregion

// #region Q6
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   case 7:
//     console.log("saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }
// #endregion

// #region Q7
// let arrstr = ["ab", "adc", "efg", "hijklm"];
// let resarr = arrstr.map((element) => {
//   return element.length;
// });
// console.log(resarr); // Output: [2, 3, 3, 6]
// #endregion

// #region Q8
// function Divisible(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "Divisible by both";
//   }
//   return "Not divisible by both";
// }
// console.log(Divisible(15));
// #endregion

// #region Q9
// const square = (num) => num ** 2;
// console.log(square(5));
//#endregion

// #region Q10
// function formatUser(user) {
//   const { name, age } = user;
//   return `${name} is ${age} years old.`;
// }

// const person = { name: "Ali", age: 22 };
// console.log(formatUser(person));
// Output: "Ali is 22 years old."
// #endregion

// #region Q11
// function sum(...nums) {
//   return nums.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));
// #endregion

// #region Q12
// function me() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }
// me().then((msg) => console.log(msg)); 
//#endregion

// #region Q13
// let arr = [1, 2, 17, 3, 4, 5];
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// ============ another answer ==============
// let arr = [1, 2, 17, 3, 4, 5];
// let max = Math.max(...arr);
// console.log(max); // Output: 17

// #endregion

//#region Q14
// function getKeys(obj) {
//   return Object.keys(obj);
// }

// const user = { name: "Ali", age: 22, role: "Developer" };
// console.log(getKeys(user)); // Output: ["name", "age", "role"]
//#endregion

// #region Q15
// let str = "The quick brown fox";

// function me(str) {
//     let words = str.split(" ");
//     console.log(words);
// }
// me(str);
//#endregion

//* part two

// Notion : https://app.notion.com/p/Assignments-1-41daee35734480b49f95d3efe0b3f4fb?source=copy_link


