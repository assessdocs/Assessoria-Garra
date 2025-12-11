document.addEventListener("DOMContentLoaded", () => {
    // Função para gerar um número aleatório de 40 dígitos formatados em grupos de 4 separados por ponto
    const gerarChaveAcesso = () => {
      let chave = "";
      for (let i = 0; i < 10; i++) {
        const grupo = Math.floor(1000 + Math.random() * 9000); // Gera um grupo de 4 dígitos
        chave += i === 0 ? grupo : "." + grupo; // Adiciona ponto entre os grupos
      }
      return chave;
    };
  
    // Gerar a chave de acesso
    const chaveAcesso = gerarChaveAcesso();
  
    // Selecionar o span e atribuir a chave gerada
    document.getElementById("chavedeacesso").textContent = chaveAcesso;
  
    // Log no console
    console.log("Chave de Acesso gerada.");
  });
  