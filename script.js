
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('wheel', function(e) {
        e.preventDefault();
    })
})

document.querySelectorAll('.button-nav').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = btn.dataset.target;
        document.querySelector('.menu').classList.remove('menu-ativo');
        document.querySelector('.menu').classList.add('hide');
        document.getElementById(target).classList.remove('hide');
    });
});
document.querySelectorAll('.back-menu').forEach(bnt => {
    bnt.addEventListener('click', function(){
        bnt.closest('section').classList.add('hide');    
        document.querySelector('.menu').classList.remove('hide');
        document.querySelector('.menu').classList.add('menu-ativo');
        
    })
})
   
const romanos = [
  { valor: 1000, letra: 'M' },{ valor: 900, letra: 'CM' },
  { valor: 500, letra: 'D' },{ valor: 400, letra: 'CD' },
  { valor: 100, letra: 'C' },{ valor: 90, letra: 'XC' },
  { valor: 50, letra: 'L' },{ valor: 40, letra: 'XL' },
  { valor: 10, letra: 'X' },{ valor: 9, letra: 'IX' },
  { valor: 5, letra: 'V' },{ valor: 4, letra: 'IV' },
  { valor: 1, letra: 'I' }
]
 
function converterRomano(num) {
    let result = '';
    let i = 0;
        while(num > 0){  console.log('num:', num, 'i:', i, 'valor:', romanos[i].valor)
        if (num >= romanos[i].valor) {
            result += romanos[i].letra;
           num = num - romanos[i].valor;
        } else i++     
    } 
 return result;
}

document.getElementById('converter-btn').addEventListener('click', function(){
        const number_input = Number.parseInt(document.getElementById('input-btn-number').value)
        document.getElementById('resultado-binario').textContent = number_input.toString(2);
        document.getElementById('resultado-octal').textContent = number_input.toString(8);
        document.getElementById('resultado-hexadecimal').textContent = number_input.toString(16);
        if (number_input < 4000 && number_input > 0 ) {
            document.getElementById('resultado-romano').textContent = converterRomano(number_input) 
        } else document.getElementById('resultado-romano').textContent = 'NUMERO INVALIDO!!'  
    })

document.getElementById('input-celsius').addEventListener('input', function(){
    document.getElementById('input-kelvin').value = (Number.parseFloat(document.getElementById('input-celsius').value) + 273.15).toFixed(2)
    document.getElementById('input-fahrenheit').value = (Number.parseFloat(document.getElementById('input-celsius').value)* 1.8 + 32).toFixed(1)
})

document.getElementById('input-kelvin').addEventListener('input', function(){
    document.getElementById('input-celsius').value = (Number.parseFloat(document.getElementById('input-kelvin').value) - 273.15).toFixed(2)
    document.getElementById('input-fahrenheit').value = ((Number.parseFloat(document.getElementById('input-kelvin').value) - 273.15) * 1.8 + 32).toFixed(2)
})

document.getElementById('input-fahrenheit').addEventListener('input', function(){
    document.getElementById('input-kelvin').value = ((Number.parseFloat(document.getElementById('input-fahrenheit').value) - 32) / 1.8 + 273.15).toFixed(3)
    document.getElementById('input-celsius').value = ((Number.parseFloat(document.getElementById('input-fahrenheit').value) - 32) / 1.8).toFixed(3)
})

document.getElementById('input-kmh').addEventListener('input', function (){
    const kmh = Number.parseFloat(document.getElementById('input-kmh').value)
    document.getElementById('input-ms').value = kmh / 3.6
    document.getElementById('input-mph').value = kmh / 1.60934
    document.getElementById('input-fts').value = kmh / 1.09728
    document.getElementById('input-kn').value = kmh / 1.852
})

document.getElementById('input-ms').addEventListener('input', function (){
    const ms = Number.parseFloat(document.getElementById('input-ms').value)
    document.getElementById('input-kmh').value = ms * 3.6
    document.getElementById('input-mph').value = (ms * 3.6) / 1.60934
    document.getElementById('input-fts').value = (ms * 3.6) / 1.09728
    document.getElementById('input-kn').value = (ms * 3.6) / 1.852
})

