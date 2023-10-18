/*****************************************************************
 * Objetivo: Trabalhar com conceitos de ARRAY e JSON
 * Data: 27/09/2023
 * Autor: Marcel
 * Versão: 1.0 
 ****************************************************************/

// [ ] -> significa uma estrutura de array
// { } -> significa uma estrutura json

//criando array e atribuindo conteúdo para ele
const conceitoArray = function(){
    let listaDeNomes = ['Jose', 'Maria', 'Luiz', 'Ana', 10 ];

    console.log(listaDeNomes)
    console.table(listaDeNomes)

//selecionar elemento individualmente
    console.log(listaDeNomes[0])

//retorna o tipo de dado de um determinado elemento
    console.log(typeof listaDeNomes[4])

//mudar conteúdo de uma determinada posição da array    
    listaDeNomes[1] = 'Maria da Silva'

//adiciona novos elementos no fim do array
    listaDeNomes.push('Andre da Silva')
    listaDeNomes.push('Carlos da Silva', 'Suzane da Silva', 'Julia da Silva')
    console.table(listaDeNomes)

//adiciona elementos no início do array
    //obs: organiza todos os índices e seus conteúdos
    listaDeNomes.unshift('Nathalia da Silva', 'Pedro da Silva')
    console.table(listaDeNomes)

//remove elementos de acordo com a posição e quantidade de elementos
      //primeiro argumento é o índice
         //segunda argumento é a quantidade de elementos
    listaDeNomes.splice(3, 3)
    console.table(listaDeNomes)

//remove um elemnto do início do array
    listaDeNomes.shift()
    console.table(listaDeNomes)

}

const percorrendoArray = function(){
    let listadeProdutos = ['mouse', 'teclado', 'monitor', 'computador', 'caixa de som', 'impressora', 'fone de ouvido', 'web cam', 'microfone', 'hd', 'memória']

//retorna a quantidade de elementos de um array
    console.log(listadeProdutos.length)

    //let cont = 0
   // while (cont < listadeProdutos.length){
      //console.log(`Nome do produto: ${listadeProdutos[cont]} `)
        //cont++

   // }

    /*for(let cont = 0; cont < listadeProdutos.length; cont++){
        console.log(`Nome do produto: ${listadeProdutos[cont]} `)
    }*/

    //listadeProdutos.forEach(function(produto){
        //console.log(`Nome do produto: ${produto}`)
    //})

//mostra o índice de determinado elemento
   //obs: caso o indexOf não encontre o item, sempre retornará -1
    console.log(listadeProdutos.indexOf('impressora'))

//mostra se o item está contido na array
    console.log(listadeProdutos.includes('impre'))

    
}

const filtrarProduto = function(nomeProduto){
    let listadeProdutos = ['mouse', 'teclado', 'monitor', 'computador', 'caixa de som', 'impressora', 'fone de ouvido', 'web cam', 'microfone', 'hd', 'memória']

    let nome = nomeProduto
    let status = false
    let cont = 0

//usando o indexOf
    //if(listadeProdutos.indexOf(nome) >= 0){
      //  status = true
    //}
    //return status

    //if(listadeProdutos.includes(nome)){
        //status = listadeProdutos.includes(nome)

//fazendo o filtro manual
    listadeProdutos.forEach(function(produto){
//filtro para formatação da palavra
        if(produto.toUpperCase() == nome.toUpperCase())
        cont++
    })

    return cont


}

