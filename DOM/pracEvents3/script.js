let div=document.querySelector('#abcd');
// div.addEventListener('mouseover',(evt)=>{
//     console.log(evt.target.style.backgroundColor);
//     evt.target.style.backgroundColor='yellow';
//     console.log(evt.target.style.backgroundColor);
// })

// div.addEventListener('mouseout',(evt)=>{
//     evt.target.style.backgroundColor='red';
// })
window.addEventListener('mousemove',(evt)=>{
    console.log(evt.clientX, evt.clientY);
    div.style.top=evt.clientY + 'px';
    div.style.left=evt.clientX + 'px';
})