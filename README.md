# node-clima-cli
CLI que mostra o clima de uma cidade em tempo real

## Instalar dependências
`npm install`

## Instalação
Para instalar localmente e poder usar o comando no terminal, use o comando:

`npm link`

O comando `clima` vai estar disponível no terminal. Você pode usar o comando passando o nome da cidade:

`clima porto alegre`

O comando vai mostrar o clima em tempo real da cidade:

```
Clima em Porto Alegre, RS
    Temperatura: 16°
    Direção do vento: SW
    Velocidade do vento: 9.5 km/h
    Humidade: 74.9%
    Condição: Poucas nuvens
    Pressão atmosférica: 1012.2
    Sensação: 16°
```

## API Advisor ClimaTempo
Esta ferramenta uma a API do ClimaTempo para buscar as informações do clima da cidade. Quando for executar o comando pela primeira vez, é necessário informar o token da API para poder usá-la:

`clima porto alegre --token seu-app-token`

ou

`clima porto alegre -t seu-app-token`

O token só precisa ser informado uma vez e ele será armazenado localmente. Se precisar atualizar o token, basta informá-lo novamente usando o mesmo parâmetro.

Você pode gerar o token [aqui](https://advisor.climatempo.com.br).

## Observações
Este código faz parte do curso **_Desenvolvendo ferramentas de linha de comando em Node.js_** na [Digital Inovation One](https://digitalinnovation.one).
