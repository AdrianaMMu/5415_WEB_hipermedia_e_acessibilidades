// Função para enviar a mensagem do Utilizador
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return; // Não envia se a entrada estiver vazia

    // Exibir a pergunta do Utilizador no chat
    const userMessage = `<p><strong>Você:</strong> ${userInput}</p>`;
   document.getElementById('chatlogs').innerHTML += userMessage;

    // Resposta do chatbot
    const botResponse = getBotResponse(userInput);
    const botMessage = `<p><strong>Chatbot:</strong> ${botResponse}</p>`;
   document.getElementById('chatlogs').innerHTML += botMessage;

    // Limpar o campo de entrada
   document.getElementById('userInput').value = '';

    // Scroll para a última mensagem
    document.getElementById('chatlogs').scrollTop = document.getElementById('chatlogs').scrollHeight;
}

// Função para fornecer respostas do chatbot
function getBotResponse(input) {
    const normalizedInput = input.toLowerCase().trim();

    // Respostas simples baseadas em palavras-chave
    if (normalizedInput.includes('oi') || normalizedInput.includes('olá')) {
        return "Olá! Como posso ajudar você hoje?";
    } else if (normalizedInput.includes('inteligência artificial') || normalizedInput.includes('ia')) {
        return "A Inteligência Artificial (IA) é a área da computação que cria sistemas que podem aprender e tomar decisões por conta própria.";
    } else if (normalizedInput.includes('machine learning')) {
        return "Machine Learning é uma subárea da IA que foca em ensinar as máquinas a aprender com os dados sem programação explícita.";
    } else if (normalizedInput.includes('adeus') || normalizedInput.includes('tchau')) {
        return "Até logo! Se precisar, estarei por aqui.";
    } else {
        return "Desculpe, não entendi. Pode reformular a pergunta?";
    }
}
