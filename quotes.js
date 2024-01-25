const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
]

const images = ['images/canva-nature-2.png', 'images/nature.jpg', 'images/canva-nature-1.png'] 
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')

document.addEventListener('DOMContentLoaded', function() {
     document.body.style.backgroundImage = 'url(' + getRandomImage() + ')'
     getRandomQuote()
})

function getRandomImage() {
     let randomIndex = Math.floor(Math.random() * images.length)
     return images[randomIndex]
 }

function getRandomQuote(){     
     let randomQuoteObject = quotes[Math.floor(Math.random() * quotes.length)]
     quoteEl.textContent = randomQuoteObject.quote
     authorEl.textContent = '- ' + randomQuoteObject.author
}
    