// //função de entrada
// function executar() {
//     const valorLitroGasolina: number =
//         Number((document.getElementById("gasolina") as HTMLInputElement).value);
//     const valorLitroAlcool: number =
//         Number((document.getElementById("alcool") as HTMLInputElement).value);
//     const consumoGasolina: number =
//         Number((document.getElementById("media_gasolina") as HTMLInputElement).value);
//     const consumoAlcool: number =
//         Number((document.getElementById("media_alcool") as HTMLInputElement).value);
//
//     const resultado: string = calcular(valorLitroGasolina,
//         valorLitroAlcool, consumoGasolina, consumoAlcool);
//
//     //função de avaliação
//     function calcular(valorLitroGasolina: number,
//                       valorLitroAlcool: number,
//                       consumoGasolina: number,
//                       consumoAlcool: number): string {
//
//
//         let custoGasolina: number = valorLitroGasolina / consumoGasolina;
//         let custoAlcool: number = valorLitroAlcool / consumoAlcool;
//
//         if (custoAlcool > custoGasolina) {
//             return "gasolina";
//         }
//
//         return "alcool";
//     }
//
//     escrever(resultado);
//
//     //função de escrita
//     function escrever(resultado: string) {
//         const escreverhtml: HTMLElement = (document.getElementById("resultado") as HTMLElement);
//
//         if (resultado == "gasolina") {
//             escreverhtml.innerHTML = "Use gasolina"
//         } else {
//             escreverhtml.innerHTML = "Use alcool"
//         }
//     }
// }
//execução
function executar() {
    var valorLitroGasolina = tratamento("gasolina");
    var valorLitroAlcool = tratamento("alcool");
    var consumoGasolina = tratamento("media_gasolina");
    var consumoAlcool = tratamento("media_alcool");
    var resultado = calcular(valorLitroGasolina, valorLitroAlcool, consumoGasolina, consumoAlcool);
    escrever(resultado);
}
//tratamento
function tratamento(id) {
    var value = document.getElementById(id);
    return Number(value.value);
}
//processamento
function calcular(valorLitroGasolina, valorLitroAlcool, consumoGasolina, consumoAlcool) {
    var custoGasolina = valorLitroGasolina / consumoGasolina;
    var custoAlcool = valorLitroAlcool / consumoAlcool;
    if (custoAlcool > custoGasolina) {
        return "gasolina";
    }
    return "alcool";
}
//saida
function escrever(resultado) {
    var escreverhtml = document.getElementById("resultado");
    if (resultado == "gasolina") {
        escreverhtml.innerHTML = "Use micholina";
    }
    else {
        escreverhtml.innerHTML = "Use etanóis";
    }
}
