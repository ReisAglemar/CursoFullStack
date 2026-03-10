var frases = ["Mesmo quando o caminho parece confuso e cheio de incertezas, lembre-se de que Deus continua " +
        "trabalhando em silêncio, organizando aquilo que ainda não conseguimos compreender e preparando o momento certo" +
        "para que cada coisa encontre o seu lugar.",
    "Há momentos em que tudo parece parar, mas muitas vezes é justamente nesse silêncio que Deus está fortalecendo o " +
        "coração e preparando uma nova etapa que exigirá mais fé, mais paciência e mais coragem.",
    "Quando a vida apresentar desafios que parecem maiores do que a sua força, recorde que a fé não serve para negar " +
        "as dificuldades, mas para lembrar que Deus caminha ao seu lado em cada passo da jornada.",
    "Nem sempre entenderemos os motivos de certas portas se fecharem, mas muitas vezes Deus está apenas " +
        "redirecionando o caminho para algo que trará mais crescimento, aprendizado e propósito.",
    "A esperança verdadeira nasce quando decidimos confiar que, mesmo em meio às dificuldades, Deus continua guiando " +
        "a história de forma sábia e paciente.",
    "Cada novo dia traz consigo uma oportunidade silenciosa de recomeçar, aprender com os erros e seguir adiante com" +
        " mais fé no cuidado constante de Deus.",
    "Existem momentos em que tudo o que podemos fazer é continuar caminhando com fé, acreditando que Deus vê muito" +
        " além do que os nossos olhos conseguem enxergar agora.",
    "Deus muitas vezes trabalha nos bastidores da vida, transformando situações difíceis em aprendizado e preparando" +
        " o terreno para algo que no futuro fará sentido.",
    "A verdadeira paz não surge quando todos os problemas desaparecem, mas quando o coração aprende a confiar que " +
        "Deus continua no controle mesmo quando não entendemos o caminho.",
    "Quando a fé permanece firme, até os dias mais difíceis podem se transformar em capítulos importantes de uma " +
        "história que ainda está sendo escrita por Deus.",
    "Há uma força silenciosa na esperança que nasce da fé, pois ela lembra diariamente que nenhuma dificuldade é " +
        "definitiva quando Deus continua presente na caminhada.",
    "Deus conhece cada detalhe da vida e muitas vezes permite certas etapas apenas para desenvolver sabedoria, " +
        "maturidade e confiança no tempo certo das coisas.",
    "A caminhada da fé ensina que nem sempre avançamos na velocidade que desejamos, mas sempre avançamos na direção" +
        " que Deus considera necessária.",
    "Mesmo quando tudo parece perdido, Deus ainda pode transformar o cenário e revelar caminhos que antes " +
        "estavam completamente escondidos.",
    "A fé amadurece quando aprendemos a continuar confiando em Deus mesmo nos períodos em que as respostas parecem " +
        "demoradas.",
    "Cada dificuldade enfrentada com confiança em Deus se transforma em experiência e fortalece o coração para " +
        "desafios ainda maiores no futuro.",
    "Há beleza no processo de crescimento espiritual, pois ele ensina que Deus utiliza tanto os momentos de alegria " +
        "quanto os de dificuldade para moldar a vida.",
    "A presença de Deus não elimina todos os obstáculos do caminho, mas oferece direção, força e serenidade para " +
        "atravessar cada um deles.",
    "A esperança é uma escolha diária de acreditar que Deus ainda está escrevendo novas páginas na história da vida.",
    "Quando colocamos Deus no centro das decisões, o coração encontra equilíbrio mesmo em meio às mudanças e " +
        "incertezas do mundo."];
function novaFrase() {
    var indice = Math.floor(Math.random() * 20);
    var paragrafo = document.getElementById("frase");
    paragrafo.innerHTML = frases[indice];
}
