let h1=document.querySelector('h1');
let doc=document;
h1.style.color='orange';
h1.style.backgroundColor='yellow';

// console.dir(doc.body.childNodes);
// doc.body.childNodes.forEach((node)=>{console.log(node.textContent)})
h1.innerHTML='La La Lund';
//select every li
let allLi=document.querySelectorAll('.ok');
allLi.forEach((li)=>{console.log(li.textContent)});


//select a paragraph and replace it with <b>Updated</b> by JS
let par=document.querySelector('p');
par.innerHTML='<b>Updated</b> by JS';

//add an <li> to the last of the ul
let ul=document.querySelector('ul');
console.dir(ul);
let li=document.createElement('li');
li.textContent='by Goon Kishan';
ul.appendChild(li);

//create an img tag with src and add it to the top of div
let img=document.createElement('img');
img.setAttribute('src','https://sc0.blr1.cdn.digitaloceanspaces.com/article/202422-pyolmkoeac-1722225631.jpeg');
let div=document.querySelector('div');
div.prepend(img);

//add classname to even items of list
//1st method
// let cnt=1;
// let ul1=document.querySelector('ul');
// let allLi1=ul.querySelectorAll('li');
// allLi1.forEach((li)=>{
//     if(cnt%2==0){
//         li.classList.add('highlight');
//     }
//     cnt++;
// })
// allLi1.forEach((li)=>{console.dir(li.className)});

//2nd method
let li1=document.querySelectorAll('ul li:nth-child(2n)');
li1.forEach((li)=>{li.classList.add('highlight')});
let li2=document.querySelectorAll('ul li');
li2.forEach((li)=>{console.dir(li.className)});