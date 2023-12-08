function merge(arr1,arr2) {
    let on1=true;
    let places=[0,0];
    let merged = [];
    while(places[0]<arr1.length||places[1]<arr2.length){
        if(on1){
            if(arr1[places[0]]<=arr2[places[1]]){
                merged.push(arr1[places[0]]);
                places[0]=places[0]+1;
            }else if(places[0]>=arr1.length){
                on1=false;
            }else if(places[1]>=arr2.length){
                merged.push(arr1[places[0]]);
                places[0]=places[0]+1;
            }else{
                on1=false;
            }
        }else{
            if(arr2[places[1]]<=arr1[places[0]]){
                merged.push(arr2[places[1]]);
                places[1]=places[1]+1;
            }else if(places[1]>=arr2.length){
                on1=true;
            }else if(places[0]>=arr1.length){
                merged.push(arr2[places[1]]);
                places[1]=places[1]+1;
            }else{
                on1=true;
            }
        }
    }
    return merged;
}

function mergeSort(arr) {
    let arr1=[];
    let arr2=[];
    for(let val of arr){
        if(arr1.length==0){
            arr1.push(val);
        }else if(arr2.length==0){
            arr2.push(val);
        }else if(arr1[arr1.length-1]<val){
            arr1.push(val);
        }else if(arr2[arr2.length-1]<val){
            arr2.push(val);
        }else if(arr1[0]>val){
            arr1.splice(0,0,val);
        }else if(arr2[0]>val){
            arr2.splice(0,0,val);
        }else{
            forceArr=arr1.length<arr2.length?arr1:arr2;
            for(let i =0 ;i<forceArr.length;i++){
                if(forceArr[i]<=val&&forceArr[i+1]>val){
                    forceArr.splice(i+1,0,val);
                    i=forceArr.length;
                }
            }
        }
    }
    return merge(arr1,arr2);
}

module.exports = { merge, mergeSort};