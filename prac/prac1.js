let x=8;
console.log(x);
//func
let fnc=function(){
    console.log("arnab");
}
fnc();
//arrow func
let fnc1=()=>{
    console.log("hhhhk");
}
fnc1();
//parameters
function f2(v1=0,v2=0){
    console.log(v1+v2);
}
f2(2,3);
//high order func
function f3(val){
     return val();
}
// f3(function(){
//     console.log("it is a high order func");
// }
// )();
f3(function(){
    console.log("it is a high order func");
});