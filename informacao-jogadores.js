// 1. Importa a biblioteca para ler o que o usuário digita no terminal
const prompt = require('prompt-sync')();

console.log("------------- Cadastro de novo recruta -------------");

// 2. Entrada de Dados (Pegando as informações do usuário)
let nomeJogador = prompt("Digite o nome do jogador: ");
let equipe = prompt("Digite o nome da equipe: ");
let pontuacao = Number(prompt("Digite a pontuação inicial do jogador: "));

console.log("\n------------- Informações do Jogador -------------");

// 3. Exibindo as informações cadastradas
console.log("Nome do jogador: ", nomeJogador);
console.log("Equipe: ", equipe);
console.log("Pontuação de ranking: ", pontuacao);

console.log("\n------- Pontuação atualizada após campeonato -------");

// 4. Atualizando a pontuação (como no seu segundo código)
// Vamos supor que ele ganhou 600 pontos no campeonato
pontuacao = pontuacao + 900; 

// 5. Exibindo o resultado final
console.log("Pontuação de ranking atualizada: ", pontuacao);
console.log("----------------------------------------------------");