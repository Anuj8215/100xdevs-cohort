const input = [ 1, 2, 3, 4, 5, 6];

function transform(i){
    return i * 2;
}
const ans = input.map(transform);
console.log(ans);