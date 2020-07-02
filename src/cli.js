import program from 'commander' // estrutura a aplicação CLI

import { version } from '../package.json' // informa a versão da CLI

import getForecast from './main' // função que busca informação da cidade
import { saveApiToken } from './utils/apiToken' // função que salva o token pra não pedir toda a hora

export function init(args) {
    
    program // instância do commander
        .version(version, '-v, --version', 'Mostra a versão da ferramenta') // mostra a versão da CLI
        .option('-t --token [token]', 'Advisor ClimaTempo API token') // opção de passar o token
        .arguments('<cityName...>') // único argumento é o nome da cidade    "<>" indica que é obrigatório  "..." inclui demais argumentos
        .description('Mostra o clima de uma cidade em tempo real') // descrição do comando
        .action(async (cityName) => { // ação realizada
            if (program.token) { // se passou o token: 
                await saveApiToken(program.token) // salva token
            }

            //  altera cityName, caso o estado seja especificado no padrão adotado 
            if (cityName.includes("-")) {                   // se cityName contém "-":
                const state = "&state=" + cityName.pop();       // retira informação de estado do cityName e guarda formatado   
                cityName.pop();                                 // retira "-" do cityName
                cityName[cityName.length - 1] = cityName[cityName.length - 1] + state;
            }                                                   // concatena último elemento do cityName com estado formatado
                
            getForecast(cityName.join(' ')) // junta todas as partes do argumento e passa para a API
        })
        .on('--help', () => { // passa exemplo de uso
            console.log()
            console.log('Exemplos:')
            console.log('$ clima porto alegre')
            console.log('  -> retorna dados de Porto Alegre - RS')
            console.log('$ clima são paulo')
            console.log('  -> retorna dados de Morro de São Paulo - BA')  // mostra a necessidade de passar estado
            console.log('$ clima são paulo - sp')                         // quando há cidades com nomes ou 
            console.log(  '-> retorna dados de São Paulo - SP')           // parte do nomes iguais
        })

    program.parse(args) // retorna resposta da API
}