function displayYes() {
    const pdfUrl = "Contrato.pdf";
    
    // Cria um link temporário para o download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'arquivo.pdf'; // Nome sugerido para o arquivo baixado
    document.body.appendChild(link);
    link.click();
    
    // Remove o link temporário
    document.body.removeChild(link);
}
function moveNo() {
    const noButton = document.querySelector(".no");
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Gere posições aleatórias dentro dos limites da tela, considerando o tamanho do botão
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}