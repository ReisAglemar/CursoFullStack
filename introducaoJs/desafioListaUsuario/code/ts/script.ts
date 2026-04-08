import {carregar} from "./carregar.js";
import {pesquisar} from "./pesquisar.js";
import {cadastrar} from "./cadastratar.js";

document.getElementById("btn-carregar")?.addEventListener("click", carregar);
document.getElementById("btn-pesquisar")?.addEventListener("click", pesquisar);
document.getElementById("btn-cadastrar")?.addEventListener("click", cadastrar);
