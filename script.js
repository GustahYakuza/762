// script.js

const compliments = [
    "Você é incrível!",
    "Seu sorriso ilumina meu dia!",
    "Ninguém é tão especial quanto você!",
    // Adicione mais elogios conforme desejado
];

function showRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    const complimentElement = document.getElementById('compliment');
    complimentElement.innerHTML = `<span class="compliment-text">${compliment}</span><br><i class="fas fa-heart"></i>`;
}

document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);

showRandomCompliment();
