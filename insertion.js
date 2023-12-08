function insertionSort(arr) {
    let newArr=arr;
    for(let i =0;i<newArr.length;i++){
        if(newArr[i]<newArr[i-1]){
        for(let ind = i;ind>-1;ind--){
            console.log(newArr[i],"<", newArr[ind],"And",newArr[i],">",newArr[ind-1],newArr[i]<newArr[ind]&&newArr[i]>newArr[ind-1]);
            if(newArr[i]<=newArr[ind]&&(newArr[i]>newArr[ind-1]||ind==0)){
                newArr.splice(ind,0,newArr[i]);
                newArr.splice(i+1,1);
                ind=-1;
            }
        }
    }
    }
    return newArr;
}

module.exports = insertionSort;