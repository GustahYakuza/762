document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verifica as credenciais (usuário 'anna', senha 'gatinha' como exemplo)
    if (username === 'anna' && password === 'gatinha') {
        // Exibe o conteúdo principal após o login bem-sucedido
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }

    // Limpa os campos de usuário e senha
    usernameInput.value = '';
    passwordInput.value = '';
});

// Restante do seu código JavaScript...
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
