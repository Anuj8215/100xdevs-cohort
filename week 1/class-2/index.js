function calculateArithmetic(a, b, type) {
  if (type == "sum") {
    return a + b;
  }
  if (type == "minus") {
    return a - b;
  }
}

const value = calculateArithmetic(1, 2, "sum");
console.log(value);

// const personArray = ["Anuj", "Aarya", "Atharva"]
// const genderArray = ["male", "male", "female"]

// const numberofUsers = personArray.length;

// for(let i = 0; i<numberofUsers; i ++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// const ages= [ 21,22,23,24,25];

// for( let i = 0; i < ages.length; i++){
//     if(ages[i] % 2 == 0 ){
//         console.log(ages[i]);
//     }

// }

// let answer  = 0;
// for(let i = 0; i<100; i = i + 1) {
//     answer = answer +1;
// }
// console.log(answer)

// let firstName = "Anuj"
// let age = 18;
// let isMarried = false;

// console.log("Welcome " + firstName + " To the first code")
