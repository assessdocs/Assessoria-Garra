document.addEventListener('DOMContentLoaded', () => {
    const exportar = document.getElementById('exportar');
    const config = document.getElementById('config');
    const config2 = document.getElementById('config2');
    const documento = document.getElementById('documento');
    const pagina1 = document.getElementById('pagina1');

    var notafiscal = document.getElementById('notafiscal');

    function ImprimirNotaFiscal() {
        console.log('Imprimir: É uma Nota Fiscal');
        pagina1.style.border = 'none';
    }

    function NotaFiscal() {
        console.log('Imprimir: É uma Nota Fiscal');
        pagina1.style.border = '1px solid var(--cor-3)';
    }

    if (exportar && config) {
        exportar.addEventListener('click', () => {
            config.style.display = 'none';
            if (config2) {
                config2.style.display = 'none'
            } else {
                console.log('Config2: Não existe.');
            }

            if (notafiscal) {
                ImprimirNotaFiscal();
                console.log('Imprimir: Nota Fiscal.');
            }
        
            window.print();

            setTimeout(() => {
                config.style.display = 'block';
                if (config2) {
                    config2.style.display = 'block'
                } else {
                    console.log('Config2: Não existe.');
                }

                documento.style.gap = '10px';
                
                if (notafiscal) {
                    NotaFiscal();
                } else {
                    alert('Erro na Impressão: Documento não identificado. Entre em contato com o Designer.');
                    return;
                }
            }, 100);
        });
    };
});
