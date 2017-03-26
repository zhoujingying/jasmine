'use strict'

function ToArray(str){
   return str.split(' ');
}
function toArrayWithObj(arr){
    var nameArr = [];
    var result = [];
    arr.forEach(function(val,index){
        if(nameArr.indexOf(val) === -1){
            nameArr.push(val);
        }
    })
    nameArr.forEach(function(val,index){
        result.push({
            name:val,
            number:0
        })
    })
    result.forEach(function(val,index){
        arr.forEach(function(arrVal,index){
            if(val.name === arrVal){
                val.number++;
            }
        })
    })
    return result;
}
function sortArr(objArr){
    var numArr = [];
    var result = [];
    objArr.forEach(function(val,index){
        numArr.push(val.number);
    })
    numArr.sort(function(a,b){return b-a});
    numArr.forEach(function(num,index){
        objArr.forEach(function(objVal,index){
            if(num === objVal.number){
                result.push({
                    name:objVal.name,
                    number:num
                })
            }
        })
    })
    return result;
}
module.exports = {
    ToArray:ToArray,
    toArrayWithObj:toArrayWithObj,
    sortArr:sortArr   
};