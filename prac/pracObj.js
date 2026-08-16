const obj={
    name: "Arnab",
    age: 22,
    location:{
        lat:23.5,
        long:24.2
    },
    "first-name": "arnab"
}
let {name}=obj;
let {age}=obj;
let {lat:laat}=obj.location;
let {"first-name":firstName}=obj;
console.log(age);
console.log(name);
console.log(laat);
console.log(firstName);