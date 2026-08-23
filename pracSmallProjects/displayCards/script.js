let form=document.querySelector('#profileForm');

const nameInput = document.getElementById("name");
const genderInput = document.getElementById("gender");
const interestsInput = document.getElementById("interests");

const nameError = document.getElementById("nameError");
const genderError = document.getElementById("genderError");
const interestsError = document.getElementById("interestsError");
const cardsContainer=document.querySelector('#cardsContainer');
const workPage={
    users:[],
    funcInit:function(){
        form.addEventListener('submit',this.formSubmit.bind(this));
    },


    formSubmit:function(evt){
        evt.preventDefault();
        const name = nameInput.value.trim();
    const gender = genderInput.value;
    const interests = interestsInput.value.trim();

    // Reset errors
    nameError.classList.add("hidden");
    genderError.classList.add("hidden");
    interestsError.classList.add("hidden");

    let isValid = true;


    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        nameError.classList.remove("hidden");

        isValid = false;
    }


    // Gender validation
    if (gender === "") {
        genderError.textContent = "Please select your gender.";
        genderError.classList.remove("hidden");

        isValid = false;
    }


    // Interests validation
    if (interests === "") {
        interestsError.textContent = "Please describe your interests.";
        interestsError.classList.remove("hidden");

        isValid = false;
    }


    // If everything is valid
    if (isValid) {
        this.addUsers(name,gender,interests);
        console.log("Form is valid!");
        nameInput.value='';
    genderInput.value='';
    interestsInput.value='';
        // You can create the card here
    }
    },
    addUsers:function(name, gender, interests) {

    // Main card
    const card = document.createElement("div");
    card.classList.add(
        "rounded-2xl",
        "border",
        "border-gray-800",
        "bg-gray-900",
        "p-6",
        "shadow-lg",
        "transition",
        "hover:-translate-y-1",
        "hover:border-gray-700"
    );


    // Name
    const nameElement = document.createElement("h3");
    nameElement.classList.add(
        "text-xl",
        "font-bold",
        "text-white"
    );

    nameElement.textContent = name;


    // Gender
    const genderElement = document.createElement("span");
    genderElement.classList.add(
        "mt-2",
        "inline-block",
        "rounded-full",
        "px-3",
        "py-1",
        "text-sm",
        "font-medium"
    );

    genderElement.textContent = gender;


    // Gender color
    if (gender === "Male") {
        genderElement.classList.add(
            "bg-blue-500/15",
            "text-blue-400"
        );
    } 
    else if (gender === "Female") {
        genderElement.classList.add(
            "bg-pink-500/15",
            "text-pink-400"
        );
    } 
    else {
        genderElement.classList.add(
            "bg-green-500/15",
            "text-green-400"
        );
    }


    // Interests container
    const interestsContainer = document.createElement("div");
    interestsContainer.classList.add("mt-5");


    // Interests heading
    const interestsHeading = document.createElement("h4");
    interestsHeading.classList.add(
        "text-sm",
        "font-semibold",
        "text-gray-300"
    );

    interestsHeading.textContent = "Interests";


    // Interests description
    const interestsText = document.createElement("p");
    interestsText.classList.add(
        "mt-1.5",
        "text-sm",
        "leading-relaxed",
        "text-gray-400"
    );

    interestsText.textContent = interests;


    // Put interests heading + text inside interests container
    interestsContainer.append(
        interestsHeading,
        interestsText
    );

const deleteButton = document.createElement("button");

deleteButton.classList.add(
    "mt-5",
    "w-full",
    "rounded-lg",
    "bg-red-500/10",
    "px-4",
    "py-2",
    "text-sm",
    "font-medium",
    "text-red-400",
    "transition",
    "hover:bg-red-500/20"
);

deleteButton.textContent = "Delete";

deleteButton.addEventListener('click',this.deleteUser.bind(this,card));

    // Put everything inside card
    card.append(
        nameElement,
        genderElement,
        interestsContainer,
        deleteButton
    );


    // Put card inside cardsContainer
    cardsContainer.appendChild(card);
},
    deleteUser: function(card){
        card.remove();
    },
}
workPage.funcInit();