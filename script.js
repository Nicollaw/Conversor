
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
        console.log(number_input)
        document.getElementById('resultado-binario').textContent = number_input.toString(2);
        document.getElementById('resultado-octal').textContent = number_input.toString(8);
        document.getElementById('resultado-hexadecimal').textContent = number_input.toString(16);
        if (number_input < 4000 && number_input > 0 ) {
            document.getElementById('resultado-romano').textContent = converterRomano(number_input) 
        } else document.getElementById('resultado-romano').textContent = 'NUMERO INVALIDO!!'

        
    })
