// script.js

// Array de elogios
const compliments = [
    "Você é incrível!",
    "Seu sorriso ilumina meu dia!",
    "Ninguém é tão especial quanto você!",
    // Adicione mais elogios conforme desejado
];

// Função para exibir um elogio aleatório
function showRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    document.getElementById('compliment').innerText = compliment;
}

// Event listener para o botão de próximo elogio
document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);

// Chama a função para exibir um elogio inicial ao carregar a página
showRandomCompliment();
