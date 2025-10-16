const express = require('express');
const app = express();

const piadas = [
    "O que o pato falou para a pata? R: Vem quá!",
    "Qual é o cúmulo da sorte? R: Ser atropelado por uma ambulância.",
    "Por que a velhinha não usa relógio? R: Porque ela é sem hora.",
    "O que o tomate foi fazer no banco? R: Tirar extrato.",
    "Qual a fórmula da água benta? R: H Deus O!",
    "Por que o jacaré tirou o filho da escola? R: Porque ele réptil de ano.",
    "Qual o rei dos queijos? R: O reiqueijão.",
    "O que a impressora disse para a outra? R: Essa folha é sua ou é impressão minha?",
    "Por que a matemática é um problema? R: Porque tem muitos problemas.",
    "O que o zero disse para o oito? R: Belo cinto!"
];

app.get('/piada', (req, res) => {
    const piadaSorteada = piadas[Math.floor(Math.random() * piadas.length)];
    res.json({ "piada": piadaSorteada });
});

app.listen(3000, () => {
    console.log('Servidor pronto!');
});