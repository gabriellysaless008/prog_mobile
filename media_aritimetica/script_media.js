function calcular_media(){
    
    let nota1, nota2, nota3, nota4;
    let media;

    nota1 = Number( document.getElementById( "nota1" ).value );
    nota2 = Number( document.getElementById( "nota2" ).value );
    nota3 = Number( document.getElementById( "nota3" ).value );
    nota4 = Number( document.getElementById( "nota4" ).value );

    media = ( nota1 + nota2 + nota3 + nota4 ) / 4;

    

    document.getElementById( "media" ).innerHTML = " Você obteve uma media de: " + media;
    console.log(media);
}