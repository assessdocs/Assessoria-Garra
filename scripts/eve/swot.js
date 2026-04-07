document.addEventListener('DOMContentLoaded', function () {
    var swotSwitcher = document.getElementById('swot-switch')
    var tituloDocumento = document.getElementById('titulo-documento')

    tituloDocumento.innerHTML = 'ESTUDO DE<br>VIABILIDADE<br>ECONÔMICA';

    swotSwitcher.addEventListener('change', function () {
        if (this.checked) {
            tituloDocumento.innerHTML = 'ANÁLISE<br>DE SWOT';
        } else {
            tituloDocumento.innerHTML = 'ESTUDO<br>TÉCNICO DE<br>VIABILIDADE<br>ECONÔMICA';
        }
    });
});