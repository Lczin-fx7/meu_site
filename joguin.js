var naleatorio = 0;
var numerros = 0;
//aqui declaro as variaveis para armazenar os numeros e os erros

function refresh(){
    // gerar um numero aleatório
    naleatorio = parseInt(Math.random() *50);
    //retira as casas decimais
    //multiplica por 50
    console.log(naleatorio);
}
    function verifican(){
        var a = document.getElementById('n1').value
        if( a > 50 || a < 1){
            alert('Aposta inválida')
            return;
        }
        if( a > naleatorio){
            numerros++;
            alert('O numero para ser encontrado é menor')
        }
        else if( a < naleatorio ){
        numerros++;
        alert('O numero para ser encontrado é maior')

        }
    else{
        alert("Parabens você acertou com " +numerros+ " tentativas ")
    }
}
    refresh();