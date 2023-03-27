
const calcular = document.getElementById('calcular');


//Fazendo o botão escutar as funçoes
calcular.addEventListener('click', imc);

//função do botão imc
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
//validação para que apareça o alert na tela
    if (nome !== '' && altura !== '' && peso !== ''){
        9
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classifiacao = '';

        if (valorIMC < 18.5){
            classifiacao = 'abaixo do peso'
        } else if (valorIMC < 25){
            classifiacao = 'com peso ideal. Parabéns!';
        } else if(valorIMC < 30){
            classifiacao = 'levemente acima do peso. Cuide-se!';
        } else if (valorIMC < 35){
            classifiacao = 'obsidade grau I. Cuide-se!'
        } else if (valorIMC < 40){
            classifiacao = 'obsidade grau II. Cuide-se, urgentemente!'
        } else {
            classifiacao = 'com obesidade grau III. Urgentemente, procure um médico!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classifiacao}`;

    } else{
        resultado.textContent = 'Preencha todos os campos';
    }
} 