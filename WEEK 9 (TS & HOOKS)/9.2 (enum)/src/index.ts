// ----------------- Generic Enum ----------------- // 


function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let num = getFirstElement([1, 2, 3]);
let str = getFirstElement(["a", "b"]);

console.log(num.toFixed(2));
console.log(str.toUpperCase()); 