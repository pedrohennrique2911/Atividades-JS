let produto = Number(prompt('Informe o valor do produto: '))
let desconto = parseInt(prompt('Informe o valor do desconto: '))
let percentual = desconto / 100

let precoFinal = produto - desconto

alert('O preço atual do produto é: ' + precoFinal)

