let inp=document.querySelector('input');
let data1;
inp.addEventListener('input',(evt)=>{
        data1=evt.target.value;
})
let heading=document.querySelector('.heading');
let sel=document.querySelector('select');
sel.addEventListener('change',(evt)=>{
    // if((data1===null)&&(evt.target.value===null)){
    //     alert("fill all the fields");
    //     return;
    // }
        heading.textContent=`The gender of ${data1} is ${evt.target.value}`
    
})