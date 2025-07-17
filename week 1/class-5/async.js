function findSum(n){
    let ans = 0;
    for(let i = 0; i<n; i++){
        ans += i;
    }
    return ans;
}
function findsumTill1000(){

    console.log(findSum(100));

}
setTimeout(findsumTill1000,3000)
console.log("hello World")