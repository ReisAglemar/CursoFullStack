const cep: string = "8805461"

async function consultaCep(cep: string) {
    try{
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        if (!resposta.ok) {
            const erroTexto = await resposta.text();
            throw new Error(`Erro ${resposta.status}: ${erroTexto}`);
        }

        const dados = await resposta.json()
        console.log(dados)
    } catch (error) {
        console.error("Erro detalhado:", error);
    }
}

consultaCep(cep);