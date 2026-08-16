let btn=document.querySelector('#downloadBtn');
let progBar=document.querySelector('#progressBar');
let percentage=document.querySelector('#percentage');
let h2=document.querySelector('h2');
let msg=document.querySelector('#message');
msg.style.display='none';
let cnt=0;
let seconds=10;
btn.addEventListener('click',()=>{
    btn.textContent='Downloading';
    btn.disabled=true;
    let interval=setInterval(()=>{
        if(cnt<100){
            cnt++;
            progBar.style.width=cnt + '%';
            percentage.textContent=`${cnt}%`;
            h2.textContent='File Downloading';
        }
        else{
            btn.textContent='Downloaded';
            clearInterval(interval);
            msg.style.display='initial';
            h2.textContent='File Downloaded';
        }
    },seconds*1000/100);
})
