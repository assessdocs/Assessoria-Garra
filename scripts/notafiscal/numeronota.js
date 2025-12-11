document.addEventListener("DOMContentLoaded", () => {
    // Função para gerar um número aleatório de 8 dígitos
    const gerarNumeroAleatorio = () => Math.floor(10000000 + Math.random() * 90000000);
  
    // Gerar números aleatórios para os spans
    const numeroNota = gerarNumeroAleatorio();
  
    // Selecionar os spans e atribuir os números gerados
    document.getElementById("numero-nota1").textContent = numeroNota;
    document.getElementById("numero-nota2").textContent = numeroNota;
  
    // Log no console
    console.log("Número da Nota Fiscal gerado.");
  });
  