document.getElementById('input-mph').addEventListener('input', function (){
    const mph = Number.parseFloat(document.getElementById('input-mph').value)
    document.getElementById('input-kmh').value = mph * 1.60934
    document.getElementById('input-ms').value = (mph * 1.60934) / 3.6
    document.getElementById('input-fts').value = (mph * 1.60934) / 1.09728
    document.getElementById('input-kn').value = (mph * 1.60934) / 1.852
})

document.getElementById('input-fts').addEventListener('input', function (){
    const fts = Number.parseFloat(document.getElementById('input-fts').value)
    document.getElementById('input-kmh').value = fts * 1.09728;
    document.getElementById('input-ms').value = (fts * 1.09728) / 3.6;
    document.getElementById('input-mph').value = (fts * 1.09728) / 1.60934;
    document.getElementById('input-kn').value = (fts * 1.09728) / 1.852;
})

document.getElementById('input-kn').addEventListener('input', function (){
    const kn = Number.parseFloat(document.getElementById('input-kn').value)
    document.getElementById('input-kmh').value = kn * 1.852;
    document.getElementById('input-ms').value = (kn * 1.852) / 3.6;
    document.getElementById('input-mph').value = (kn * 1.852)/ 1.60934;
    document.getElementById('input-fts').value = (kn * 1.852) / 1.09728;
})

document.getElementById('input-kg').addEventListener('input', function (){  
    const kg = Number.parseFloat(document.getElementById('input-kg').value)
    document.getElementById('input-g').value = kg * 1000;
    document.getElementById('input-mg').value = kg * 1000000;
    document.getElementById('input-t').value = kg / 1000;
    document.getElementById('input-lb').value = kg * 2.20462;
    document.getElementById('input-oz').value = kg * 35.274;
})

document.getElementById('input-g').addEventListener('input', function (){  
    const g = Number.parseFloat(document.getElementById('input-g').value)
    document.getElementById('input-kg').value = g / 1000;
    document.getElementById('input-mg').value = (g / 1000) / 1000000;
    document.getElementById('input-t').value = (g / 1000) * 1000;
    document.getElementById('input-lb').value = (g / 1000) / 2.20462;
    document.getElementById('input-oz').value = (g / 1000) / 35.274;
})

document.getElementById('input-mg').addEventListener('input', function (){  
    const mg = Number.parseFloat(document.getElementById('input-mg').value)
    document.getElementById('input-kg').value = mg * 1000000;
    document.getElementById('input-g').value = (mg * 1000000) / 1000;
    document.getElementById('input-t').value = (mg * 1000000) * 1000;
    document.getElementById('input-lb').value = (mg * 1000000) / 2.20462;
    document.getElementById('input-oz').value = (mg * 1000000) / 35.274;
})

document.getElementById('input-t').addEventListener('input', function (){  
    const t = Number.parseFloat(document.getElementById('input-t').value)
    document.getElementById('input-kg').value = t / 1000;
    document.getElementById('input-g').value = (t / 1000) / 1000000
    document.getElementById('input-mg').value = (t / 1000) / 1000;
    document.getElementById('input-lb').value = (t / 1000) / 2.20462;
    document.getElementById('input-oz').value = (t / 1000) / 35.274;
})

document.getElementById('input-lb').addEventListener('input', function (){  
    const lb = Number.parseFloat(document.getElementById('input-lb').value)
    document.getElementById('input-kg').value = lb / 2.20462;
    document.getElementById('input-g').value = (lb / 2.20462) / 1000;
    document.getElementById('input-mg').value = (lb / 2.20462) / 1000000;
    document.getElementById('input-t').value = (lb / 2.20462) * 1000;
    document.getElementById('input-oz').value = (lb / 2.20462) / 35.274;
})

document.getElementById('input-oz').addEventListener('input', function (){  
    const oz = Number.parseFloat(document.getElementById('input-oz').value)
    document.getElementById('input-kg').value = oz / 35.274;
    document.getElementById('input-g').value = (oz / 35.274) / 1000
    document.getElementById('input-mg').value = (oz / 35.274) / 1000000;
    document.getElementById('input-t').value = (oz / 35.274) * 1000;
    document.getElementById('input-lb').value = (oz / 35.274) / 2.20462;
})