document.addEventListener('DOMContentLoaded', () => {
    const selectExportar = document.getElementById('select-exportar');
    const tituloDocumento = document.getElementById('titulo-documento');

    // Mapeamento central (fácil de manter/expandir)
    const TITULOS = {
        SWOT: 'ANÁLISE<br>DE SWOT',
        EVE: 'ESTUDO DE<br>VIABILIDADE<br>ECONÔMICA',
        ETVE: 'ESTUDO<br>TÉCNICO DE<br>VIABILIDADE<br>ECONÔMICA'
    };

    // Função única de atualização
    const atualizarTitulo = (tipo) => {
        tituloDocumento.innerHTML = TITULOS[tipo] || 'ESTUDO<br>TÉCNICO DE<br>VIABILIDADE<br>ECONÔMICA';
    };

    // Atualiza ao mudar
    selectExportar.addEventListener('change', (e) => {
        atualizarTitulo(e.target.value);
    });

    // Atualiza automaticamente caso já venha selecionado algo
    atualizarTitulo(selectExportar.value);
});