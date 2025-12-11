document.addEventListener("DOMContentLoaded", () => {
    // Função para gerar um número aleatório de 15 dígitos
    const gerarProtocolo = () => {
      let protocolo = "";
      for (let i = 0; i < 15; i++) {
        protocolo += Math.floor(Math.random() * 10); // Adiciona um dígito aleatório
      }
      return protocolo;
    };
  
    // Gerar o número do protocolo
    const numeroProtocolo = gerarProtocolo();
  
    // Selecionar o span e atribuir o número gerado
    document.getElementById("protocolo").textContent = numeroProtocolo;
  
    // Log no console
    console.log("Protocolo gerado.");
  });
  