const jokes = document.querySelector(".joke");
const btn = document.querySelector(".btn");

async function joky() {
    const jokeone = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'accept': 'application/json',
        }
    });
    const jokedata = await jokeone.json();
    jokes.innerText = jokedata.joke;
    console.log(jokedata.joke)
};
joky();
btn.addEventListener("click", ()=>{
    joky()
});
