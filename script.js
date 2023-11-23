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

let compliments = [];

function showRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    const complimentElement = document.querySelector('.compliment-text');
    complimentElement.textContent = compliment;
}

// Adiciona essa função para carregar os elogios do arquivo JSON
function loadCompliments() {
    fetch('compliments.json') // Verifique se o caminho para o arquivo está correto
        .then(response => response.json())
        .then(data => {
            compliments = data;
            showRandomCompliment();
        })
        .catch(error => console.error('Erro ao carregar os elogios:', error));
}

document.getElementById('changeCompliment').addEventListener('click', showRandomCompliment);

// Carrega os elogios ao iniciar o script
loadCompliments();
