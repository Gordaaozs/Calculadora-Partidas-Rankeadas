// Calculadora de partidas Rankeadas
let nomedojogador = "Gordaaoo";
let niveldojogador = "134";
let vitorias_derrotas = calcularVitoriasDerrotas(200, 100);
let nivelRankeada;

function calcularVitoriasDerrotas(numA, numB) {
    return numA - numB;
}

if (vitorias_derrotas < 10) {
    nivelRankeada = "Ferro";
} else if (vitorias_derrotas <= 20) {
    nivelRankeada = "Bronze";
} else if (vitorias_derrotas <= 50) {
    nivelRankeada = "Prata";
} else if (vitorias_derrotas <= 80) {
    nivelRankeada = "Ouro";
} else if (vitorias_derrotas <= 90) {
    nivelRankeada = "Diamante";
} else if (vitorias_derrotas <= 100) {
    nivelRankeada = "Mestre";
} else if (vitorias_derrotas > 100) {
    nivelRankeada = "Grão Mestre";
}

console.log("O " + nomedojogador + " está no level " + niveldojogador + " e seu nível ranqueada é " + nivelRankeada);

