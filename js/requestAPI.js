let baseSelecao = document.getElementById('baseCoin'), baseCoin  = '' , url = '',
    targetSelecao = document.getElementById('targetCoin'), targetCoin = '',
    valorDaMoedaCalculada = 0 , valueInput = document.getElementById('formatCoin'),
    result = document.getElementById('resultado');

const key = 'bebd900c31a21160cb8f3fec';

if(baseCoin == '') baseCoin = 'BRL';
if(targetCoin == '') targetCoin = 'BRL'; 

baseSelecao.onchange = function () { baseCoin = this.value; }
targetSelecao.onchange = function () { targetCoin = this.value; }


function requestApiJSON(){
    url = `https://v6.exchangerate-api.com/v6/${key}/latest/${baseCoin}`;
    let selecaoBaseArray = ['BRL','EUR','JPY','RUB','USD'], cortaMoedaFormatada = valueInput.value.split('$')[1].replaceAll(',',''), // remove o $ e , do nosso input
        cotacaoTarget = 0;

    fetch(url)
    .then( res => {     return res.json(); }    )
    .then( data => { 
        for (const checkSelecao of selecaoBaseArray) {
            if(checkSelecao == baseCoin){
                valorDaMoedaCalculada = cortaMoedaFormatada * data.conversion_rates[targetCoin];
                cotacaoTarget = data.conversion_rates[targetCoin]
            }
        }
    })
    .catch( err => {    console.log(err);  }    )
    
    setTimeout(() => {
        result.innerHTML = `
            <h3>Quanto Vale ${valueInput.value}  ${baseCoin}?</h3>
            <p>${valueInput.value} ${baseCoin} = ${mascaraMoeda(valorDaMoedaCalculada)} ${targetCoin}</p>
            <h3>informações sobre cotação</h3>
            <p>1 ${baseCoin} = ${mascaraMoeda(cotacaoTarget)} ${targetCoin}</p>
            <p>1 ${targetCoin} = ${mascaraMoeda(1/cotacaoTarget)} ${baseCoin}</p>
        `;
    }, 1000);
}


function limparInput(){
    valueInput.value = '';
}
