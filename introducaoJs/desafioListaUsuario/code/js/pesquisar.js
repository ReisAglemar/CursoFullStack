import { divUsuario, input, usuarios } from "./state.js";
export function pesquisar() {
    const nomeUsuario = input.value;
    console.log(nomeUsuario);
    for (const usuario of usuarios) {
        if (usuario.toLowerCase() === nomeUsuario.toLocaleLowerCase()) {
            divUsuario.innerHTML = `<div>
                                        <p>${usuario}</p>
                                    </div>`;
            return;
        }
        divUsuario.innerHTML = `<div>
                                    <p>Usuário inexistente</p>
                                </div>`;
    }
}
