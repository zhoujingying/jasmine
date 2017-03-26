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
module.exports = {
    ToArray:ToArray,
    toArrayWithObj:toArrayWithObj
    
};