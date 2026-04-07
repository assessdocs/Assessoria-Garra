document.getElementById('exportar').addEventListener('click', () => {
    var notafiscal = document.getElementById('notafiscal');
    
    if (notafiscal) {
        console.log('Título: Nota Fiscal');
        
        // Captura o valor atual do CNPJ no momento do clique
        var cnpj = document.getElementById('cnpj').textContent;

        // Atualiza o título do documento
        document.title = 'Garra Assessoria - Nota Fiscal Eletrônica (NFe) [' + cnpj + ']';
    } else {
        console.log('Título: Documento não identificado.');
    }
});
