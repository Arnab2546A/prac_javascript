//callback inside callback
function getProfile(name,cb){
    console.log('fetching profile data...');
    setTimeout(()=>{
        console.log(name);
        cb({id:1000,name:name});
    },3000);
}
function fetchPosts(id,cb){
    console.log('fetching posts....');
    setTimeout(()=>{
        console.log(id);
        cb({_id:id,posts:['hi','hello','good morning','gooning time🙌'],});
    },3000);
}
function getSavedPosts(posts,cb){
    console.log('fetching saved posts...')
    setTimeout(()=>{
        cb({savedPosts:['hii','oh yeah','lets goon',]})
    },3000);
}
getProfile('harsh',function(data){
    console.log(data);
    fetchPosts(data.id,function(data){
        console.log(data);
        getSavedPosts(data.posts,function(data){
            console.log(data);
        })
    })
})