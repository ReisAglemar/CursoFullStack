let cep: string = "8805461"

async function getData(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

    } catch (error) {

        if (error instanceof Error) {
            console.error("Detalhe:", error.message);
        } else {
            console.error("Erro desconhecido:", error);
        }
    }
}

getData(cep);