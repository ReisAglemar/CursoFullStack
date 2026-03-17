"use strict";
//execução
function executar() {
    const valorLitroGasolina = tratamento("gasolina");
    const valorLitroAlcool = tratamento("alcool");
    const consumoGasolina = tratamento("media_gasolina");
    const consumoAlcool = tratamento("media_alcool");
    const resultado = calcular(valorLitroGasolina, valorLitroAlcool, consumoGasolina, consumoAlcool);
    escrever(resultado);
}
//tratamento
function tratamento(id) {
    const value = document.getElementById(id);
    return Number(value.value);
}
//processamento
function calcular(valorLitroGasolina, valorLitroAlcool, consumoGasolina, consumoAlcool) {
    const custoGasolina = valorLitroGasolina / consumoGasolina;
    const custoAlcool = valorLitroAlcool / consumoAlcool;
    if (custoAlcool > custoGasolina) {
        return "gasolina";
    }
    return "alcool";
}
//saida
function escrever(resultado) {
    const escreverhtml = document.getElementById("resultado");
    if (resultado == "gasolina") {
        escreverhtml.innerHTML = "Use micholina";
    }
    else {
        escreverhtml.innerHTML = "Use etanóis";
    }
}
