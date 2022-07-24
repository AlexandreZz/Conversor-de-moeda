function formataMoeda(event){
    const validCoin = event.target.value
            .split('')
            .filter( s => /\d/.test(s))
            .join("")
            .padStart(3,'0');
        
    const digitsFloat = validCoin.slice(0,-2) + '.' + validCoin.slice(-2);
    event.target.value = mascaraMoeda(digitsFloat);
} 

function mascaraMoeda(valor){
    return  new Intl.NumberFormat('en-IN', { style: 'currency',currency:'USD'}).format(valor);
} 