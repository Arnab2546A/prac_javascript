let span=document.querySelector('span');
let inp=document.querySelector('input');

inp.addEventListener('input',(evt)=>{
 let lft=20-evt.target.value.length;
   span.textContent=lft;
   if(lft<0){
    span.style.color='red';
   }
   else{
    span.style.color='black';
   }
})