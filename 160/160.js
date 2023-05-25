var aleatorio = 0;
var erros = 0;
//aqui declaro as variaveis para armazenar os numeros e os erros

function refresh(){
    // gerar um numero aleatório
    aleatorio = parseInt(Math.random() *20);
    //retira as casas decimais
    //multiplica por 50
    console.log(aleatorio);
}
    function verificar(){
        var a = document.getElementById('jv').value
        if( a > 50 || a < 1){
            alert('Aposta inválida')
            return;
        }
        if( a > aleatorio){
            erros++;
            alert('O numero para ser encontrado é menor')
        }
        else if( a < aleatorio ){
        erros++;
        alert('O numero para ser encontrado é maior')

        }
    else{
        alert("Parabens você acertou com " +erros+ " tentativas ")
    }
}
    refresh();