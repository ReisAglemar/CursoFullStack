import { divUsuario, input, usuarios } from "./state.js";
export function carregar() {
    input.value = "";
    input.innerHTML;
    divUsuario.innerHTML = "";
    for (const usuario of usuarios) {
        divUsuario.innerHTML += `<div>
                                    <p>${usuario}</p>
                                 </div>`;
    }
}
