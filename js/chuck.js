const getJoke = async () => {
    const joke = 'http://api.icndb.com/jokes/random';
    const clean = '?exclude=[explicit]';

    const response = await fetch(joke + clean);
    const data = await response.json();

    return data;
};

const display = document.getElementById('joke');

const generate = document.getElementById('generate');

generate.addEventListener("click", () => {
    getJoke().then(data => {display.innerHTML = data.value.joke})
});



