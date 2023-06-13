var quotes = [
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "No one can make you feel inferior without your consent. - Eleanor Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs"
];


function generateRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("quote");

    quoteElement.textContent = quotes[randomIndex];
}

var generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateRandomQuote);