let mensagem = document.getElementById('msg');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let btn = document.getElementById('calcular');
let error = document.getElementById('error');

btn.addEventListener('click',function(e){
    e.preventDefault();
    if(peso.value == '' || altura == ''){
        error.textContent = 'Tente Novamente!!!';
        error.style.color = 'red';
        mensagem.innerText = ''
        setTimeout(function(){
            error.textContent = ''
            return;
        },2500);
    }else if(peso.value == 0 || altura.value == 0){
        error.innerText = 'Insira os dados corretos!'
        setTimeout(function(){
            error.textContent = ''
            return;
        },2500);
    }else{
        let imc = peso.value / (altura.value * altura.value);
        mensagem.innerText = `Seu IMC é : ${imc.toFixed(2)}`
        peso.value = ''
        altura.value = ''
    }
})
