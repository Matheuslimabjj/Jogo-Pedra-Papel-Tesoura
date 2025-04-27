function jogar() {
    // Nome do jogador
    let nomeJogador = prompt("Qual é o seu nome?");

    // Verifica a idade do jogador
    let idade = prompt("Quantos anos você tem?");
    if (idade >= 18) {
        let escolhaJogador;
        
        // Loop para escolha válida
        do {
            escolhaJogador = prompt("Escolha: 1 para Cora, 2 para Bellato, 3 para Acrécia.");
        } while (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3);

        // Escolha da máquina
        let escolhaComputador = Math.floor(Math.random() * 3) + 1;

        // Lógica do jogo
        let mensagem = ""; // Variável para armazenar a mensagem
        if (escolhaJogador == escolhaComputador) {
            mensagem = `Empate! Ambos escolheram ${escolhaJogador == 1 ? "Cora" : escolhaJogador == 2 ? "Bellato" : "Acrécia"}.`;
        } else if ((escolhaJogador == 1 && escolhaComputador == 2) || // Cora perde para Bellato
                   (escolhaJogador == 2 && escolhaComputador == 3) || // Bellato perde para Acrécia
                   (escolhaJogador == 3 && escolhaComputador == 1)) { // Acrécia perde para Cora
            mensagem = `Computador venceu! Você escolheu ${escolhaJogador == 1 ? "Cora" : escolhaJogador == 2 ? "Bellato" : "Acrécia"} e o computador escolheu ${escolhaComputador == 1 ? "Cora" : escolhaComputador == 2 ? "Bellato" : "Acrécia"}.`;
        } else {
            mensagem = `${nomeJogador} venceu! Você escolheu ${escolhaJogador == 1 ? "Cora" : escolhaJogador == 2 ? "Bellato" : "Acrécia"} e o computador escolheu ${escolhaComputador == 1 ? "Cora" : escolhaComputador == 2 ? "Bellato" : "Acrécia"}.`;
        }

        // Atualiza a caixa de mensagens
        document.getElementById("mensagem").innerText = mensagem;
    } else {
        document.getElementById("mensagem").innerText = "Você é menor de idade, não pode jogar.";
    }
}