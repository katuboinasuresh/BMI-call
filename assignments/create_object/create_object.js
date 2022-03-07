function CreateObject(arr) {
    // Write your code here
    // declare an empty object
    dic = {}
    for(let i=0;i<arr.length;i=i+2){
        dic[arr[i]] = arr[i+1]
    }
    return dic
}

module.exports = CreateObject;
