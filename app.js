let mapaMalha;
let mapaDados;

// Dados 
let dados_uf = [
    {"UF": "BR", "estado": "Brasil",              "dom_cao": 33754, "perc_cao": 46.1, "dom_gato": 14144, "perc_gato": 19.3}, 
    {"UF": "RO", "estado": "Rondônia",            "dom_cao": 381, "perc_cao": 64.8,   "dom_gato": 158, "perc_gato": 26.9}, 
    {"UF": "AC", "estado": "Acre",                "dom_cao": 161, "perc_cao": 60,     "dom_gato": 71, "perc_gato": 26.4}, 
    {"UF": "AM", "estado": "Amazonas",            "dom_cao": 548, "perc_cao": 49.1,   "dom_gato": 243, "perc_gato": 21.8}, 
    {"UF": "RR", "estado": "Roraima",             "dom_cao": 90, "perc_cao": 58.9,    "dom_gato": 36, "perc_gato": 23.5}, 
    {"UF": "PA", "estado": "Pará",                "dom_cao": 1289, "perc_cao": 50.2,  "dom_gato": 677, "perc_gato": 26.4},
    {"UF": "AP", "estado": "Amapá",               "dom_cao": 118, "perc_cao": 54.4,   "dom_gato": 49, "perc_gato": 22.8}, 
    {"UF": "TO", "estado": "Tocantins",           "dom_cao": 253, "perc_cao": 49,     "dom_gato": 141, "perc_gato": 27.2}, 
    {"UF": "MA", "estado": "Maranhão",            "dom_cao": 903, "perc_cao": 42.8,   "dom_gato": 665, "perc_gato": 31.5}, 
    {"UF": "PI", "estado": "Piauí",               "dom_cao": 482, "perc_cao": 45.8,   "dom_gato": 343, "perc_gato": 32.6},  
    {"UF": "CE", "estado": "Ceará",               "dom_cao": 1165, "perc_cao": 38.8,  "dom_gato": 879, "perc_gato": 29.3}, 
    {"UF": "RN", "estado": "Rio Grande do Norte", "dom_cao": 443, "perc_cao": 39.3,   "dom_gato": 233, "perc_gato": 20.6}, 
    {"UF": "PB", "estado": "Paraíba",             "dom_cao": 475, "perc_cao": 35.6,   "dom_gato": 289, "perc_gato": 21.7}, 
    {"UF": "PE", "estado": "Pernambuco",          "dom_cao": 1130, "perc_cao": 34.2,  "dom_gato": 663, "perc_gato": 20.1},
    {"UF": "AL", "estado": "Alagoas",             "dom_cao": 369, "perc_cao": 34,     "dom_gato": 269, "perc_gato": 24.8}, 
    {"UF": "SE", "estado": "Sergipe",             "dom_cao": 275, "perc_cao": 34.7,   "dom_gato": 193, "perc_gato": 24.4}, 
    {"UF": "BA", "estado": "Bahia",               "dom_cao": 1912, "perc_cao": 36.4,  "dom_gato": 1061, "perc_gato": 20.2}, 
    {"UF": "MG", "estado": "Minas Gerais",        "dom_cao": 3673, "perc_cao": 47.8,  "dom_gato": 1112, "perc_gato": 14.5}, 
    {"UF": "ES", "estado": "Espírito Santo",      "dom_cao": 572, "perc_cao": 40.3,   "dom_gato": 188, "perc_gato": 13.2}, 
    {"UF": "RJ", "estado": "Rio de Janeiro",      "dom_cao": 2475, "perc_cao": 38.1,  "dom_gato": 948, "perc_gato": 14.6}, 
    {"UF": "SP", "estado": "São Paulo",           "dom_cao": 7469, "perc_cao": 45.5,  "dom_gato": 2620, "perc_gato": 16}, 
    {"UF": "PR", "estado": "Paraná",              "dom_cao": 2426, "perc_cao": 58.7,  "dom_gato": 754, "perc_gato": 18.2},
    {"UF": "SC", "estado": "Santa Catarina",      "dom_cao": 1408, "perc_cao": 53.3,  "dom_gato": 515, "perc_gato": 19.5}, 
    {"UF": "RS", "estado": "Rio Grande do Sul",   "dom_cao": 2551, "perc_cao": 58.7,  "dom_gato": 1094, "perc_gato": 25.2}, 
    {"UF": "MS", "estado": "Mato Grosso do Sul",  "dom_cao": 584, "perc_cao": 61.5,   "dom_gato": 200, "perc_gato": 21.1}, 
    {"UF": "MT", "estado": "Mato Grosso",         "dom_cao": 747, "perc_cao": 61.2,   "dom_gato": 275, "perc_gato": 22.6}, 
    {"UF": "GO", "estado": "Goiás",               "dom_cao": 1427, "perc_cao": 58.2,  "dom_gato": 359, "perc_gato": 14.7}, 
    {"UF": "DF", "estado": "Distrito Federal",    "dom_cao": 427, "perc_cao": 41.1,   "dom_gato": 107, "perc_gato": 10.3}
]

