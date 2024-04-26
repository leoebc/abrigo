// DECLARAÇÃO DO READLINE-SYNC
const ask = require('readline-sync');

// DECLARAÇÃO DO ARRAY DE OBJETOS QUE EMULARÁ NOSSO BANCO DE DADOS
let abrigos = []

// FUNÇÃO DE CADASTRAR ABRIGO
function cadastraAbrigo(){
    console.clear()
    let abrigo = {}
    abrigo.codigo = abrigos.length + 1
    console.log('#### CADASTRO DE ABRIGO ####\n\n')
    abrigo.nome = ask.question('Digite o nome do abrigo: ')
    abrigo.endereco = ask.question('Digite o endereco do abrigo: ')
    abrigo.telefone = ask.question('Digite o telefone do abrigo: ')
    abrigo.capacidade = ask.question('Digite a capacidade do abrigo: ')
    console.log("Escolha sua cidade: ")
    console.log("1. Esteio\n2. Canoas\n3. São Leopoldo\n4. Cachoeirinha\n5. Sapucaia\n6. Porto Alegre")
    opcaoValida = false 
    while (!opcaoValida) {
        opcao = Number(ask.question("Digite um dos numeros: "))
        switch (opcao) {
            case 1:
                abrigo.cidade = "Esteio"
                opcaoValida = true
            break
            case 2:
                abrigo.cidade = "Canoas"
                opcaoValida = true
            break
            case 3:
                abrigo.cidade = "São Leopoldo"
                opcaoValida = true
            break
            case 4:
                abrigo.cidade = "Cachoeirinha"
                opcaoValida = true
            break
            case 5:
                abrigo.cidade = "Sapucaia"
                opcaoValida = true
            break
            case 6:
                abrigo.cidade = "Porto Alegre"
                opcaoValida = true
            break
            default:
                console.log("Opção invalida")
        }
    }
    abrigos.push(abrigo)
    console.log('#### ABRIGO CADASTRADO COM SUCESSO ####')
}

// FUNÇÃO DE LISTAR ABRIGOS. AQUI ESTAMOS UTILIZANDO O COMANDO PadEnd PARA MANTER A FORMATAÇÃO CORRETA DA IMPRESSÃO NO CONSOLE
function listaAbrigos() {
    console.clear()
    console.log("--------------------\nLISTAGEM DE ABRIGOS:\n--------------------")
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE")
    console.log("---------------------------------------------------------------------------------------------------------")
    for (let abrigo of abrigos) {
        console.log(` ${abrigo.codigo.toString().padEnd(5)} | ${abrigo.nome.padEnd(21)}| ${abrigo.endereco.padEnd(35)}| ${abrigo.telefone.padEnd(13)}| ${abrigo.capacidade.padEnd(12)}| ${abrigo.cidade}`)    
    }
    console.log("---------------------------------------------------------------------------------------------------------")
    ask.question('Pressione ENTER para continuar...')
}

// FUNÇÃO DE BUSCAR ABRIGOS. AQUI TAMBEM ESTAMOS UTILIZANDO O COMANDO PadEnd PARA MANTER A FORMATAÇÃO CORRETA DA IMPRESSÃO NO CONSOLE
function buscaAbrigosPorCidade(){
    console.clear()
    console.log('-----------------------\nQUAL CIDADE VOCE ESTA?\n-----------------------\n')
    console.log("1. Esteio\n2. Canoas\n3. São Leopoldo\n4. Cachoeirinha\n5. Sapucaia\n6. Porto Alegre")
    opcaoValida = false
    while(!opcaoValida){
        opcao = Number(ask.question('Escolha uma opcao: '))
        switch (opcao) {
            case 1:
                cidade = "Esteio"
                opcaoValida = true
            break
            case 2:
                cidade = "Canoas"
                opcaoValida = true
            break
            case 3:
                cidade = "São Leopoldo"
                opcaoValida = true
            break
            case 4:
                cidade = "Cachoeirinha"
                opcaoValida = true
            break
            case 5:
                cidade = "Sapucaia"
                opcaoValida = true
            break
            case 6:
                cidade = "Porto Alegre"
                opcaoValida = true
            break
            default:
                console.log("Opção invalida")
            break
        }
    }
    console.clear()
    console.log("--------------------\nLISTAGEM DE ABRIGOS:\n--------------------")
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE")
    console.log("---------------------------------------------------------------------------------------------------------")
    for(abrigo of abrigos){
        if(abrigo.cidade.toUpperCase() === cidade.toUpperCase()){
            console.log(` ${abrigo.codigo.toString().padEnd(5)} | ${abrigo.nome.padEnd(21)}| ${abrigo.endereco.padEnd(35)}| ${abrigo.telefone.padEnd(13)}| ${abrigo.capacidade.padEnd(12)}| ${abrigo.cidade}`)
        }
    }
    console.log("---------------------------------------------------------------------------------------------------------")
    ask.question('Pressione ENTER para continuar...')
}

// VARIÁVEL QUE MANTEM O MENU RODANDO
let menuRodando = true

// MENU
while(menuRodando){
    console.clear()
    console.log('===== ABRIGOS TEMPORÁRIOS =====')
    console.log('1. Cadastrar abrigo\n2. Listar abrigos\n3. Procurar abrigo\n4. Sair')
    opcao = Number(ask.question('Escolha uma opcao: '))
    switch (opcao) {
        case 1:
            cadastraAbrigo()
            break
        case 2:
            listaAbrigos()
            break
        case 3:
            buscaAbrigosPorCidade()
            break
        case 4:
            menuRodando = false
            console.clear()
            break
        default:
            console.log('OPCAO INVALIDA')
    }
}


