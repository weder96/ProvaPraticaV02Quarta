document.addEventListener('DOMContentLoaded', () => {
    // Obter referências para os elementos HTML
const textArea = document.getElementById('text-area');
const charCountSpan = document.getElementById('char-count');
const wordCountSpan = document.getElementById('word-count');
const yourName = document.getElementById('your-name');


    function addYourName(){
        yourName.textContent ='Nome do Aluno'
    }
    addYourName();

    // Adicionar um event listener para o evento 'input' na área de texto
    textArea.addEventListener('input', () => {    
        // Obter o texto atual da área de texto
        const text = textArea.value;
        
        // --- Contagem de Caracteres ---
        // O número de caracteres é simplesmente o tamanho da string
        const characterCount = text.length;
        // Atualizar o display de caracteres
        charCountSpan.textContent = characterCount;

        // --- Contagem de Palavras ---
        // Dividir o texto por um ou mais espaços em branco (espaço, tab, quebra de linha)
        // A regex \s+ corresponde a um ou mais caracteres de espaço em branco
        const words = text.split(" ");

        // Filtrar o array para remover strings vazias que podem resultar do split
        // (ex: texto com múltiplos espaços seguidos ou começando/terminando com espaço)
        const filteredWords = words.filter(word => word.length > 0);

        // O número de palavras é o tamanho do array filtrado.
        // Se o texto estiver vazio, o split pode retornar [''] ou [],
        // o filter garante que o count seja 0 nesse caso.
        const wordCount = filteredWords.length;

        // Atualizar o display de palavras
        wordCountSpan.textContent = wordCount;
    });
});


