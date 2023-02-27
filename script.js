fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokeData =>  {
    const jokeText= jokeData.attachments[0].text;
    const JokeElement = document.getElementById("jokeId");
    const Button = document.getElementById("button")

    JokeElement.innerHTML = jokeText;

    Button.onclick = function() {
        JokeElement.ariaSelected();
        document.execCommand("Copy");
    }

})