const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  console.log("Inside My File");
  return new Promise(function(resolve) {
    console.log("Inside Promise")
    fs.readFile("a.txt", "utf-8", function(err, data) {
      console.log("Before resolve")
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);