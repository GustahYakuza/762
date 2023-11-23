const compliments = [
    "Você é incrível!",
    "Seu sorriso ilumina meu dia!",
    "Ninguém é tão especial quanto você!",
    // Adicione mais elogios conforme desejado
];

function showRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    const complimentElement = document.querySelector('.compliment-text');
    complimentElement.textContent = compliment;

    // Substitua o emoji pelo coração usando Twemoji
    const heartEmoji = document.getElementById('heart');
    heartEmoji.innerHTML = '';
    twemoji.parse(heartEmoji, {
        folder: 'svg',
        ext: '.svg',
    });
}

document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);

showRandomCompliment();
