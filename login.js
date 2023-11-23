function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de lógica de login (substitua por uma autenticação real)
    if (username === 'anna' && password === 'gatinha') {
        // Salva o estado de autenticação
        localStorage.setItem('isLoggedIn', 'true');

        alert('Login bem-sucedido!');
        
        // Redireciona para a página inicial após o login
        window.location.href = "index.html";
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}
