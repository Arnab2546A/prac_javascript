h1=document.querySelector('#main');
window.addEventListener('keydown',(evt)=>{
    h1.textContent=evt.key;
})