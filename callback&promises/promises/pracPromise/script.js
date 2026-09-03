let pr=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("resolved");
    },1000);
    
})
pr.then(()=>{
    console.log(pr);
})
