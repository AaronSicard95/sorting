function bubbleSort(arr) {
    newArr=[];
    for(let val of arr){
        if(newArr.length==0){
            newArr.push(val);
        }else{
            for(let i = 0;i<newArr.length;i++){
                if(newArr[i]>val){
                    newArr.splice(i,0,val);
                    break;
                }
                if(i>=newArr.length-1){
                    newArr.push(val);
                    break;
                }
            }
        }
    }
    return newArr;
}

module.exports = bubbleSort;