document.addEventListener('DOMContentLoaded', () => {
    const generateRandomSeconds = () => {
        // Gera um número aleatório entre 0 e 60
        let randomNumber = Math.floor(Math.random() * 61); 
        return randomNumber.toString().padStart(2, '0'); // Adiciona o "0" à esquerda, se necessário
    };

    // Identifica os spans pelo ID
    const span1 = document.getElementById('segundo1');
    const span2 = document.getElementById('segundo2');

    if (span1 && span2) {
        // Gera o mesmo número para ambos os spans
        const randomSeconds = generateRandomSeconds();
        span1.textContent = randomSeconds;
        span2.textContent = randomSeconds;

        // Gera o log no console
        console.log('Segundos gerados.');
    } else {
        console.error('Um ou ambos os elementos não foram encontrados.');
    }
});
