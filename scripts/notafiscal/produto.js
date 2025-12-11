document.addEventListener("DOMContentLoaded", function () {
    // Função para gerar um número aleatório dentro de um intervalo
    function gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Gerar e atribuir valores aos spans com zeros à esquerda
    document.getElementById("codigo-produto").textContent = gerarNumeroAleatorio(0, 999999).toString().padStart(6, "0");
    document.getElementById("ncm").textContent = gerarNumeroAleatorio(0, 99999999).toString().padStart(8, "0");
    document.getElementById("cst").textContent = gerarNumeroAleatorio(0, 999).toString().padStart(3, "0");
    document.getElementById("cfop").textContent = gerarNumeroAleatorio(0, 9999).toString().padStart(4, "0");
  
    // Gerar log
    console.log("Dados de produto gerados.");
  });