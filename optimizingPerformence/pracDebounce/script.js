let input=document.querySelector('#inp');
function debounce(fnc,delay){
let timer;
return function(args){
    clearTimeout(timer);
    timer=setTimeout(()=>{
        fnc(args);
    },delay);
}
}
input.addEventListener('input',debounce(function(evt){
    console.log('hey');
},1000));