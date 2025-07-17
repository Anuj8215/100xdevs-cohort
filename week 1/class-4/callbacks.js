// Passing function as an argument

function square(n) {
  return n * n;
}

function sumofSomething(a, b, callback) {
  console.log(a);
  console.log(callback);

  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}
const ans = sumofSomething(3, 3, square);
console.log(ans);
