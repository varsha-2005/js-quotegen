// variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes = [{
    quote: `"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."`,
    person: `William Faulkner`
},{
    quote: `"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`
},{
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`
},{
    quote: `"Believe you can and you're halfway there."`,
    person: `Theodore Roosevelt`
},{
    quote: `"The purpose of our lives is to be happy."`,
    person: `Dalai Lama`
},{
    quote: `"Life is what happens when you're busy making other plans."`,
    person: `John Lennon`
},{
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `Abraham Lincoln`
},{
    quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
    person: `Franklin D. Roosevelt`
},{
    quote: `"The best time to plant a tree was 20 years ago. The second best time is now."`,
    person: `Chinese Proverb`
},{
    quote: `"You must be the change you wish to see in the world."`,
    person: `Mahatma Gandhi`
}];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})