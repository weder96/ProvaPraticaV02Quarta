document.addEventListener('DOMContentLoaded', () => {
  // Obter referências para os elementos HTML
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcular-btn');
const resultadoDiv = document.getElementById('resultado');
const erroMessagemDiv = document.getElementById('erro-messagem');
const yourName = document.getElementById('your-name');


function addYourName(){
        yourName.textContent ='Seu Nome'
}
addYourName();

function removeClassResultadoDiv(){
    // add or remove multiple classes using spread syntax
    const cls = ["resultado-baixo", "resultado-normal","resultado-sobre","resultado-obesidade"];
    resultadoDiv.classList.remove(...cls);
}


// Adicionar um event listener ao botão de cálculo
calcularBtn.addEventListener('click', () => {
    // Obter os valores dos inputs e converter para números
    // parseFloat permite números decimais
    removeClassResultadoDiv();
    erroMessagemDiv.textContent = ''
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // --- Validação da Entrada ---
    // Verificar se os valores são números válidos e positivos
    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        erroMessagemDiv.textContent = 'Por favor, insira valores válidos e positivos para peso e altura.';        
        return; // Interrompe a execução da função
    }

    // --- Cálculo do IMC ---
    const imc = peso / (altura * altura);

    // --- Classificação do IMC (usando as categorias da OMS como base) ---
    let classificacao = '';
    let classeCSS = ''; // Para adicionar a classe de estilo correspondente

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classeCSS = 'resultado-baixo';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
        classeCSS = 'resultado-normal';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
        classeCSS = 'resultado-sobre';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade Grau I';
        classeCSS = 'resultado-obesidade';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade Grau II';
        classeCSS = 'resultado-obesidade';
    } else { // imc >= 40
        classificacao = 'Obesidade Grau III (Mórbida)';
        classeCSS = 'resultado-obesidade';
    }

    // --- Exibição do Resultado --- 
    // Exibe o IMC calculado (arredondado) e a classificação
    resultadoDiv.classList.add(classeCSS);
    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});
});