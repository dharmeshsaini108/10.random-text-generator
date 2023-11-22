const quotes=[
    "The best way to predict the future is to create it.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "If you want to achieve greatness stop asking for permission.",
    "Believe you can and you're halfway there.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Do what you can, with what you have, where you are.",
    "Strive not to be a success, but rather to be of value."
];

function generatequote(){
    const randomIndex=Math.floor(Math.random()*quotes.length);
    const quote=quotes[randomIndex];
    document.querySelector("#quote").textContent=quote;
}

document.querySelector("#btn").addEventListener("click",generatequote);