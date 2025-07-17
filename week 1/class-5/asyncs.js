// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });
// console.log("Hi There");

// let a = 0;

// for(let i = 0; i<10000000000; i++){
//     a++;
// }
// console.log("Hi There 2 ");



const fs = require('fs');

// My own asynchronous function
function kiratsReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    if (err) {
      return cb("Error reading file: " + err);
    }
    cb(data);
  });
}

// Callback function to call
function onDone(data) {
  console.log(data);
}

// Call the function
kiratsReadFile(onDone);
















/* fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data)
}).  >>>> This is a asynchronus function due to which we see it later on and the Hi There Prints First
     
*/
