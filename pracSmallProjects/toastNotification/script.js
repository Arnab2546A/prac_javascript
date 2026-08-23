let toastContainer=document.querySelector('#toast-container');
function createToastElement(config){
    return function toastNotification(obj){
        const notification = document.createElement("div");
notification.className =
    `flex items-start gap-3 rounded-lg p-4 shadow-lg border ${obj['type']==='✔'?'bg-green-100 text-green-600':'bg-red-100 text-red-600'}`;

    // `flex items-start gap-3 rounded-lg  p-4 shadow-lg border border-gray-200`;

// Icon
const icon = document.createElement("div");
icon.className =
    `flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${obj['type']==='✔'?'bg-green-100 text-green-600':'bg-red-100 text-red-600'} `;

icon.textContent = obj['type'];


// Content
const content = document.createElement("div");
content.className = `flex-1 ${obj['type']==='✔'?'bg-green-100 text-green-600':'bg-red-100 text-red-600'}`;


// Heading
const heading = document.createElement("h3");
heading.className = `font-semibold ${obj['type']==='✔'?'bg-green-100 text-green-600':'bg-red-100 text-red-600'}`;
// ${(config['theme']==='white')?'text-black-900':'text-gray-900'}
heading.textContent = obj['heading'];


// Message
const message = document.createElement("p");
message.className = `mt-1 text-sm ${obj['type']==='✔'?'bg-green-100 text-green-600':'bg-red-100 text-red-600'}`;
// ${(config['theme']==='white')?'text-black-900':'text-gray-900'}
message.textContent = obj['message'];


// Build the structure
content.appendChild(heading);
content.appendChild(message);

notification.appendChild(icon);
notification.appendChild(content);


// Add notification to parent container
toastContainer.appendChild(notification);


setTimeout(()=>{
    toastContainer.removeChild(notification);
},1000*config['duration'])
    }
}

let notification= createToastElement({
    theme:'white',
    duration:3
})
notification({
    type:'✔',
    heading:'Success',
    message:'successfully logged in'
})

notification({
    type:'❌',
    heading:'Failed',
    message:'fail to log in'
})