// como a função carrega um arquivo, usamos o termo async para esperar um resultado
// para indicar que ela vai esperar o carregamento
// para usar 'await'
async function loadMapData(){
    // endereço da malha do Brasil, por UF, na API do IBGE
    let mapaUrl = 'https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=UF'
   
    // endereço dos dados por UF, na API do IBGE
    let dadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    // carrega o arquivo da malha da URL do IBGE
    // Só passa p a próxima linha quando carregar mapaUrl
    // Só posso usar se a função for async 
    let mapaSvg = await fetch(mapaUrl);
    //console.log(mapaSvg)
    
    // converte os dados carregados para o formato de string (corpo da resposta convertido em texto)
    mapaMalha = await mapaSvg.text();
    //console.log(mapaMalha)

    // Criou o mapa (SEM interação)
    let mapaConteudo = document.querySelector('#mapa-conteudo');
    // Subst o html interno do elemento 'mapaConteudo'
    mapaConteudo.innerHTML = mapaMalha

    // Pegar dados
    let dadosJson = await fetch(dadosUrl);
    // Converter em json
    mapaDados = await dadosJson.json();
    console.log(mapaDados)
    
/*
    // Criar uma interação
    // Todos os path do svg
    let elemMunicipios = document.querySelectorAll('#mapa-conteudo svg path');

    //console.log(elemMunicipios);

     elemMunicipios.forEach((elemento) => {
        //console.log(elemento.id);
        let numAleatorio = Math.random();
        
        elemento.dataset.indice = numAleatorio.toFixed(2);

        // opacidade
        elemento.setAttribute('fill-opacity', numAleatorio)

        // linha 59 = linha 60 
        //elemento.addEventListener('mouseover', funcaoover)
        elemento.onmouseover = marcaMunicipio

        //elemento.removeEventListener() // se usar 'addEventListener'

        elemento.onmouseout = desmarcaMunicipio;

    })
   
    // carrega o arquivo de dados municipais
    let dadosJson = await fetch(dadosUrl);
    mapaDados = await dadosJson.json();

    let mapaConteudo = document.querySelector('#mapa-conteudo');
    mapaConteudo.innerHTML = mapaMalha;

    let elemMunicipios = document.querySelectorAll('#mapa-conteudo svg path');

    elemMunicipios.forEach((elemento) => {
        let numAleatorio = Math.random()*0.8; // cria um índice fictício com um número aleatório
        elemento.dataset.indice = (1 - numAleatorio).toFixed(2); // adiciona esse índice aos atributos do elemento

        // determina a opacidade de cor do preenchimento de acordo com o índice
        elemento.setAttribute('fill-opacity', elemento.dataset.indice);
        // determina a função a executar no mouseover
        elemento.onmouseover = marcaMunicipio;
        // determina a função a executar no mouseout
        elemento.onmouseout = desmarcaMunicipio;
        
    });*/
}

function marcaMunicipio(event){
    // seleciona o alvo do evento (o vetor do município)
    let elemento = event.target;
    // pega o atributo id do elemento, que tem o código do IBGE
    let codigoAlvo = elemento.id;

    let dadosMunicipio = mapaDados.filter(function(item){
        return item.id === codigoAlvo;
    })

    elemento.classList.add('ativo');

    
    let nome = dadosMunicipio[0].nome;
    let uf = dadosMunicipio[0].microrregiao.mesorregiao.UF.sigla;
    let indice = elemento.dataset.indice;

    console.log(dadosMunicipio, uf);

    // Tem cofio alternativo para isso
    //console.log(dadosMunicipio[0].nome);
    document.querySelector('#muni-titulo').textContent = nome + '(' + uf + ')';
    document.querySelector('#muni-valor').textContent = "índice: " + indice;
}

function desmarcaMunicipio(event){
    let elemento = event.target;
    elemento.classList.remove('ativo')
}

/*function marcaMunicipio(event){
    // seleciona o alvo do evento (o vetor do município)
    let elemento = event.target;
    // pega o atributo id do elemento, que tem o código do IBGE
    let codigoAlvo = elemento.id;
    // let codigo = dados.properties.codarea;
    let dadosMunicipio = mapaDados.filter(function(item){
        return item.id === codigoAlvo;
    });

    // pega o nome do municipio do json
    let nome = dadosMunicipio[0].nome;
    // pega a UF desse município do json
    let uf = dadosMunicipio[0].microrregiao.mesorregiao.UF.sigla;

    // tira a classe 'ativo' da seleção anterior, se houver
    let selecaoAnterior = document.querySelector('path.ativo');
    if(selecaoAnterior){ selecaoAnterior.classList.remove("ativo") }

    // adiciona a classe 'ativo' ao elemento atual
    elemento.classList.add("ativo");

    // preenche os elementos com nome, UF e o índice
    document.querySelector('#muni-titulo').textContent = nome + " (" + uf + ") ";
    document.querySelector('#muni-valor').textContent = "índice: " + elemento.dataset.indice;
}

function desmarcaMunicipio(event){
    // seleciona o alvo do evento (o vetor do município)
    let elemento = event.target;
    // remove a classe de destaque
    elemento.classList.remove("ativo");
}

*/
loadMapData();