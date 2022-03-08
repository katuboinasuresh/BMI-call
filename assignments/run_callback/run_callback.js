function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    let sum = a+b;
    return sum
}
function cb(adding){
    console.log(adding);
}
let result = RunCallback(a,b,cb);
cb(result);

module.exports = RunCallback;
