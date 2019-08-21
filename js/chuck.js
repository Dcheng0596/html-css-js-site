const getJoke = async () => {
    const joke = 'http://api.icndb.com/jokes/random';
    const clean = '?exclude=[explicit]';

    const response = await fetch(joke + clean);
    const data = await response.json();

    return data;
};

const display = document.getElementById('joke');


getJoke().then(data => {display.innerHTML = data.value.joke})
.catch(display.innerText += "Error retrieving joke");


