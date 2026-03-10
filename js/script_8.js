//L1-Ex 8: Média aritmética de 4 notas//


function calcular(){
    let media, nota1, nota2, nota3, nota4;

    nota1 = Number( document.getElementById( "nota1" ).value );
    nota2 = Number( document.getElementById( "nota2" ).value );
    nota3 = Number( document.getElementById( "nota3" ).value );
    nota4 = Number( document.getElementById( "nota4" ).value );

    media = ( nota1 + nota2 + nota3 + nota4 )/4;

    console.log("Soma das notas:");
    console.log( nota1 );
    console.log( nota2 );
    console.log( nota3 );
    console.log( nota4 );
    console.log("Resultado:");
    console.log( media );

}


//console.log( "a media foi: ", media );


//nota1 = Number( ( "Informe a nota 1: " ) );
//nota2 = Number( prompt ( "Informe a nota 2: " ) );
//nota3 = Number( prompt ( "Informe a nota 3: " ) );
//nota4 = Number( prompt ( "Informe a nota 4: " ) );




