class youtubeChannel{
    constructor(name){
        this.name=name;
        this.subscribers=[];
        console.log(`name of the youtube channel- ${name}`);
    }
    subscribe(user){
        this.subscribers.push(user);
        user.message('you have subscribed the channel');
    }
    unsubscribe(data){
        this.subscribers=this.subscribers.filter((user)=>user!==data);
        data.message('you have unsubscribed the channel');
    }
    notify(msg){
        this.subscribers.forEach((user)=> user.message(msg));
    }
}

class user{
    constructor(username){
        this.username=username;
    }
    message(msg){
        console.log(`${this.username}`,`${msg}`);
    }
}

let comicIndia=new youtubeChannel('comicIndia');
let user1=new user('arnab');
comicIndia.subscribe(user1);
let user2=new user('Danish');
comicIndia.subscribe(user2);
comicIndia.notify('here is a new video');
comicIndia.unsubscribe(user1);
comicIndia.notify('new content uploaded');