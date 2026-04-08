// função anônima

const somar = function (a: number, b: number): number {
    return a + b;
}
// console.log("Função anônima somar, resultado: " + somar(2, 3))

const somar2 = (a: number, b: number): number => a + b;
// console.log(somar2(2, 3))


// @ts-ignore
const dobra = a => a * 2;
// console.log(dobra(10))

// @ts-ignore
const quadrado = x => x * x;
// console.log(quadrado(5))

const somarQuadrado = (x:number, y:number) => quadrado(x) + quadrado(y);

console.log(somarQuadrado(5,3));

// @ts-ignore
const numeros: number[] = [1, 2, 3, 4, 5, 6];

numeros.forEach(n => console.log(n));

