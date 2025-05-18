document.addEventListener('DOMContentLoaded', () => {
// Obter referências para os elementos HTML
const textArea = document.getElementById('text-area');

    function addYourName(){       
       console.log("Você está aqui!!!")
    }
    addYourName();

    // Adicionar um event listener para o evento 'input' na área de texto
    textArea.addEventListener('input', () => {    
        console.log("Você Digitou algo!!!")
    });
});


