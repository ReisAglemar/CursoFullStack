let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const quadrado2 = (numero:number): number => numero*numero;

const metade = (numero:number): number => numero/2;

for (let i:number = 1; i <= numeros.length; i++) {
    console.log(`O dobro de ${i} é: ` + quadrado2(i));
    console.log(`A metade de ${i} é: `+ metade(i));
}

for (let i:number = 1; i <= numeros.length; i++) {
    console.log(`======= Tabuada do ${i} =======`);

    for (let j:number = 0; j <= numeros.length; j++) {
        console.log(`${i} * ${j} = ` + i*j);
    }
    console.log(`======= FIM Tabuada do ${i} =======`);
    console.log("");

}

