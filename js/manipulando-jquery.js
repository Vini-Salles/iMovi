/*Função para esperar a página carregar*/

$(document).ready(function() {
    $('#postagem').click(function() {
        
        /*Ao clicar no Projeto - 1 vai abrir a página do Projeto - 1 */
        $(location).attr('href', 'Projeto1.html');
    });
});
