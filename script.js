document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verifica as credenciais (usuário 'anna', senha 'gatinha' como exemplo)
    if (username === 'anna' && password === 'gatinha') {
        // Exibe o conteúdo principal após o login bem-sucedido
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('mainContainer').classList.remove('hidden');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }

    // Limpa os campos de usuário e senha
    usernameInput.value = '';
    passwordInput.value = '';
});

let compliments = [
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
}

document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);
