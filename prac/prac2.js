let getScore=(...val)=>{
    let sum=0;
    for( i of val){
        sum+=i;
    }
    return sum;
}
console.log(getScore(1,2,3,4,5,6,7));

//using forEach

let getScore1=(...val)=>{
    let sum=0;
    val.forEach((num)=>sum+=num);
    return sum;
}
console.log(getScore1(1,2,3,4,5,6,7));