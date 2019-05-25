import program from 'commander'

import { version } from '../package.json'

import getForecast from './main'
import { saveApiToken } from './utils/apiToken'

export function init(args) {
    
    program
        .version(version, '-v, --version', 'Mostra a versão da ferramenta')
        .option('-t --token [token]', 'Advisor ClimaTempo API token')
        .arguments('<cityName...>')
        .description('Mostra o clima de uma cidade em tempo real')
        .action(async (cityName) => {
            if (program.token) {
                await saveApiToken(program.token)
            }

            getForecast(cityName.join(' '))
        })
        .on('--help', () => {
            console.log()
            console.log('Exemplos:')
            console.log('$ clima porto alegre')
            console.log('$ clima são paulo')
        })

    program.parse(args)
}