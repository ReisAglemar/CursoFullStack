//execução
function executar() {
    const valorLitroGasolina: number = tratamento("gasolina");
    const valorLitroAlcool: number = tratamento("alcool");
    const consumoGasolina: number = tratamento("media_gasolina");
    const consumoAlcool: number = tratamento("media_alcool");

    const resultado: string = calcular(
        valorLitroGasolina,
        valorLitroAlcool,
        consumoGasolina,
        consumoAlcool);

    escrever(resultado);
}

//tratamento
function tratamento(id: string): number {
    const value = document.getElementById(id) as HTMLInputElement;
    return Number(value.value);
}

//processamento
function calcular(valorLitroGasolina: number,
                  valorLitroAlcool: number,
                  consumoGasolina: number,
                  consumoAlcool: number): string {

    const custoGasolina: number = valorLitroGasolina / consumoGasolina;
    const custoAlcool: number = valorLitroAlcool / consumoAlcool;

    if (custoAlcool > custoGasolina) {
        return "gasolina";
    }

    return "alcool";
}

//saida
function escrever(resultado: string) {
    const escreverhtml: HTMLElement =
        (document.getElementById("resultado") as HTMLElement);

    if (resultado == "gasolina") {
        escreverhtml.innerHTML = "Use micholina"
    } else {
        escreverhtml.innerHTML = "Use etanóis"
    }
}