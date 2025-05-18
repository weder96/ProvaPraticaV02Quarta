document.addEventListener('DOMContentLoaded', () => {
  // Obter referências para os elementos HTML
const pesoInput = document.getElementById('peso');

    function addYourName(){
        console.log("Você está aqui!!!")
    }    

    function removeClassResultadoDiv(){
        // add or remove multiple classes using spread syntax
        const cls = ["resultado-baixo", "resultado-normal","resultado-sobre","resultado-obesidade"];
        resultadoDiv.classList.remove(...cls);
    }

    // Adicionar um event listener ao botão de cálculo
    calcularBtn.addEventListener('click', () => {
        removeClassResultadoDiv();
        // Obter os valores dos inputs e converter para números
        console.log("Você Digitou algo!!!")
    });

    addYourName();
});