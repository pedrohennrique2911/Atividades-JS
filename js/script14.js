alert('Programa calculo de área geométrica plana:')

let opcao = (prompt("DIgite um número da figura geométrica: \n 1. Triângulo\n 2. Quadrado\n 3. Retângulo\n 4. Circulo"))

if (opcao == 1){
    let base = parseFloat(prompt('Digite o valor da base:'))
    let altura = parseFloat(prompt('Digite o valor da altura:'))
    let area = base * altura / 2
    alert(`A area do triângulo corresponde a: ${area}`)
}
else
    if (opcao == 3){
        let base = parseFloat(prompt('Digite o valor da base:'))
        let altura = parseFloat(prompt('Digite o valor da altura:'))
        let area = base * altura
        alert(`A area do retângulo corresponde a: ${area}`)
    }
    else
    if (opcao == 4){
        let raio = parseFloat(prompt('Digite o valor do raio:'))
        let area = 3.14 * raio * raio
        alert(`A area do circulo corresponde a: ${area}`)
    }
    else{
        alert('Não possui número correspondente')
    }
