document.addEventListener("DOMContentLoaded", function () {
    // Função para formatar os valores como dinheiro (sem o símbolo da moeda)
    function formatarValor(valor) {
        return valor.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Atualiza o texto do span correspondente sempre que um i-servico for alterado
    for (let i = 1; i <= 7; i++) {
        const servicoInput = document.getElementById(`i-servico${i}`);
        const servicoSpan = document.getElementById(`servico${i}`);

        if (servicoInput && servicoSpan) {
            servicoInput.addEventListener("input", function () {
                servicoSpan.textContent = servicoInput.value;
            });
        }
    }

    // Evento de clique no botão "calcular"
    const botaoCalcular = document.getElementById("calcular");
    if (botaoCalcular) {
        botaoCalcular.addEventListener("click", function () {
            let somaTotal = 0;

            // Soma os valores dos inputs i-valor1 até i-valor7
            for (let i = 1; i <= 7; i++) {
                const valorInput = document.getElementById(`i-valor${i}`);
                if (valorInput) {
                    const valor = parseFloat(valorInput.value.replace(",", "."));
                    somaTotal += valor;
                }
            }

            // Atualiza os spans com o valor total formatado
            const totalFormatado = formatarValor(somaTotal);
            for (let i = 1; i <= 3; i++) {
                const totalSpan = document.getElementById(`total${i}`);
                if (totalSpan) {
                    totalSpan.textContent = totalFormatado;
                }
            }

            // Atualiza os valores dos spans correspondentes a cada i-valor
            for (let i = 1; i <= 7; i++) {
                const valorInput = document.getElementById(`i-valor${i}`);
                if (valorInput) {
                    const valor = parseFloat(valorInput.value.replace(",", "."));
                    const valorFormatado = formatarValor(valor);
                    
                    for (let j = 1; j <= 3; j++) {
                        const valorSpan = document.getElementById(`servico${i}-valor${j}`);
                        if (valorSpan) {
                            valorSpan.textContent = valorFormatado;
                        }
                    }
                }
            }
        });
    }
});
