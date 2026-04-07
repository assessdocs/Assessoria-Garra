document.getElementById('exportar').addEventListener('click', () => {
    var cnpj = document.getElementById('cnpj').textContent;
        
    // Verifica a presença de cada tipo de documento e altera o título conforme
    if (document.getElementById('orcamento')) {
        console.log('Título: Orçamento');

        var total = document.getElementById('total') ? document.getElementById('total').textContent : null;

        document.title = 'Garra Assessoria [Orçamento de R$ ' + total + '] - ' + cnpj;
    } else if (document.getElementById('eve')) {
        console.log('Título: EVE');
        document.title = 'Garra Assessoria - Estudo Técnico de Viabilidade Econômica [' + cnpj + ']';
    } else if (document.getElementById('bv')) {
        console.log('Título: BV');
        document.title = 'Garra Assessoria - Business Valuation [' + cnpj + ']';
    } else if (document.getElementById('dmpl')) {
        console.log('Título: DMPL');
        document.title = 'Garra Assessoria - Demonstração das Mutações do Patrimônio Líquido [' + cnpj + ']';
    } else if (document.getElementById('contrato')) {
        console.log('Título: Contrato');
        document.title = 'Garra Assessoria - Contrato de Serviço [' + cnpj + ']';
    } else {
        console.log('Título: Documento não identificado.');
    }
});
