let usuarios: string[] = ["João", "Maria", "Pedro", "Ana", "Carlos", "Fernanda", "Lucas", "Juliana", "Rafael",
    "Camila", "Bruno", "Patrícia", "Gustavo", "Renata", "Felipe", "Larissa", "Daniel", "Beatriz", "André", "Mariana",
    "Tiago", "Vanessa", "Eduardo", "Paula", "Rodrigo", "Aline", "Marcelo", "Tatiane", "Leonardo", "Bianca"]


const divUsuario: HTMLDivElement = document.getElementById("lista-Usuario") as HTMLDivElement;
let input: HTMLInputElement = document.getElementById("nome") as HTMLInputElement;


function pesquisar(): void {

    const nomeUsuario: string = input.value;

    console.log(nomeUsuario);

    for (const usuario of usuarios) {
        if (usuario.toLowerCase() === nomeUsuario.toLocaleLowerCase()) {
            divUsuario.innerHTML = `<div>
                                        <p>${usuario}</p>
                                    </div>`
            return;
        }

        divUsuario.innerHTML = `<div>
                                    <p>Usuário inexistente</p>
                                </div>`;

    }
}

function carregar(): void {

    input.value = "";
    input.innerHTML;

    divUsuario.innerHTML = "";

    for (const usuario of usuarios) {
        divUsuario.innerHTML += `<div>
                                    <p>${usuario}</p>
                                 </div>`
    }
}

function cadastrar() {

    let novoUsuario: string = input.value.toLocaleLowerCase();
    novoUsuario = novoUsuario.charAt(0).toUpperCase() + novoUsuario.slice(1);

    usuarios.push(novoUsuario);

    for (const usuario of usuarios) {

        if (usuario === novoUsuario) {
            divUsuario.innerHTML = `<div>
                                        <p>Usuário ${usuario}, cadastrado com sucesso</p>
                                    </div>`

            input.value ="";
            input.innerHTML;

        } else {
            divUsuario.innerHTML = `<div>
                                        <p>Erro ao cadastrar, tente novamente!</p>
                                    </div>`
        }
    }
}
