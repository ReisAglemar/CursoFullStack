import {divUsuario, input, usuarios} from "./state.js";

export function cadastrar() {

    let novoUsuario: string = input.value.toLocaleLowerCase();
    novoUsuario = novoUsuario.charAt(0).toUpperCase() + novoUsuario.slice(1);

    usuarios.push(novoUsuario);

    for (const usuario of usuarios) {

        if (usuario === novoUsuario) {
            divUsuario.innerHTML = `<div>
                                        <p>Usuário ${usuario}, cadastrado com sucesso</p>
                                    </div>`

            //limpa o campo de inserção
            input.value ="";
            input.innerHTML;

        } else {
            divUsuario.innerHTML = `<div>
                                        <p>Erro ao cadastrar, tente novamente!</p>
                                    </div>`
        }
    }
}