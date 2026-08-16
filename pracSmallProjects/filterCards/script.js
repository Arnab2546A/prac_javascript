let form=document.querySelector('#userForm');
let n=document.querySelector('#name');
let age=document.querySelector('#age');
let gender=document.querySelector('#gender');
document.querySelector('#nameError').textContent = "Name should contain only letters";
document.querySelector('#ageError').textContent = "give the right age";
document.querySelector('#genderError').textContent="please select ur gender";
let search=document.querySelector('#searchInput');
//form part

form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    let isTrue=true;
    const nameRegex = /^[A-Za-z\s]+$/;
if (!nameRegex.test(n.value.trim())) {
      document.querySelector('#nameError').style.display='initial';
      isTrue=false;
}
else{
    document.querySelector('#nameError').style.display='none';

}
if(age.value==='' || age.value<0||age.value>100){
    document.querySelector('#ageError').style.display='initial';
    isTrue=false;
}
else{
    document.querySelector('#ageError').style.display='none';
}
if(gender.value===''){
document.querySelector('#genderError').style.display='initial';
isTrue=false;
}
else{
    document.querySelector('#genderError').style.display='none';
}
if(isTrue){
    createCard(n.value.trim(),age.value,gender.value);
    console.log("form submitted");
    n.value='';
    age.value='';
    gender.value='';
    //for searching
    search.value='';
    document.querySelector('#noUserMessage').style.display='none';
}
})

function createCard(nameValue, ageValue, genderValue) {

    // Main card
    const card = document.createElement("div");
    card.classList.add("user-card");


    // User info div
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");


    // Name
    const name = document.createElement("h3");
    name.textContent = nameValue;


    // Age
    const ageParagraph = document.createElement("p");

    const ageStrong = document.createElement("strong");
    ageStrong.textContent = "Age: ";

    ageParagraph.append(ageStrong);
    ageParagraph.append(ageValue);


    // Gender
    const genderParagraph = document.createElement("p");

    const genderStrong = document.createElement("strong");
    genderStrong.textContent = "Gender: ";

    genderParagraph.append(genderStrong);
    genderParagraph.append(genderValue);


    // Add information inside user-info
    userInfo.append(name);
    userInfo.append(ageParagraph);
    userInfo.append(genderParagraph);


    // Button container
    const cardButtons = document.createElement("div");
    cardButtons.classList.add("card-buttons");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click',()=>{
        card.remove();
    })
    // Add buttons
    cardButtons.append(deleteBtn);

    // Build the card
    card.append(userInfo);
    card.append(cardButtons);

    // Add card to HTML container
    const cardsContainer = document.querySelector("#cardsContainer");
    cardsContainer.append(card);
}

//searching part

search.addEventListener('input',()=>{
   let cardList=document.querySelectorAll('.user-card');
    let searchVal=search.value.toLowerCase();
    let foundUser=false;
    if(cardList!==undefined){
    cardList.forEach((user)=>{
        user.style.display='none';
    })
    cardList.forEach((user)=>{
        let username=user.querySelector('h3').textContent;
        if(username.toLowerCase().startsWith(searchVal)){
            user.style.display='initial';
            foundUser=true;
        }
    })
}
if(!foundUser && search.value!==''){
            document.querySelector('#noUserMessage').style.display='initial';
        }
        else{
            document.querySelector('#noUserMessage').style.display='none';
        }
})