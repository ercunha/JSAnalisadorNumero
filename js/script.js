let btn = document.getElementById('btn-add');
let numeros = [];
let memoria = document.getElementById('memoria')
btn.innerHTML = `\u{002B} Adicionar`
btn.addEventListener('click',Adicionar)

function Adicionar() {
    
    
  let input = document.getElementById('inputNumero').value
  let result = document.getElementById('result');
  let n = Number(input);
  if (n !== 0 && !numeros.includes(n)) {
    numeros.push(n);

    //Atualizando conteudo de memória
    let memoria = document.querySelector('.memoria')
    memoria.innerHTML += `| ${n} `

    // Adicionando números ao select
        var option = document.createElement('option')
        option.text = `O número ${n} foi adicionado com sucesso!`
        result.appendChild(option)
        console.log(`O número ${n} não existia na lista.`)
        Imprimir(numeros)
  }else{
    alert(`O número ${n} já existia na lista.`)
  }
  Reset()
}

function Reset(){
    document.getElementById('inputNumero').value = ''
}

function Imprimir(numeros){

    let total = document.querySelector('.total')
    let maiorValor = document.querySelector('.maiorValor')
    let menorValor = document.querySelector('.menorValor')
    let media = document.querySelector('.media')
    let maior = ''
    let menor = ''
    let med = ''
    // Valor total da Array
    let soma = numeros.reduce(function (acumulador,valorAtual){
        return acumulador + valorAtual
    },0)

    total.innerHTML = `<h5>A soma total de todos elementos em memória é <b style='color:orangered'>${soma}</b>.</h5>`

    //Maior valor.
    maior  = Number(Math.max(...numeros))
    console.log(Math.max(...numeros))
    maiorValor.innerHTML= `<h5>O maior valor encontrado em memória é <b style='color:orangered'>${maior}</b>.</h5>`

    //Menor valor
    menor = Number(Math.min(...numeros))
    menorValor.innerHTML = `<h5>O menor valor encontrado em memória é <b style='color:orangered'>${menor}</b>.</h5>`

    //Média
    med = Number(soma / numeros.length)
    media.innerHTML = `<h5>A média dos valores em memória é <b style='color:orangered'>${med}</b>.</h5>`


}