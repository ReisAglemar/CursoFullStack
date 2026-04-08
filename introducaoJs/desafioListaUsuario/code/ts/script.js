"use strict";
const usuarios = ["João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda", "Lucas", "Juliana", "Rafael",
    "Camila", "Bruno", "Patrícia", "Gustavo", "Renata", "Felipe", "Larissa", "Daniel", "Beatriz", "André", "Mariana",
    "Tiago", "Vanessa", "Eduardo", "Paula", "Rodrigo", "Aline", "Marcelo", "Tatiane", "Leonardo", "Bianca"];
function pesquisar() {
    console.log("pesquisar");
    const input = document.getElementById("nome");
    const nomeUsuario = input.value;
    const divUsuario = document.getElementById("lista-Usuario");
    for (const usuario of usuarios) {
        if (usuario === nomeUsuario) {
            divUsuario.innerHTML = `<div><p>${nomeUsuario}</p></div>`;
            return;
        }
    }
    divUsuario.innerHTML = `<p>Usuário não exites</p><hr>`;
}
