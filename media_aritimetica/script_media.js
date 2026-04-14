function calcular_media(){
  
    do{   

    let nota1, nota2, nota3;
    let media;
    let nome_aluno, resposta;
    
    resposta = document.getElementById( "resposta" ).value;
    nome_aluno = document.getElementById( "nome_aluno" ).value;
    nota1 = Number( document.getElementById( "nota1" ).value );
    nota2 = Number( document.getElementById( "nota2" ).value );
    nota3 = Number( document.getElementById( "nota3" ).value );
    //nota4 = Number( document.getElementById( "nota4" ).value );

    media = ( nota1 + nota2 + nota3 ) / 3;

    document.getElementById( "media" ).innerHTML = nome_aluno + " obteve uma media de: " + media;
    console.log( nome_aluno );
    console.log( media );

        if ( resposta == "S" ) {
            console.log("Continua");
        } else {
            console.log("Pare");
        }
        
        console.log( media );
        document.getElementById( "nome_aluno" ).value = "";
        document.getElementById( "nota1" ).value = "";
        document.getElementById( "nota2" ).value = "";
        document.getElementById( "nota3" ).value = "";
        document.getElementById( "resposta" ).value = ""; 

    } while ( resposta == "S" );
}