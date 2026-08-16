let username=document.querySelector('#username');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let submit=document.querySelector('form');
submit.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    let isTrue=true;
    if(username.value.length<=2){
         isTrue=false;
        document.querySelector('#usernameError').style.display='initial';
        document.querySelector('#usernameError').textContent='minimum two characters required';
    }
    else{
        document.querySelector('#usernameError').style.display='none';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value)){
         isTrue=false;
        document.querySelector('#emailError').style.display='initial';
        document.querySelector('#emailError').textContent='give correct email';
    }
    else{
        document.querySelector('#emailError').style.display='none';
    }

    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password.value)){
         isTrue=false;
        document.querySelector('#passwordError').style.display='initial';
        document.querySelector('#passwordError').textContent='invalid password';
    }
    else{
        document.querySelector('#passwordError').style.display='none';
    }
    if(isTrue){
        document.querySelector('#message').textContent='Registration Successful';
        document.querySelector('#message').style.display='initial';
        
    }
    else{
        document.querySelector('#message').style.display='none';
    }
})