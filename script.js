// ... (seu código existente)

// Adicione essa função para carregar os elogios do arquivo JSON
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
