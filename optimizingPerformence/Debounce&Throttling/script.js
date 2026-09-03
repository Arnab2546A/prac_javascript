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

function throttling(fnc,delay){
    let timer=0;
    return function(evt){
        let time=Date.now();
        if(time-timer>=delay){
            timer=time;
            fnc(evt);
        }
    }
}
// input.addEventListener('input',debounce(function(evt){
//     console.log('hey');
// },1000));

input.addEventListener('input',throttling(function(evt){
    console.log('hey');
},1000));