let c, t, n, r;

c = document.getElementById('capital');
t = document.getElementById('taxa');
n = document.getElementById('tempo');
r = document.getElementById('result');

r.addEventListener('click', function (){
    let capital, taxa, tempo, resultado;

    capital = parseFloat(c.value);
    taxa = parseFloat(t.value)/100;
    tempo = parseFloat(n.value);

    resultado = capital*((1+taxa)**tempo);

    return alert('O valor do montante é igual a: ' + resultado.toFixed(2));
})
