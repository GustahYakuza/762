document.addEventListener('DOMContentLoaded', function () {
    const compliments = [];

    // Carregar elogios do arquivo JSON
    fetch('compliments.json')
        .then(response => response.json())
        .then(data => {
            compliments.push(...data.compliments);
            updateCompliment();
        });

    const complimentElement = document.getElementById('compliment');
    const changeComplimentButton = document.getElementById('changeCompliment');

    let index = 0;

    changeComplimentButton.addEventListener('click', function () {
        index = (index + 1) % compliments.length;
        updateCompliment();
    });

    function updateCompliment() {
        complimentElement.textContent = `Você é ${compliments[index]}`;
    }
});
