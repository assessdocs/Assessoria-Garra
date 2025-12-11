document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculo-div').style.display = 'none';
    document.getElementById('calculos-resultados').style.display = 'none';

    document.getElementById('calcular').addEventListener('click', function() {
        // Função para converter o valor de string para número, considerando a vírgula como separador decimal
        function parseValue(value) {
            return parseFloat(value.replace(',', '.'));
        }

        // Função para formatar o valor como dinheiro
        function formatCurrency(value) {
            return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        // Receitas
        let receitaTotal = 0;
        for (let i = 1; i <= 3; i++) {
            let receitaValue = document.getElementById('i-receita' + i).value;
            if (receitaValue) {
                receitaTotal += parseValue(receitaValue);
            }
        }
        let receitaMensal = receitaTotal / 3;
        let receitaAnual = receitaMensal * 12;
        document.getElementById('receita-anual').textContent = formatCurrency(receitaAnual);

        // 5 Anos + Perpetuidade + Valor Total da Empresa
        let b5 = receitaAnual;

        let cincoAnos = ((b5 * 5) - ((b5 * 5) / 100 * 34.48));
        document.getElementById('calculo-5anos').textContent = formatCurrency(cincoAnos);
        document.getElementById('5anos').textContent = formatCurrency(cincoAnos);

        let perpetuidade = (b5 + (b5 / 100 * 301,8));
        document.getElementById('calculo-perpetuidade').textContent = formatCurrency(perpetuidade);
        document.getElementById('perpetuidade').textContent = formatCurrency(perpetuidade);

        let valorTotalEmpresa = (cincoAnos + perpetuidade);
        document.getElementById('calculo-valortotalempresa').textContent = formatCurrency(valorTotalEmpresa);
        document.getElementById('valortotalempresa').textContent = formatCurrency(valorTotalEmpresa);

        // Cálculos
        document.getElementById('calculo-div').style.display = 'block';
        document.getElementById('calculos-resultados').style.display = 'flex';
    });
});