const conceitoJSOn = function(){
    //Criando um variável JSON e colocando atributos manuais
    let aluno = {nome: 'José da Silva', telefone: '1147895254', celular: '1197878756'}
    let aluno2 =  {nome: 'Maria da Silva', telefone: '1182739164', celular: '1193546843'}
    let aluno3 = {nome: 'André da Silva', telefone: '1182739164', celular: '1193546843'}
    let arrayAlunos = []

    //Criando um objeto do tipo array e guardando dois elementos JSON dentro dele
    arrayAlunos.push(aluno, aluno2, aluno3)

    //Adicionando atibuto no JSON de forma dinâmica
    aluno.email = 'jose@gmail.com'
    aluno.ra = 123456

    //Exibimndo todos os atributos da variável
    console.log(aluno)

    //Exibindo atributo específico
    //console.log("O nome do aluno é " + aluno.nome)
   
   //Exibindo todos com Foreach    
    arrayAlunos.forEach(function(dados) {
    console.log("O nome do aluno é: " + dados.nome)
    console.log("Celular: " + dados.celular)
    console.log("telefone do aluno: " + dados.telefone)
    if(dados.email != undefined)
       console.log("Email do aluno: " + dados.email)
    if(dados.ra != undefined)
       console.log("RA: " + dados.ra)
    console.log("********************************\n")
    });
    
}

const cadastroProdutos = function(){   
    let arrayProdutos = []

    //Formatação do arquivo para o tipo certo de dados
    let JSONProdutos = {}

    let categorias = [
        {id: 1, nome_categoria: 'Hardware', descricao_categoria: 'Equipamentos de Hardware para PC'},
        {id: 2, nome_categoria: 'Periféricos', descricao_categoria: 'Periféricos para PC'},
        {id: 3, nome_categoria: 'Games', descricao_categoria: 'Jogos e acessórios para PC'},
        {id: 4, nome_categoria: 'Escritório', descricao_categoria: 'Itens de informática para escritório'},
        {id: 5, nome_categoria: 'Acessório', descricao_categoria: 'Itens de informática acessórios'} 
    ]

    let cores = [
        {id: 1, nome_cor: 'Preto'},
        {id: 2, nome_cor: 'Branco'},
        {id: 3, nome_cor: 'Cinza'},
        {id: 4, nome_cor: 'Azul'},
        {id: 5, nome_cor: 'Vermelho'}
    ]

    let marcas = [
        {id: 1, nome_marca: 'Dell', telefone: '1145454655', email: 'dell@gmail.com'},
        {id: 2, nome_marca: 'Intel', telefone: '1115364684', email: 'intel@gmail.com'},
        {id: 3, nome_marca: 'AMD', telefone: '1124746546', email: 'amd@gmail.com'},
        {id: 4, nome_marca: 'Multilaser', telefone: '1124684548', email: 'multilaser@gmail.com'},
        {id: 5, nome_marca: 'Logitech', telefone: '11235461537', email: 'logitech@gmail.com'},
        {id: 6, nome_marca: 'Positivo', telefone: '11135465132', email: 'positivo@gmail.com'}
    ]
    
    let produto1 = {
        id: 1,
        nome: 'Mouse',
        descricao: 'Mouse óptico com fio',
        valor: 80,
        qtde: 200,
        categorias: categorias[1],
        cor: [
            cores[0],
            cores[1]
        ],
        marca: marcas[0]
    }
    
    let produto2 = {
        id: 2,
        nome: 'Teclado',
        descricao: 'Teclado mecânico',
        valor: '200',
        qtde: '500',
        categoria: categorias[1],
        cor: cores,
        marca: marcas[3]
    }
   
    let produto3 = {
        id: 3,
        nome: 'Caixa de Som',
        descricao: 'Caixa de Som com fio',
        valor: '100',
        qtde: '80',
        categoria: categorias[4],
        cor: [
            cores[0],
            cores[1],
            cores[2]
        ],
        marca: marcas[3]
    }

    arrayProdutos.push(produto1, produto2, produto3)

    //Adicionando o array com todos os produtos em um atributo do tipo JSON
   JSONProdutos.produtos = arrayProdutos
   JSONProdutos.count = arrayProdutos.length

   return JSONProdutos
}

const percorrerArray = function(JSONProdutos){
   let arraylocal = []

   arraylocal = JSONProdutos

   arraylocal.forEach(function(dados) {
    
   });

   return arraylocal
}

console.log(percorrerArray(cadastroProdutos()))




